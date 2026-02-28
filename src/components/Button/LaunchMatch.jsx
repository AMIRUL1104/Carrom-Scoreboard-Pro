import { ArrowRight } from "lucide-react";

function LaunchMatch({ id, children }) {
  return (
    <button
      type="submit"
      id={id}
      className="
    mt-4
    w-full col-span-2
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
      {children}
      <ArrowRight className="p-2.5" />
    </button>
  );
}

export default LaunchMatch;
