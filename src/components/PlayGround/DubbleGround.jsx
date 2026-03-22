// ======================
// 📦 IMPORTS
// ======================
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy } from "lucide-react";

// ======================
// 🧠 COMPONENT
// ======================
function DubbleGround({ SetupData, pointCount, setPointCount }) {
  // ======================
  // 📊 BASIC SETUP
  // ======================
  const navigate = useNavigate();
  const { TargetScore } = SetupData;
  const preBoardNo = useRef(0);

  // ======================
  // 🎛️ STATE MANAGEMENT
  // ======================

  // Drawer (Winning Modal)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Input State
  const [newPoint, setNewPoint] = useState({
    teamName: "",
    pointA: 0,
    pointB: 0,
  });

  // Match History State
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
  // 🧩 DERIVED DATA
  // ======================
  const teamCardInfo = [
    {
      team: "Team A",
      playerOne: SetupData.playerOne,
      playerTwo: SetupData.playerTwo,
      teamName: "TeamA",
      point: newPoint.pointA,
      totalPoint: Number(pointCount.TeamA),
    },
    {
      team: "Team B",
      playerOne: SetupData.playerThree,
      playerTwo: SetupData.playerFour,
      teamName: "TeamB",
      point: newPoint.pointB,
      totalPoint: Number(pointCount.TeamB),
    },
  ];

  // ======================
  // 🧠 SIDE EFFECTS
  // ======================

  // Save match history to localStorage
  useEffect(() => {
    if (matchHistory.countBoard > 1) {
      const prev = JSON.parse(localStorage.getItem("historyData")) || [];
      const updated = [matchHistory, ...prev];

      localStorage.setItem("historyData", JSON.stringify(updated));
    }
  }, [matchHistory]);

  // ======================
  // 🧰 HELPER FUNCTIONS
  // ======================

  // Reset input
  function clearNewPoint() {
    setNewPoint({
      teamName: "",
      pointA: 0,
      pointB: 0,
    });
  }

  // Open / Close modal
  const openModal = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Update match history
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

  // 🎯 EVENT HANDLERS
  // ======================

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewPoint(() => ({
      teamName: name,
      pointA: name === "TeamA" ? value : 0,
      pointB: name === "TeamB" ? value : 0,
    }));
  };

  // ➕ Add Points (CORE LOGIC)
  const handleAddPoints = (e) => {
    const teamName = e.target.name;
    if (teamName !== newPoint.teamName) return;

    const value = teamName === "TeamA" ? newPoint.pointA : newPoint.pointB;

    if (value > 14 || value < 0) return;

    const teamInfo = teamCardInfo.find((t) => t.teamName === teamName);

    const addPoint = Number(pointCount[teamName]) + Number(value);

    // Create board entry
    const newBoard = {
      id: crypto.randomUUID(),
      teamName,
      playerOne: teamInfo.playerOne,
      playerTwo: teamInfo.playerTwo,
      value: Number(value),
      boardNO: pointCount.countBoard,
      totalPoint: teamInfo.totalPoint + Number(value),
    };

    // Update state
    setPointCount((pre) => ({
      ...pre,
      [teamName]: addPoint,
      boardPoint: [newBoard, ...pre.boardPoint],
      countBoard: pre.countBoard + 1,
    }));

    preBoardNo.current = pointCount.countBoard;

    // 🏆 WIN CHECK
    if (addPoint >= TargetScore) {
      const winner = {
        ...teamInfo,
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

  // ➖ Minus Point
  const handleMinusPoint = (e) => {
    const teamName = e.target.name;

    const teamInfo = teamCardInfo.find((t) => t.teamName === teamName);

    const newBoard = {
      id: crypto.randomUUID(),
      teamName,
      playerOne: teamInfo.playerOne,
      playerTwo: teamInfo.playerTwo,
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
  // 🎨 UI (JSX)
  // ======================
  return (
    <>
      {/* =========================
      🟦 MAIN LAYOUT (TEAM SECTION)
  ========================= */}
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
        🧩 TEAM CARDS (LOOP)
    ========================= */}
        {teamCardInfo.map((team) => (
          <div
            key={team.team}
            className="
          w-full sm:flex-1

          bg-[#111722]
          border border-[#1e2836]
          rounded-[28px]

          px-4 py-6 sm:px-6 sm:py-7

          flex flex-col items-center

          text-[#e8f0f8]

          shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]

          transition-all duration-200
        "
          >
            {/* 🏷️ Team Name */}
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

            {/* 👥 Players */}
            <p className="text-[#8a9bb0] text-sm mb-2 capitalize">
              {team.playerOne} + {team.playerTwo}
            </p>

            {/* 🔢 Total Score */}
            <h1
              className="
            text-4xl sm:text-5xl
            font-bold font-[DM_Sans]
            mb-2
          "
            >
              {team.totalPoint}
            </h1>

            {/* 🎯 Target Progress */}
            <p className="text-xs text-[#4a5c70] mb-6">
              Target: {Number(TargetScore)} (
              <span className="text-[#00e5a0]">
                {Math.round((team.totalPoint * 100) / TargetScore)}%
              </span>
              )
            </p>

            {/* =========================
            🎮 CONTROLS
        ========================= */}
            <div className="w-full flex flex-col sm:flex-row gap-3">
              {/* ➖ Minus Button */}
              <button
                type="button"
                name={team.teamName}
                onClick={handleMinusPoint}
                className="
              w-full sm:w-auto
              px-4 py-2

              bg-[#ff4d6d1f]
              border border-[#ff4d6d40]
              text-[#ff4d6d]

              rounded-[14px]
              text-sm font-semibold

              transition-all duration-200

              hover:bg-[#ff4d6d33]
              hover:border-[#ff4d6d]
              hover:shadow-[0_0_20px_rgba(255,77,109,0.25)]

              active:scale-90
            "
              >
                -1
              </button>

              {/* 🔢 Input Field */}
              <input
                type="number"
                name={team.teamName}
                id={team.team}
                value={team.point}
                onChange={handleChange}
                className="
              w-full sm:flex-1

              bg-[#0d1117]
              border border-[#1e2836]

              rounded-[14px]
              px-3 py-2

              text-center outline-none

              transition-all duration-200

              focus:border-[#00e5a0]
              focus:shadow-[0_0_20px_rgba(0,229,160,0.35)]
            "
              />

              {/* ➕ Add Button */}
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

              transition-all duration-200

              hover:shadow-[0_0_20px_rgba(0,229,160,0.35)]

              active:scale-90 active:translate-y-px
            "
              >
                Add Points
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
      📊 SCOREBOARD TABLE
  ========================= */}
      <div className="w-full px-4 sm:px-8 lg:px-16 pb-10 bg-[#060810]">
        <div
          className="
        w-full max-h-100
        overflow-auto

        bg-[#111722]
        border border-[#1e2836]
        rounded-[28px]

        shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]
      "
        >
          <table className="w-full min-w-125 max-sm:min-w-83 text-[#e8f0f8] text-xs sm:text-sm lg:text-base">
            {/* 🧾 TABLE HEADER */}
            <thead className="bg-[#0d1117] sticky top-0 z-10">
              <tr>
                {["No", "Team", "Score", "Point"].map((head) => (
                  <th
                    key={head}
                    className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0]"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            {/* 📥 TABLE BODY */}
            <tbody className="divide-y divide-[#1e2836]">
              {pointCount.boardPoint.map((board) => (
                <tr
                  key={board.id}
                  className="hover:bg-[#0d1117] transition-colors duration-200"
                >
                  <td className="text-center py-3">{board.boardNO}</td>

                  <td className="text-center text-[#00e5a0] font-semibold capitalize">
                    {board.playerOne} + {board.playerTwo}
                  </td>

                  <td className="text-center">{board.value}</td>

                  <td className="text-center text-[#8a9bb0]">
                    {board.totalPoint}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================
      🌫️ OVERLAY (CLICK TO CLOSE)
  ========================= */}
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
      "
        />
      )}

      {/* =========================
      🏆 WINNER MODAL
  ========================= */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
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

          pointer-events-auto
        "
          >
            {/* ✨ Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#00e5a0] to-transparent" />

            {/* 🏆 Trophy */}
            <div className="flex justify-center text-[#ffd700] text-5xl mb-4">
              <Trophy />
            </div>

            {/* 🏷️ Title */}
            <p className="text-[11px] tracking-[2px] uppercase font-semibold text-[#00e5a0] mb-2">
              MATCH WINNER
            </p>

            {/* 👑 Winner Info */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e8f0f8]">
              {matchHistory.winner.teamName}
            </h2>

            <p className="capitalize mb-3">
              {matchHistory.winner.playerOne} & {matchHistory.winner.playerTwo}
            </p>

            {/* 📊 Score */}
            <p className="text-sm text-[#8a9bb0] mb-8">
              Final score:
              <span className="ml-1 text-[#00e5a0] font-semibold">
                {matchHistory.winner.totalPoint}
              </span>
              . Target was {TargetScore} pts
            </p>

            {/* 🎯 ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* 📜 History */}
              <button
                onClick={() => {
                  navigate("/history");
                  closeDrawer();
                }}
                className="w-full sm:flex-1 px-4 py-2 rounded-[14px] border text-[#e8f0f8]"
              >
                View History
              </button>

              {/* 🔄 New Match */}
              <button
                onClick={() => {
                  navigate("/match-setup/2-vs-2");
                  closeDrawer();
                }}
                className="w-full sm:flex-1 px-4 py-2 rounded-[14px] bg-[#00e5a0] text-black font-semibold"
              >
                New Match
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DubbleGround;
