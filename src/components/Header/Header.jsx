import AppLogo from "./AppLogo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-8 h-14 sm:h-16 flex items-center justify-between">
        <AppLogo />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
