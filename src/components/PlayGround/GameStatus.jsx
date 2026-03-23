import { RotateCcw, Trophy } from "lucide-react";
import UndoRedo from "./UndoRedo";

function GameStatus({
  gameMode,
  TargetScore,
  resetMatch,
  endMatch,
  undoRedoFunction,
}) {
  return (
    <div
      className="
        /* ===== Layout ===== */
        w-full

        flex flex-col
        sm:flex-row

        items-start
        sm:items-center

        justify-between

        gap-3
        sm:gap-4

        /* ===== Spacing ===== */
        px-4 py-3
        sm:px-6 sm:py-3.5

        /* ===== UI / Visual ===== */
        bg-[#0d1117e6]
        backdrop-blur-md

        border-b border-[#1e2836]
      "
    >
      {/* =========================
          LEFT SECTION
          (Game Info)
      ========================== */}
      <div
        className="
          /* Layout */
          w-full
          sm:w-auto

          flex flex-row
          items-center

          max-sm:justify-between

          gap-2
          sm:gap-3
        "
      >
        {/* Game Mode Badge */}
        <span
          className="
            /* Layout */
            inline-flex items-center

            /* Spacing */
            px-3 py-1

            /* Typography */
            text-[11px]
            sm:text-xs
            font-semibold
            tracking-wide
            uppercase

            /* UI */
            rounded-lg

            bg-[#00e5a01f]
            border border-[rgba(0,229,160,0.2)]
            text-[#00e5a0]
          "
        >
          <Trophy className="mr-1 h-3.5 w-3.5" />
          {gameMode}
        </span>

        {/* Target Score Info */}
        <span
          className="
            /* Typography */
            text-sm

            /* Color */
            text-[#8a9bb0]
          "
        >
          Target:
          <span className="ml-1 text-[#e8f0f8] font-semibold">
            {TargetScore} pts
          </span>
        </span>
      </div>

      {/* =========================
          RIGHT SECTION
          (Actions)
      ========================== */}
      <div
        className="
          /* Layout */
          w-full
          sm:w-auto

          flex flex-row
          items-center

          max-sm:justify-between

          gap-2
          sm:gap-3
        "
      >
        {/* Undo and Redo  Button */}
        <UndoRedo undoRedoFunction={undoRedoFunction} />

        {/* Reset Button */}
        <button
          data-action="reset-match"
          onClick={resetMatch}
          className="
            /* Layout */
            w-full
            sm:w-auto

            inline-flex items-center justify-center
            gap-2

            /* Spacing */
            px-4 py-2

            /* Typography */
            text-sm
            font-semibold

            /* UI */
            rounded-lg

            bg-[rgba(255,255,255,0.06)]
            text-[#e8f0f8]
            border border-[#1e2836]

            /* Animation */
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

        {/* End Match Button */}
        <button
          type="button"
          onClick={endMatch}
          className="
            /* Layout */
            w-full
            sm:w-auto

            inline-flex items-center justify-center
            gap-2

            /* Spacing */
            px-1 py-2

            /* Typography */
            text-sm
            font-semibold

            /* UI */
            rounded-lg

            bg-[#ff4d6d1f]
            border border-[#ff4d6d40]
            text-[#ff4d6d]

            /* Animation */
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
