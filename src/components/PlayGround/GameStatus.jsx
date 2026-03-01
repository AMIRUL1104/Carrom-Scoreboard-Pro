import { RotateCcw, Trophy } from "lucide-react";

function GameStatus({ gameMode, TargetScore }) {
  // return (
  //   <div className="bg-[#0d1117e6] backdrop-blur-lg border-b border-[#1e2836] px-6 py-3.5 flex items-center gap-3.5 flex-wrap">
  //     <div className="flex items-center gap-2 flex-1">
  //       <span className="bg-[#00e5a01f] border border-[rgba(0,229,160,0.2)] rounded-lg px-2.5 py-1 text-[11px] font-semibold tracking-[0.8px] uppercase text-[#00e5a0] font-['DM_Sans',sans-serif]">
  //         <Trophy className="inline-flex items-center pr-1" /> {gameMode}
  //       </span>

  //       <span className="text-[13px] text-[#8a9bb0] font-['DM_Sans',sans-serif]">
  //         Target:
  //         <span className="text-[#e8f0f8] font-semibold">
  //           {TargetScore} pts
  //         </span>
  //       </span>
  //     </div>

  //     <button
  //       data-action="reset-match"
  //       className="inline-flex items-center justify-center gap-2 font-semibold text-[13px] rounded-lg cursor-pointer whitespace-nowrap tracking-[0.2px]
  //          bg-[rgba(255,255,255,0.06)] text-[#e8f0f8] border border-[#1e2836]
  //          px-3.25 py-1.75
  //          transition-all duration-220 ease-in-out
  //          hover:bg-[rgba(255,255,255,0.1)] hover:border-[#2a3a50]
  //           focus-visible:outline-2 focus-visible:outline-[#00e5a0] focus-visible:outline-offset-[3px]
  //          active:scale-[0.97]
  //          font-['DM_Sans',sans-serif]"
  //     >
  //       <RotateCcw className="inline-flex items-center pr-1 " /> Reset
  //     </button>
  //   </div>
  // );

  return (
    <div
      className="
      w-full

      bg-[#0d1117e6]
      backdrop-blur-md

      border-b border-[#1e2836]

      px-4 py-3
      sm:px-6 sm:py-3.5

      flex flex-col
      sm:flex-row

      items-start
      sm:items-center

      justify-between

      gap-3
      sm:gap-4
    "
    >
      {/* Left Section */}
      <div
        className="
        w-full
        sm:w-auto

        flex flex-row
        sm:flex-row

        items-center
        sm:items-center
        max-sm:justify-between

        gap-2
        sm:gap-3
      "
      >
        {/* Game Mode Badge */}
        <span
          className="
          inline-flex items-center

          bg-[#00e5a01f]
          border border-[rgba(0,229,160,0.2)]

          rounded-lg

          px-3 py-1

          text-[11px]
          sm:text-xs

          font-semibold
          tracking-wide
          uppercase

          text-[#00e5a0]
        "
        >
          <Trophy className="mr-1 h-3.5 w-3.5" />
          {gameMode}
        </span>

        {/* Target Info */}
        <span
          className="
          text-sm
          text-[#8a9bb0]
        "
        >
          Target:
          <span className="ml-1 text-[#e8f0f8] font-semibold">
            {TargetScore} pts
          </span>
        </span>
      </div>

      {/* Reset Button */}
      <button
        data-action="reset-match"
        className="
        w-full
        sm:w-auto

        inline-flex items-center justify-center
        gap-2

        px-4 py-2

        rounded-lg

        bg-[rgba(255,255,255,0.06)]
        text-[#e8f0f8]

        border border-[#1e2836]

        text-sm
        font-semibold

        transform
        transition-all
        duration-200
        ease-out

        hover:bg-[rgba(255,255,255,0.1)]
        hover:border-[#2a3a50]

        focus-visible:outline-2
        focus-visible:outline-[#00e5a0]
        focus-visible:outline-offset-2

        active:scale-95
      "
      >
        <RotateCcw className="h-4 w-4" />
        Reset
      </button>
    </div>
  );
}

export default GameStatus;
