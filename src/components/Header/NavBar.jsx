import { Link } from "react-router-dom";
import Setting from "../../assets/settings.png";
function NavBar() {
  return (
    <nav className="flex items-center gap-2">
      <Link
        to={"/"}
        className="px-4 py-2 rounded-lg text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
      >
        Home
      </Link>
      <Link
        to={"/history"}
        className="px-4 py-2 rounded-lg text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
      >
        History
      </Link>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/3 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
        <img src={Setting} alt="Settings" className="w-5 h-5" />
      </button>
      {/* <div className="w-6 h-6 bg-white/10 mx-2"></div> */}
    </nav>
  );
}

export default NavBar;
