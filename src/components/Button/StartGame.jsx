import { Link } from "react-router-dom";
function StartGame({ title }) {
  return (
    <Link
      to={`/match-setup/${title.toLowerCase().replace(/\s/g, "-")}`} // e.g., /play/1-vs-1
      className="inline-flex items-center justify-center gap-2.5
             font-[Syne] font-semibold text-[14px]
             rounded-2xl border-none cursor-pointer
             transition-all duration-200 ease-in-out
             px-5.5 py-3 w-full
             bg-[#00e5a0] text-[#060810]
             focus-visible:outline-2 focus-visible:outline-[#00e5a0] focus-visible:outline-offset-1
             active:scale-[0.97]
             hover:bg-[#00f5ae] hover:shadow-[0_0_20px_rgba(0,229,160,0.35)] hover:-translate-y-1"
    >
      Start Game
    </Link>
  );
}

export default StartGame;
