// ======================
// 📦 IMPORTS
// ======================
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy } from "lucide-react";

// ======================
// 🧠 COMPONENT
// ======================
function SingleGround({ SetupData, pointCount, setPointCount }) {
  // ======================
  // 📊 BASIC SETUP
  // ======================
  const navigate = useNavigate();
  const { TargetScore } = SetupData;
  const preBoardNo = useRef(0);

  // ======================
  // 🎛️ STATE
  // ======================
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [newPoint, setNewPoint] = useState({
    teamName: "",
    pointA: 0,
    pointB: 0,
  });

  const [matchHistory, setMatchHistory] = useState({
    id: crypto.randomUUID(),
    gameMode: SetupData.gameMode,
    gameStart: SetupData.gameStart,
    targetScore: TargetScore,
    boardPoint: [],
    countBoard: 0,
    winner: {},
    losser: {},
  });

  // ======================
  // 🧩 DERIVED DATA (Single Source of Truth)
  // ======================
  const teamCardInfo = [
    {
      team: SetupData.playerOne,
      teamName: "TeamA",
      point: newPoint.pointA,
      totalPoint: Number(pointCount.TeamA),
    },
    {
      team: SetupData.playerTwo,
      teamName: "TeamB",
      point: newPoint.pointB,
      totalPoint: Number(pointCount.TeamB),
    },
  ];

  // ======================
  // 🧠 SIDE EFFECT
  // ======================
  useEffect(() => {
    if (matchHistory.countBoard > 1) {
      const prev = JSON.parse(localStorage.getItem("historyData")) || [];
      localStorage.setItem(
        "historyData",
        JSON.stringify([matchHistory, ...prev]),
      );
    }
  }, [matchHistory]);

  // ======================
  // 🧰 HELPERS
  // ======================
  const openModal = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const clearNewPoint = () => {
    setNewPoint({
      teamName: "",
      pointA: 0,
      pointB: 0,
    });
  };

  const setMatchData = (boardPoint, countBoard, winner, losser) => {
    setMatchHistory((pre) => ({
      ...pre,
      boardPoint,
      countBoard,
      winner,
      losser,
    }));
  };

  // ======================
  // 🎯 HANDLERS
  // ======================

  // 🔢 Input Change (Unified)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewPoint({
      teamName: name,
      pointA: name === "TeamA" ? value : 0,
      pointB: name === "TeamB" ? value : 0,
    });
  };

  // ➕ ADD POINT (Unified Logic)
  const handleAddPoints = (e) => {
    const teamName = e.target.name;

    if (teamName !== newPoint.teamName) return;

    const value = teamName === "TeamA" ? newPoint.pointA : newPoint.pointB;

    if (value > 14 || value < 0) return;

    const teamInfo = teamCardInfo.find((t) => t.teamName === teamName);
    const addPoint = Number(pointCount[teamName]) + Number(value);

    // 🧾 Board Entry
    const newBoard = {
      id: crypto.randomUUID(),
      teamName,
      playerOne: teamInfo.team,
      value: Number(value),
      boardNO: pointCount.countBoard,
      totalPoint: teamInfo.totalPoint + Number(value),
    };

    // 📊 Update Score
    setPointCount((pre) => ({
      ...pre,
      [teamName]: addPoint,
      boardPoint: [newBoard, ...pre.boardPoint],
      countBoard: pre.countBoard + 1,
    }));

    preBoardNo.current = pointCount.countBoard;

    // 🏆 Winner Check
    if (addPoint >= TargetScore) {
      const winner = {
        teamName: teamInfo.teamName,
        playerOne: teamInfo.team,
        totalPoint: teamInfo.totalPoint + Number(value),
      };

      const losser = teamCardInfo.find((t) => t.teamName !== teamName);

      openModal();

      setMatchData(
        [newBoard, ...pointCount.boardPoint],
        pointCount.countBoard,
        winner,
        losser,
      );
    }

    clearNewPoint();
  };

  // ➖ MINUS POINT (Unified)
  const handleMinusPoint = (e) => {
    const teamName = e.target.name;

    const teamInfo = teamCardInfo.find((t) => t.teamName === teamName);

    const newBoard = {
      id: crypto.randomUUID(),
      teamName,
      playerOne: teamInfo.team,
      value: -1,
      boardNO: preBoardNo.current,
      totalPoint: teamInfo.totalPoint - 1,
    };

    setPointCount((pre) => ({
      ...pre,
      [teamName]: Number(pre[teamName]) - 1,
      boardPoint: [newBoard, ...pre.boardPoint],
    }));
  };

  // ======================
  // 🎨 UI
  // ======================
  return (
    <>
      <>
        {/* =========================
      MAIN TEAM SECTION
  ========================== */}
        <div
          className="
      w-full min-h-screen

      flex flex-col sm:flex-row
      items-stretch sm:items-center
      justify-center

      gap-6 sm:gap-10

      p-4 sm:p-8 lg:p-16

      bg-[#060810]
    "
        >
          {/* =========================
        TEAM CARDS LOOP
    ========================== */}
          {teamCardInfo.map((team) => (
            <div
              key={team.teamName}
              className="
          w-full sm:flex-1

          bg-[#111722]
          border border-[#1e2836]
          rounded-[28px]

          px-4 py-6 sm:px-6 sm:py-7

          flex flex-col items-center

          shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]

          text-[#e8f0f8]

          transition-all duration-200
        "
            >
              {/* Team Name */}
              <h2
                className="
            text-lg sm:text-xl

            font-extrabold uppercase tracking-wide

            font-[Syne]
            text-[#00e5a0]

            mb-3
          "
              >
                {team.team}
              </h2>

              {/* Total Score */}
              <h1
                className="
            text-4xl sm:text-5xl

            font-bold font-[DM_Sans]

            mb-2
          "
              >
                {team.totalPoint}
              </h1>

              {/* Target Progress */}
              <p className="text-xs text-[#4a5c70] mb-6">
                Target : {TargetScore} (
                <span className="text-[#00e5a0]">
                  {Math.round((team.totalPoint * 100) / TargetScore)}%
                </span>
                )
              </p>

              {/* =========================
            CONTROL PANEL
        ========================== */}
              <div
                className="
            w-full

            flex flex-col sm:flex-row
            gap-3
          "
              >
                {/* Minus Button */}
                <button
                  type="button"
                  onClick={handleMinusPoint}
                  name={team.teamName}
                  className="
              w-full sm:w-auto

              px-4 py-2

              bg-[#ff4d6d1f]
              border border-[#ff4d6d40]
              text-[#ff4d6d]

              rounded-[14px]
              text-sm font-semibold

              transform transition-all duration-200 ease-out

              hover:bg-[#ff4d6d33]
              hover:border-[#ff4d6d]
              hover:shadow-[0_0_20px_rgba(255,77,109,0.25)]

              active:scale-90
            "
                >
                  -1
                </button>

                {/* Input Field */}
                <input
                  type="number"
                  name={team.teamName}
                  id={team.teamName}
                  value={team.point}
                  onChange={handleChange}
                  className="
              w-full sm:flex-1

              bg-[#0d1117]
              border border-[#1e2836]

              rounded-[14px]

              px-3 py-2

              text-center

              outline-none

              focus:border-[#00e5a0]
              focus:shadow-[0_0_20px_rgba(0,229,160,0.35)]

              transition-all duration-200
            "
                />

                {/* Add Points Button */}
                <button
                  type="button"
                  name={team.teamName}
                  onClick={handleAddPoints}
                  className="
              w-full sm:w-auto

              px-4 py-2

              rounded-[14px]

              bg-[#00e5a0]
              text-black
              font-semibold

              transform transition-all duration-200 ease-out

              hover:shadow-[0_0_20px_rgba(0,229,160,0.35)]

              active:scale-90
              active:translate-y-px
            "
                >
                  Add Points
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
      SCOREBOARD TABLE
  ========================== */}
        <div className="w-full px-4 sm:px-8 lg:px-16 pb-10 bg-[#060810]">
          <div
            className="
        w-full
        max-h-100
        overflow-auto

        bg-[#111722]
        border border-[#1e2836]
        rounded-[28px]

        shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]
      "
          >
            <table className="w-full min-w-125 max-sm:min-w-83 text-[#e8f0f8] text-xs sm:text-sm lg:text-base">
              {/* Table Header */}
              <thead className="bg-[#0d1117] sticky top-0 z-10">
                <tr>
                  <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0]">
                    No
                  </th>
                  <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0]">
                    Team
                  </th>
                  <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0]">
                    Score
                  </th>
                  <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0]">
                    Point
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#1e2836]">
                {pointCount.boardPoint.map((board) => (
                  <tr
                    key={board.id}
                    className="
                hover:bg-[#0d1117]
                transition-colors duration-200
              "
                  >
                    <td className="px-0 sm:px-6 py-3 font-medium text-center">
                      {board.boardNO}
                    </td>

                    <td className="px-0 sm:px-6 py-3 text-[#00e5a0] font-semibold text-center capitalize">
                      {board.playerOne}
                    </td>

                    <td className="px-0 sm:px-6 py-3 text-center">
                      {board.value}
                    </td>

                    <td className="px-0 sm:px-6 py-3 text-[#8a9bb0] text-center">
                      {board.totalPoint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================
      OVERLAY (BACKGROUND)
  ========================== */}
        {isDrawerOpen && (
          <div
            onClick={() => {
              navigate("/");
              closeDrawer();
            }}
            className="
        fixed inset-0 z-40

        bg-[#060810d9]
        backdrop-blur-md

        transition-opacity duration-300
      "
          />
        )}

        {/* =========================
      WINNER MODAL
  ========================== */}
        {isDrawerOpen && (
          <div
            className="
        fixed inset-0 z-50

        flex items-center justify-center
        p-4

        pointer-events-none
      "
          >
            <div
              className="
          w-full max-w-md

          bg-[#111722]
          border border-[rgba(0,229,160,0.25)]

          rounded-[28px]

          px-6 py-8 sm:px-10 sm:py-12

          text-center

          shadow-[0_0_20px_rgba(0,229,160,0.35),0_4px_24px_rgba(0,0,0,0.5)]

          relative overflow-hidden

          transform transition-all duration-300 ease-out

          scale-100 opacity-100

          pointer-events-auto
        "
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#00e5a0] to-transparent" />

              {/* Trophy Icon */}
              <div
                className="
            flex justify-center

            text-[#ffd700]

            text-5xl sm:text-6xl

            mb-4

            drop-shadow-[0_0_12px_rgba(255,215,0,0.45)]
          "
              >
                <Trophy />
              </div>

              {/* Title */}
              <p className="text-[11px] tracking-[2px] uppercase font-semibold text-[#00e5a0] mb-2">
                MATCH WINNER
              </p>

              {/* Winner Name */}
              <h2
                className="
            font-[Syne] font-extrabold

            text-2xl sm:text-3xl

            text-[#e8f0f8] uppercase

            mb-2
          "
              >
                {matchHistory.winner.playerOne}
              </h2>

              {/* Score Info */}
              <p className="text-sm text-[#8a9bb0] mb-8">
                Final score:
                <span className="ml-1 text-[#00e5a0] font-semibold">
                  {matchHistory.winner.totalPoint}
                </span>
                . Target was {TargetScore} pts
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* History */}
                <button
                  onClick={() => {
                    navigate("/history");
                    closeDrawer();
                  }}
                  className="
              w-full sm:flex-1

              px-4 py-2

              rounded-[14px]

              bg-[rgba(255,255,255,0.06)]
              border border-[#1e2836]

              text-[#e8f0f8]
              font-semibold

              transition-all duration-200

              hover:bg-[rgba(255,255,255,0.1)]
              hover:border-[#2a3a50]

              active:scale-95
            "
                >
                  View History
                </button>

                {/* New Match */}
                <button
                  onClick={() => {
                    navigate("/match-setup/1-vs-1");
                    closeDrawer();
                  }}
                  className="
              w-full sm:flex-1

              px-4 py-2

              rounded-[14px]

              bg-[#00e5a0]
              text-black
              font-semibold

              transition-all duration-200

              hover:shadow-[0_0_20px_rgba(0,229,160,0.35)]

              active:scale-95
              active:translate-y-px
            "
                >
                  New Match
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default SingleGround;
