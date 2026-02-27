import { User } from "lucide-react";
function SetupHeading({ type }) {
  return (
    <div className=" mb-9">
      <h1 className="font-extrabold text-3xl mb-1.5 font-[Syne]">Game Setup</h1>
      <p className=" text[14px] font-light text-[#8a9bb0]">
        {type} - Configure your match
      </p>
    </div>
  );
}

export default SetupHeading;
