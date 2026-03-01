// import { Disc2 } from "lucide-react";
import icon from "../../assets/disc-2.png";
function AppLogo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-linear-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-white/20 transition-colors">
        <img
          src={icon}
          alt="Carrom Pro Logo"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </div>

      <span className="text-base sm:text-lg font-extrabold leading-none tracking-tight text-[#00e5a0] whitespace-nowrap">
        Carrom <span className="text-zinc-500 font-bold">Pro</span>
      </span>
    </div>
  );
}
export default AppLogo;
