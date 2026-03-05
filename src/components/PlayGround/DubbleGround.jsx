import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Trophy } from "lucide-react";
function DubbleGround({ SetupData, pointCount, setPointCount }) {
  // Drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [newPoint, setNewPoint] = useState({
    teamName: "",
    pointA: 0,
    pointB: 0,
  });

  const { TargetScore } = SetupData;
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

  // const [matchHistory, setMatchHistory] = useState();
  const setMatchData = (boardPoint, countBoard, winner, losser) => {
    setMatchHistory((pre) => {
      return {
        ...pre,
        boardPoint: boardPoint,
        countBoard: countBoard,
        winner: winner,
        losser: losser,
      };
    });
  };

  useEffect(() => {
    if (matchHistory.countBoard > 1) {
      const previousHistory =
        JSON.parse(localStorage.getItem("historyData")) || [];

      const updatedHistory = [matchHistory, ...previousHistory];
      localStorage.setItem("historyData", JSON.stringify(updatedHistory));
    }

    // remove locale data for work
    // localStorage.setItem("historyData", JSON.stringify([]));
  }, [matchHistory]);

  function clearNewPoint() {
    setNewPoint({
      ...newPoint,
      teamName: "",
      pointA: 0,
      pointB: 0,
    });
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPoint(() => {
      if (name === "TeamA") {
        return {
          ...newPoint,
          teamName: name,
          pointA: value,
          pointB: 0,
        };
      } else {
        return {
          ...newPoint,
          teamName: name,
          pointA: 0,
          pointB: value,
        };
      }
    });
  };

  const navigate = useNavigate();
  // Close drawer and reset selected item
  const closeDrawer = () => {
    navigate("/");
    setIsDrawerOpen(false);
  };

  function winningModal() {
    setIsDrawerOpen(true);
  }

  const handleAddPoints = (e) => {
    const btnName = e.target.name;
    const teamName = newPoint.teamName;

    if (btnName !== teamName) return;

    const { TeamA, TeamB } = pointCount;

    if (teamName === "TeamA") {
      const value = newPoint.pointA;
      if (value > 14 || value < 0) return;
      const addPoint = Number(TeamA) + Number(value);

      const teamInfo = teamCardInfo.find((team) => team.teamName === teamName);
      const newBoard = {
        id: crypto.randomUUID(),
        teamName: teamName,
        playerOne: teamInfo.playerOne,
        playerTwo: teamInfo.playerTwo,
        value: Number(value),
        boardNO: pointCount.countBoard,
        totalPoint: Number(teamInfo.totalPoint) + Number(value),
      };
      setPointCount((pre) => {
        return {
          ...pre,
          [teamName]: addPoint,
          boardPoint: [newBoard, ...pre.boardPoint],
          countBoard: Number(pre.countBoard + 1),
        };
      });
      if (addPoint >= TargetScore) {
        const findWinner = teamCardInfo.find(
          (team) => teamName === team.teamName,
        );
        const findLosser = teamCardInfo.find(
          (team) => teamName !== team.teamName,
        );

        const winner = {
          teamName: findWinner.teamName,
          playerOne: findWinner.playerOne,
          playerTwo: findWinner.playerTwo,
          totalPoint: Number(findWinner.totalPoint) + Number(value),
        };
        const losser = {
          teamName: findLosser.teamName,
          playerOne: findLosser.playerOne,
          playerTwo: findLosser.playerTwo,
          totalPoint: findLosser.totalPoint,
        };

        winningModal();
        setMatchData(
          [newBoard, ...pointCount.boardPoint],
          pointCount.countBoard,
          winner,
          losser,
        );
      }
      clearNewPoint();
    } else {
      const value = newPoint.pointB;
      if (value > 14 || value < 0) return;
      const addPoint = Number(TeamB) + Number(value);

      const teamInfo = teamCardInfo.find((team) => team.teamName === teamName);
      const newBoard = {
        id: crypto.randomUUID(),
        teamName: teamName,
        playerOne: teamInfo.playerOne,
        playerTwo: teamInfo.playerTwo,
        value: Number(value),
        boardNO: pointCount.countBoard,
        totalPoint: Number(teamInfo.totalPoint) + Number(value),
      };
      setPointCount((pre) => {
        return {
          ...pre,
          [teamName]: addPoint,
          boardPoint: [newBoard, ...pre.boardPoint],
          countBoard: Number(pre.countBoard + 1),
        };
      });
      if (addPoint >= TargetScore) {
        const findWinner = teamCardInfo.find(
          (team) => teamName === team.teamName,
        );

        const findLosser = teamCardInfo.find(
          (team) => teamName != team.teamName,
        );

        const winner = {
          teamName: findWinner.teamName,
          playerOne: findWinner.playerOne,
          playerTwo: findWinner.playerTwo,
          totalPoint: Number(findWinner.totalPoint) + Number(value),
        };
        const losser = {
          teamName: findLosser.teamName,
          playerOne: findLosser.playerOne,
          playerTwo: findLosser.playerTwo,
          totalPoint: findLosser.totalPoint,
        };

        winningModal();
        setMatchData(
          [newBoard, ...pointCount.boardPoint],
          pointCount.countBoard,
          winner,
          losser,
        );
      }
      clearNewPoint();
    }
  };

  return (
    <>
      <div
        className="
      w-full
      min-h-screen

      flex flex-col
      sm:flex-row

      items-stretch
      sm:items-center

      justify-center

      gap-6
      sm:gap-10

      p-4
      sm:p-8
      lg:p-16

      bg-[#060810]
    "
      >
        {/* TEAM CARD */}
        {teamCardInfo.map((team) => (
          <div
            key={team.team}
            className="
          w-full
          sm:flex-1

          bg-[#111722]
          border border-[#1e2836]
          rounded-[28px]

          px-4 py-6
          sm:px-6 sm:py-7

          flex flex-col items-center

          shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]

          text-[#e8f0f8]

          transition-all
          duration-200
        "
          >
            <h2
              className="
            text-lg
            sm:text-xl

            font-extrabold
            uppercase
            tracking-wide

            font-[Syne]
            text-[#00e5a0]

            mb-3
          "
            >
              {team.team}
            </h2>

            <p className="text-[#8a9bb0] text-sm mb-2 capitalize">
              {team.playerOne} + {team.playerTwo}
            </p>

            <h1
              className="
            text-4xl
            sm:text-5xl

            font-bold
            font-[DM_Sans]

            mb-2
          "
            >
              {team.totalPoint}
            </h1>

            <p className="text-xs text-[#4a5c70] mb-6">
              Target: {Number(TargetScore)} ({" "}
              <span className="text-[#00e5a0]">
                {Math.round((team.totalPoint * 100) / TargetScore)}%
              </span>
              )
            </p>

            {/* Controls */}
            <div
              className="
            w-full

            flex flex-col
            sm:flex-row

            gap-3
          "
            >
              {/* -1 Button */}
              <button
                type="button"
                className="
              w-full
              sm:w-auto

              px-4 py-2

              bg-[#ff4d6d1f]
              border border-[#ff4d6d40]
              text-[#ff4d6d]

              rounded-[14px]
              text-sm font-semibold

              transform
              transition-all
              duration-200
              ease-out

              hover:bg-[#ff4d6d33]
              hover:border-[#ff4d6d]
              hover:shadow-[0_0_20px_rgba(255,77,109,0.25)]

              active:scale-90
            "
              >
                -1
              </button>

              {/* Input */}
              <input
                type="number"
                name={team.teamName}
                id={team.team}
                value={team.point}
                onChange={handleChange}
                className="
              w-full
              sm:flex-1

              bg-[#0d1117]
              border border-[#1e2836]

              rounded-[14px]

              px-3 py-2

              text-center

              outline-none

              focus:border-[#00e5a0]
              focus:shadow-[0_0_20px_rgba(0,229,160,0.35)]

              transition-all
              duration-200
            "
              />

              {/* Add Points */}
              <button
                type="button"
                name={team.teamName}
                onClick={handleAddPoints}
                className="
              w-full
              sm:w-auto

              px-4 py-2

              rounded-[14px]

              bg-[#00e5a0]
              text-black
              font-semibold

              transform
              transition-all
              duration-200
              ease-out

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
      {/* Responsive Score Board Table */}

      <div className="w-full px-4 sm:px-8 lg:px-16 pb-10 bg-[#060810]">
        <div
          className="
      w-full
      max-h-100        /* maximum height control */
      overflow-auto        /* vertical + horizontal scroll */
      bg-[#111722]
      border border-[#1e2836]
      rounded-[28px]
      shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]
    "
        >
          <table className="w-full min-w-125 max-sm:min-w-83 text-[#e8f0f8] text-xs sm:text-sm lg:text-base">
            {/* Table Header - always visible */}
            <thead className="bg-[#0d1117] sticky top-0 z-10">
              <tr>
                <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
                  No
                </th>
                <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
                  Team
                </th>
                <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
                  Score
                </th>
                <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
                  Point
                </th>
              </tr>
            </thead>

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
                    {board.playerOne} + {board.playerTwo}
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

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="
      fixed inset-0 z-40

      bg-[#060810d9]
      backdrop-blur-md

      transition-opacity
      duration-300
    "
        />
      )}

      {/* Modal Wrapper */}
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
        w-full
        max-w-md

        bg-[#111722]
        border border-[rgba(0,229,160,0.25)]

        rounded-[28px]

        px-6 py-8
        sm:px-10 sm:py-12

        text-center

        shadow-[0_0_20px_rgba(0,229,160,0.35),0_4px_24px_rgba(0,0,0,0.5)]

        relative overflow-hidden

        transform
        transition-all
        duration-300
        ease-out

        scale-100 opacity-100

        pointer-events-auto
      "
          >
            {/* Top Accent Line */}
            <div
              className="
          absolute top-0 left-0 right-0
          h-0.5
          bg-linear-to-r
          from-transparent
          via-[#00e5a0]
          to-transparent
        "
            />

            {/* Trophy */}
            <div
              className="
    flex justify-center

    text-[#ffd700]

    text-5xl
    sm:text-6xl

    mb-4

    drop-shadow-[0_0_12px_rgba(255,215,0,0.45)]

    transform
    transition-all
    duration-500
    ease-out
  "
            >
              <Trophy />
            </div>

            {/* Pretitle */}
            <p
              className="
          text-[11px]
          tracking-[2px]
          uppercase
          font-semibold

          text-[#00e5a0]

          mb-2
        "
            >
              MATCH WINNER
            </p>

            {/* Winner Name */}
            <h2
              className="
          font-[Syne]
          font-extrabold

          text-2xl
          sm:text-3xl

          text-[#e8f0f8]

          mb-2
        "
            >
              Team A
            </h2>

            {/* Score Info */}
            <p
              className="
          text-sm
          text-[#8a9bb0]

          mb-8
        "
            >
              final score:
              <span className="ml-1 text-[#00e5a0] font-semibold">29</span>.
              Target was 29 pts
            </p>

            {/* Actions */}
            <div
              className="
          flex flex-col
          sm:flex-row

          gap-3
        "
            >
              {/* View History */}
              <button
                onClick={() => {
                  navigate("/history");
                  closeDrawer();
                }}
                className="
            w-full
            sm:flex-1

            px-4 py-2

            rounded-[14px]

            bg-[rgba(255,255,255,0.06)]
            border border-[#1e2836]

            text-[#e8f0f8]
            font-semibold

            transform
            transition-all
            duration-200
            ease-out

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
                  navigate("/match-setup/2-vs-2");
                  closeDrawer();
                }}
                className="
            w-full
            sm:flex-1

            px-4 py-2

            rounded-[14px]

            bg-[#00e5a0]
            text-black
            font-semibold

            transform
            transition-all
            duration-200
            ease-out

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
  );
}

export default DubbleGround;
