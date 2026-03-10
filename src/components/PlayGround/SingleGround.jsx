import { useState } from "react";

function SingleGround({ SetupData, pointCount, setPointCount }) {
  // console.log(SetupData);

  const [newPoint, setNewPoint] = useState({
    teamName: "",
    pointA: 0,
    pointB: 0,
  });

  const { TargetScore } = SetupData;
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

            <h1
              className="
            text-4xl
            sm:text-5xl

            font-bold
            font-[DM_Sans]

            mb-2
          "
            >
              20 {/* {team.totalPoint} */}
            </h1>

            <p className="text-xs text-[#4a5c70] mb-6">
              {/* Target: {Number(TargetScore)} ({" "} */}
              Target : {TargetScore}
              <span className="text-[#00e5a0]">
                (10%){" "}
                {/* {Math.round((team.totalPoint * 100) / TargetScore)}% */}
              </span>
              {/* ) */}
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
                // onClick={handleAddPoints}
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
    </>
  );
}

export default SingleGround;
