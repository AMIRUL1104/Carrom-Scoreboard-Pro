import Header from "../Header/Header";
import icon from "../../assets/disc-2.png";
function Home() {
  return (
    <div>
      <Header />

      <section className=" mt-40 flex flex-col items-center justify-center">
        <div className="  inline-flex items-center gap-1.5 bg-[#00e5a01f] border border-[#00e5a033] rounded-[100px] py-1.25 pr-3.5 pl-2.5 text-xs font-medium text-[#00e5a0] mb-7 z-10 relative  ">
          <span className="w-3 h-3  ">
            <img src={icon} alt="image" />
          </span>
          Competitive Carrom Scoring Platform
        </div>
        <h1 className=" font-sans font-extrabold text-center text-8xl max-w-2xl relative z-10 mb-5 mx-auto">
          Score Tracking <br />{" "}
          <span className=" text-[#00e5a0]">Redefined.</span>
        </h1>
        <p className=" text-[18px] text-center font-light mb-16 z-10 relative max-w-sm mx-auto text-[#8a9bb0] ">
          Professional-grade scoreboard management for carrom players and
          tournament organizers.
        </p>
      </section>
    </div>
  );
}

export default Home;
