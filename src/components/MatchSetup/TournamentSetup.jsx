// import SetupHeading from "./SetupHeading";
import { useNavigate } from "react-router-dom";
function FreeStyleSetup() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <section className=" flex items-center justify-center flex-col gap-10 mt-[40vh]">
      <button
        onClick={goBack}
        className="border rounded-2xl px-5 py-2.5 hover:bg-slate-800 font-medium"
      >
        Back To Home
      </button>
      {/* <SetupHeading type={"Tournament"} /> */}
      <h1 className=" text-center text-4xl font-bold capitalize">
        comming soon
      </h1>
    </section>
  );
}

export default FreeStyleSetup;
