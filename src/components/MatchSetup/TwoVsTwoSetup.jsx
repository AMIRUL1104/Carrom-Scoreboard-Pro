import SetupHeading from "./SetupHeading";
import LaunchMatch from "../Button/LaunchMatch";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";
function TwoVsTwoSetup() {
  const [formData, setFormData] = useState({
    playerOne: "",
    playerTwo: "",
    playerThree: "",
    playerFour: "",
    TargetScore: 29,
  });

  const [errors, setErrors] = useState({
    player: "",
    TargetScore: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (
      !formData.playerOne ||
      !formData.playerTwo ||
      !formData.playerThree ||
      !formData.playerFour
    )
      formErrors.player = "Name is required";
    if (formData.TargetScore < 1) formErrors.TargetScore = "Set target score";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted: " + JSON.stringify(formData));
    }
  };

  return (
    <section className=" flex flex-col gap-5  py-12 my-20 w-5xl  mx-auto">
      <div className="max-w-2xl mx-auto w-full ">
        <Link
          to={"/"}
          className=" flex items-center text-zinc-400 hover:text-white transition-colors font-bold mb-8"
        >
          <ArrowLeft />
        </Link>
        <SetupHeading type={"Dubble Player"} />
        <form
          onSubmit={handleSubmit}
          className=" space-y-5 p-5 bg-[#111722] rounded-lg w-full  border border-[#1e2836] grid grid-cols-2 gap-x-2.5 "
        >
          {/* player input */}
          <p className="flex items-center col-span-2 w-full text-[#8a9bb0] text-[14px] font-[Syne] font-semibold">
            <span className="whitespace-nowrap">Player</span>
            <span className="flex-1 h-[0.5px] bg-[#8a9bb0] ml-3"></span>
          </p>

          {errors.player && (
            <p className=" text-red-600 text-xs text-center col-span-2">
              {errors.player}
            </p>
          )}

          {/* <!-- team A Input --> */}
          <div className=" col-span-1 bg-[#ffffff05] border border-[#1e2836] p-4 rounded-md space-y-3 ">
            <p className=" text-xs font-bold leading-[0.8px] uppercase mb-5 font-[Syne] text-[#00e5a0]">
              Team A{" "}
            </p>

            {/* <!-- Player 1 Input --> */}
            <div className="space-y-3 ">
              <label className=" text-xs font-medium tracking-wide text-[#8a9bb0] ">
                Player 1
              </label>
              <div className="relative  mt-2.5 ">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  id="p1-input"
                  name="playerOne"
                  onChange={handleChange}
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
                Player 2
              </label>
              <div className="relative mt-2.5">
                <User className=" absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  id="p2-input"
                  name="playerTwo"
                  onChange={handleChange}
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

          {/* <!-- team B Input --> */}
          <div className=" col-span-1 bg-[#ffffff05] border border-[#1e2836] p-4 rounded-md space-y-3 ">
            <p className=" text-xs font-bold leading-[0.8px] uppercase mb-5 font-[Syne] text-[#00e5a0]">
              Team b{" "}
            </p>

            {/* <!-- Player 3 Input --> */}
            <div className="space-y-3 ">
              <label className=" text-xs font-medium tracking-wide text-[#8a9bb0] ">
                Player 3
              </label>
              <div className="relative  mt-2.5 ">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  id="p3-input"
                  name="playerThree"
                  onChange={handleChange}
                  placeholder="Enter name"
                  className=" pl-13 text-[#e8f0f8] rounded-lg bg-[#ffffff0a] border border-[#1e2836] placeholder:text-(#4a5c70) text-[14px] py-3 px-3.5 outline-0 w-full  transition-all  duration-220ms ease-in-out
                          focus:border-[#00e5a066]
                          focus:bg-[#00e5a00a]
                            focus:shadow-[0_0_0_3px_rgba(0,229,160,0.08)] "
                />
              </div>
            </div>

            {/* <!-- Player 4 Input --> */}
            <div>
              <label className="  text-xs font-medium tracking-wide text-[#8a9bb0] ">
                Player 4
              </label>
              <div className="relative mt-2.5">
                <User className=" absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  id="p4-input"
                  name="playerFour"
                  onChange={handleChange}
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

          {/* target score input */}
          {errors.TargetScore && (
            <p className=" text-red-600 text-xs text-center col-span-2">
              {errors.TargetScore}
            </p>
          )}
          <div className=" flex flex-col items-center justify-around gap-5 col-span-2 bg-[#ffffff05] border border-[#1e2836] p-4 rounded-md ">
            <p className="flex items-center w-full text-[#8a9bb0] text-[14px] font-[Syne] font-semibold">
              <span className="whitespace-nowrap">Target Score</span>
              <span className="flex-1 h-[0.5px] bg-[#8a9bb0] ml-3"></span>
            </p>
            <input
              type="number"
              name="TargetScore"
              id=""
              onChange={handleChange}
              value={formData.TargetScore}
              className=" px-12 text-[#e8f0f8] font-bold rounded-lg bg-[#ffffff0a] border border-[#1e2836] placeholder:text-(#4a5c70) text-xl py-3 outline-0   transition-all  duration-220ms ease-in-out
                          focus:border-[#00e5a066]
                          focus:bg-[#00e5a00a]
                            focus:shadow-[0_0_0_3px_rgba(0,229,160,0.08)] "
            />
          </div>

          {/* match launch button */}
          <LaunchMatch id={"2vs2-setup"} children={"Launch Match"} />
        </form>
      </div>
    </section>
  );
}

export default TwoVsTwoSetup;
