import { RotateCcw, Trophy } from "lucide-react";

function GameStatus({ gameMode, TargetScore, resetMatch, endMatch }) {
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

      <div
        className="   w-full
        sm:w-auto

        flex flex-row
        sm:flex-row

        items-center
        sm:items-center
        max-sm:justify-between

        gap-2
        sm:gap-3 "
      >
        {/* Reset Button */}
        <button
          data-action="reset-match"
          onClick={resetMatch}
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

        {/* end match button  */}
        <button
          type="button"
          onClick={endMatch}
          className="
              w-full
              sm:w-auto

              inline-flex items-center justify-center
               gap-2

              px-1 py-2

              rounded-lg
              text-sm font-semibold

             bg-[#ff4d6d1f]
              border border-[#ff4d6d40]
              text-[#ff4d6d]

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
          End Match
        </button>
      </div>
    </div>
  );
}

export default GameStatus;
