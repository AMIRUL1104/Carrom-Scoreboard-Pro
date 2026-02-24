import AppLogo from "./AppLogo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <AppLogo />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
