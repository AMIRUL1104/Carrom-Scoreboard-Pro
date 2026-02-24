import Header from "../Header/Header";
import icon from "../../assets/disc-2.png";
import Cards from "./Cards";
function Home() {
  return (
    <div>
      <Header />

      <section className=" pt-36  flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 ">
          <div
            className="absolute rounded-full blur-[80px] opacity-[0.15]
            w-125 h-125
            bg-[radial-gradient(circle,#00e5a0_0%,transparent_70%)]
            -top-50 left-1/2 -translate-x-1/2"
          ></div>
          <div
            className="absolute rounded-full blur-[80px] opacity-[0.15]
             w-125 h-125
            bg-[radial-gradient(circle,#ff6b35_0%,transparent_70%)]
            bottom-0 -right-25"
          ></div>
        </div>
        <div className="  inline-flex items-center gap-1.5 bg-[#00e5a01f]  border border-[#00e5a033] rounded-[100px] py-1.25 pr-3.5 pl-2.5 text-xs font-medium text-[#00e5a0] max-sm:mb-4 mb-7 z-10 relative max-sm:text-[10px] ">
          <span className="w-3 h-3 animate-ping opacity-100 ">
            <img src={icon} alt="image" />
          </span>
          Competitive Carrom Scoring Platform
        </div>
        <h1 className=" font-[Syne]  font-extrabold leading-20 max-md:leading-16 max-sm:leading-10 text-center lg:text-7xl md:text-6xl sm:text-5xl max-sm:text-3xl lg:max-w-2xl  max-sm:w-2xs relative z-10 max-sm:mb-3.5 mb-5 mx-auto">
          Score Tracking <br />{" "}
          <span className=" text-[#00e5a0]">Redefined.</span>
        </h1>
        <p className=" max-sm:text-base text-[18px] text-center leading-5 sm:leading-6 font-light mb-16 z-10 relative max-w-72 sm:max-w-sm mx-auto text-[#8a9bb0] ">
          Professional-grade scoreboard management for carrom players and
          tournament organizers.
        </p>
      </section>

      <Cards />
    </div>
  );
}

export default Home;
