// import { Disc2 } from "lucide-react";
import icon from "../../assets/disc-2.png";
function AppLogo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="w-10 h-10 rounded-xl  from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-white/20 transition-colors">
        <img src={icon} alt="Carrom Pro Logo" className="w-6 h-6" />
      </div>

      <span className="text-lg font-extrabold leading-6 font-[Syne] tracking-tight text-[#00e5a0]">
        Carrom <span className="text-zinc-500 font-bold">Pro</span>
      </span>
    </div>
  );
}

export default AppLogo;
