import { Link } from "react-router-dom";
import Setting from "../../assets/settings.png";
function NavBar() {
  return (
    <nav className="flex items-center gap-1 sm:gap-2">
      <Link
        to="/"
        className="px-3 sm:px-4 py-2 rounded-md sm:rounded-lg text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
      >
        Home
      </Link>

      <Link
        to="/history"
        className="px-3 sm:px-4 py-2 rounded-md sm:rounded-lg text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
      >
        History
      </Link>

      <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
        <img src={Setting} alt="Settings" className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </nav>
  );
}

export default NavBar;
