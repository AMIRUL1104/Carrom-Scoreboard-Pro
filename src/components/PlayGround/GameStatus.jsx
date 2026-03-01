import { RotateCcw, Trophy } from "lucide-react";

function GameStatus({ gameMode, TargetScore }) {
  return (
    <div className="bg-[#0d1117e6] backdrop-blur-lg border-b border-[#1e2836] px-6 py-3.5 flex items-center gap-3.5 flex-wrap">
      <div className="flex items-center gap-2 flex-1">
        <span className="bg-[#00e5a01f] border border-[rgba(0,229,160,0.2)] rounded-lg px-2.5 py-1 text-[11px] font-semibold tracking-[0.8px] uppercase text-[#00e5a0] font-['DM_Sans',sans-serif]">
          <Trophy className="inline-flex items-center pr-1" /> {gameMode}
        </span>

        <span className="text-[13px] text-[#8a9bb0] font-['DM_Sans',sans-serif]">
          Target:
          <span className="text-[#e8f0f8] font-semibold">
            {TargetScore} pts
          </span>
        </span>
      </div>

      <button
        data-action="reset-match"
        className="inline-flex items-center justify-center gap-2 font-semibold text-[13px] rounded-lg cursor-pointer whitespace-nowrap tracking-[0.2px] 
           bg-[rgba(255,255,255,0.06)] text-[#e8f0f8] border border-[#1e2836] 
           px-3.25 py-1.75
           transition-all duration-220 ease-in-out
           hover:bg-[rgba(255,255,255,0.1)] hover:border-[#2a3a50]
            focus-visible:outline-2 focus-visible:outline-[#00e5a0] focus-visible:outline-offset-[3px]
           active:scale-[0.97]
           font-['DM_Sans',sans-serif]"
      >
        <RotateCcw className="inline-flex items-center pr-1 " /> Reset
      </button>
    </div>
  );
}

export default GameStatus;
