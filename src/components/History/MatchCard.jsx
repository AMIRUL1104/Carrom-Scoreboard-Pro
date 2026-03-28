import icon from "../../assets/calendar.png";
import trash from "../../assets/trash-2.png";
import trophy from "../../assets/trophy.png";
import timer from "../../assets/timer.png";

function MatchCard({ match, openModal, handleDelete }) {
  const { id, gameMode, gameStart, targetScore, losser, winner } = match;

  return (
    <div
      id={id}
      onClick={openModal}
      className="
      mx-2 sm:mx-2.5
      relative z-10
      bg-[#111722]
      border border-[#1e2836]
      rounded-2xl sm:rounded-[28px]
      shadow-[0_4px_24px_rgba(0,0,0,0.5)]
      overflow-hidden
    "
    >
      {/* Top Glow Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
        absolute
        w-60 h-60 sm:w-96 sm:h-96
        bg-[radial-gradient(circle,#00e5a0_0%,transparent_70%)]
        opacity-[0.08]
        blur-[60px] sm:blur-[80px]
        -top-16 sm:-top-20
        left-1/2 -translate-x-1/2
      "
        ></div>
      </div>

      {/* ===== Part 1 ===== */}
      <div className="p-3 sm:p-5 border-b border-[#1e2836] relative z-10">
        {/* Layer 1 */}
        <div className="flex items-start sm:items-center justify-between gap-2 mb-3 flex-wrap">
          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-[#8a9bb0]">
            <span className="px-2 sm:px-3 py-1 rounded-full bg-[#00e5a01f] border border-[#00e5a033] text-[#00e5a0] capitalize whitespace-nowrap">
              {gameMode.toLowerCase() === "single player"
                ? `🌀 ${gameMode}`
                : `👥 ${gameMode}`}
            </span>

            <p className="flex items-center gap-1 whitespace-nowrap">
              <img className="w-3 h-3 opacity-70" src={icon} />
              {/* <span>{gameStart}</span> */}
              <span>
                {gameStart.day} | {gameStart.date} | {gameStart.time}
              </span>
            </p>
          </div>

          <button
            id={id}
            onClick={handleDelete}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-[#0d1117] transition"
          >
            <img
              id={id}
              onClick={handleDelete}
              className="w-4 h-4 opacity-70"
              src={trash}
            />
          </button>
        </div>

        {/* Layer 2 */}
        <h3 className="text-sm sm:text-lg font-semibold text-white mb-2 capitalize leading-snug">
          {winner.playerOne}
          {winner.playerTwo ? ` + ${winner.playerTwo}` : ""}

          <span
            className="
          px-2 sm:px-3 py-0.5
          font-normal ml-1 sm:ml-2
          rounded-full
          bg-[#00e5a01f]
          border border-[#00e5a033]
          text-[#00e5a0]
          text-[10px] sm:text-xs
          inline-flex items-center gap-1
        "
          >
            <img className="w-3 h-3" src={trophy} />
            Winner
          </span>
        </h3>

        {/* Layer 3 */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#8a9bb0] mb-3 sm:mb-4">
          <p className="flex items-center gap-1">
            <img className="w-3 sm:w-4 h-3 sm:h-4 opacity-70" src={timer} />
            <span>10m 25s</span>
          </p>

          <p>
            Target:{" "}
            <span className="text-white font-medium">{targetScore}</span>
          </p>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          <div className="bg-[#0d1117] border border-[#1e2836] rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 text-center">
            <p className="text-[10px] sm:text-sm text-[#8a9bb0] mb-1 capitalize leading-tight">
              {winner.playerOne}
              {winner.playerTwo ? ` + ${winner.playerTwo}` : ""}
            </p>
            <h3 className="text-lg sm:text-2xl font-bold text-[#00e5a0]">
              {winner.totalPoint}
            </h3>
          </div>

          <div className="bg-[#0d1117] border border-[#1e2836] rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 text-center">
            <p className="text-[10px] sm:text-sm text-[#8a9bb0] mb-1 capitalize leading-tight">
              {losser.playerOne}
              {losser.playerTwo ? ` + ${losser.playerTwo}` : ""}
            </p>
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              {losser.totalPoint}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
