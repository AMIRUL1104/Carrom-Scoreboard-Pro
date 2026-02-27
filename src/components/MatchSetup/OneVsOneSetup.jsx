import SetupHeading from "./SetupHeading";
import { User } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
function OneVsOneSetup() {
  return (
    <section className=" flex flex-col gap-5  py-12    my-20 w-5xl  mx-auto">
      <div className="max-w-2xl mx-auto w-full ">
        <Link
          to={"/"}
          className=" flex items-center text-zinc-400 hover:text-white transition-colors font-bold mb-8"
        >
          <ArrowLeft />
        </Link>
        <SetupHeading type={"Single Player"} />
        <form className=" space-y-5 p-5 bg-[#111722] rounded-lg w-full  border border-[#1e2836]   ">
          <div className=" bg-[#ffffff05] border border-[#1e2836] p-4 rounded-md space-y-3 ">
            {/* <!-- Player 1 Input --> */}
            <div className="space-y-3 ">
              <label className=" text-xs font-medium tracking-wide text-[#8a9bb0] ">
                Player 1 Name
              </label>
              <div className="relative  mt-2.5 ">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  id="p1-input"
                  placeholder="Enter name"
                  className=" pl-13 text-[#e8f0f8] rounded-lg bg-[#ffffff0a] border border-[#1e2836] placeholder:text-(#4a5c70) text-[14px] py-3 px-3.5 outline-0 w-full  transition-all  duration-220ms ease-in-out
                          focus:border-[#00e5a066]
                          focus:bg-[#00e5a00a]
                            focus:shadow-[0_0_0_3px_rgba(0,229,160,0.08)] "
                />
              </div>
            </div>

            {/* <!-- Player 2 Input --> */}
            <div>
              <label className="  text-xs font-medium tracking-wide text-[#8a9bb0] ">
                Player 2 Name
              </label>
              <div className="relative mt-2.5">
                <User className=" absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  id="p2-input"
                  placeholder="Enter name"
                  className=" pl-13 text-[#e8f0f8] rounded-lg bg-[#ffffff0a] border border-[#1e2836] placeholder:text-(#4a5c70) text-[14px] py-3 px-3.5 outline-0 w-full  transition-all  duration-220ms ease-in-out
                          focus:border-[#00e5a066]
                          focus:bg-[#00e5a00a]
                            focus:shadow-[0_0_0_3px_rgba(0,229,160,0.08)] "
                />
              </div>

              {/* Start Game Button */}
            </div>
          </div>

          <div className=" flex flex-col items-center justify-around gap-5 bg-[#ffffff05] border border-[#1e2836] p-4 rounded-md ">
            <p className="flex items-center w-full text-[#8a9bb0] text-[14px] font-[Syne] font-semibold">
              <span className="whitespace-nowrap">Target Score</span>
              <span className="flex-1 h-[0.2px] bg-[#8a9bb0] ml-3"></span>
            </p>
            <input
              type="number"
              name=""
              id=""
              value={29}
              className=" px-12 text-[#e8f0f8] font-bold rounded-lg bg-[#ffffff0a] border border-[#1e2836] placeholder:text-(#4a5c70) text-xl py-3 outline-0   transition-all  duration-220ms ease-in-out
                          focus:border-[#00e5a066]
                          focus:bg-[#00e5a00a]
                            focus:shadow-[0_0_0_3px_rgba(0,229,160,0.08)] "
            />
          </div>

          <button
            type="submit"
            className="
    mt-4
    w-full
    inline-flex items-center justify-center gap-2
    px-7 py-3.5
    text-[15px] font-semibold tracking-[0.2px]
    font-[DM Sans]
    rounded-sm
    bg-[#00e5a0] text-[#060810]
    transition-all duration-200
    hover:bg-[#00f5ae] hover:shadow-[0_0_20px_#00e5a059] hover:-translate-y-0.5
    active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00e5a0]
    whitespace-nowrap
  "
          >
            Launch Match
            <ArrowRight className="p-2.5" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default OneVsOneSetup;
