import { Link } from "react-router-dom";
import Setting from "../../assets/settings.png";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navigation Menu
      <nav
        className={`
      ${isOpen ? "flex" : "hidden"} 
      sm:flex flex-col sm:flex-row 
      absolute sm:static top-14 right-0 
      bg-zinc-900 sm:bg-transparent 
      p-4 sm:p-0 border border-white/5 sm:border-none 
      rounded-xl sm:rounded-none 
      items-start sm:items-center 
      gap-2 sm:gap-2 z-50
    `}
      >
        <Link
          to="/"
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
        >
          Home
        </Link>

        <Link
          to="/history"
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
        >
          History
        </Link>

        <Link
          to="/dashboard"
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
        >
          DashBoard
        </Link>

        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
          <img src={Setting} alt="Settings" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </nav> */}

      <nav
        className={`
    /* Mobile Styles Base */
    fixed left-0 w-full flex flex-col items-center gap-4 py-8
 bg-black/85 backdrop-blur-md border-b border-white/10
    transition-all duration-300 ease-in-out z-50
    
    /* Animation Logic (Top to Down) */
    ${
      isOpen
        ? "top-14 opacity-100 translate-y-0 pointer-events-auto"
        : "-top-full opacity-0 -translate-y-10 pointer-events-none"
    }

    /* Desktop Styles (Resetting Mobile Styles) */
    sm:static sm:flex-row sm:w-auto sm:h-auto sm:py-0
    sm:bg-transparent sm:backdrop-blur-none sm:border-none
    sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto
    sm:gap-2
  `}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-lg sm:text-sm md:text-base text-zinc-400 hover:text-white transition-all font-medium px-6 py-2 rounded-xl hover:bg-white/5 w-[80%] sm:w-auto text-center"
        >
          Home
        </Link>

        <Link
          to="/history"
          onClick={() => setIsOpen(false)}
          className="text-lg sm:text-sm md:text-base text-zinc-400 hover:text-white transition-all font-medium px-6 py-2 rounded-xl hover:bg-white/5 w-[80%] sm:w-auto text-center"
        >
          History
        </Link>

        <Link
          to="/dashboard"
          onClick={() => setIsOpen(false)}
          className="text-lg sm:text-sm md:text-base text-zinc-400 hover:text-white transition-all font-medium px-6 py-2 rounded-xl hover:bg-white/5 w-[80%] sm:w-auto text-center"
        >
          Dashboard
        </Link>

        <button className="mt-2 sm:mt-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
          <img src={Setting} alt="Settings" className="w-5 h-5" />
        </button>
      </nav>

      {/* Menu Toggle Button (Only for Mobile) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="hidden max-sm:block p-2 text-zinc-400 hover:text-white"
      >
        <MenuIcon />
      </button>
    </div>
  );

  //   return (
  //     <>
  //       {/* <nav className="flex items-center gap-1 sm:gap-2 max-sm:hidden">
  //         <Link
  //           to="/"
  //           className="px-3 sm:px-4 py-2 rounded-md sm:rounded-lg text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
  //         >
  //           Home
  //         </Link>

  //         <Link
  //           to="/history"
  //           className="px-3 sm:px-4 py-2 rounded-md sm:rounded-lg text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
  //         >
  //           History
  //         </Link>

  //         <Link
  //           to="/dashboard"
  //           className="px-3 sm:px-4 py-2 rounded-md sm:rounded-lg text-sm sm:text-base text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium"
  //         >
  //           DashBoard
  //         </Link>

  //         <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
  //           <img src={Setting} alt="Settings" className="w-4 h-4 sm:w-5 sm:h-5" />
  //         </button>
  //       </nav>
  //       <button type="button" className=" hidden max-sm:block">
  //         <MenuIcon />
  //       </button> */}

  //     </>
  //   );
}

export default NavBar;
