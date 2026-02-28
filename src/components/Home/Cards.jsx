import StartGame from "../Button/StartGame";
const gameModes = [
  {
    title: "1 vs 1",
    type: "Single Player",
    description: "Practice solo and beat your high score.",
    actionText: "Start Game →",
    icon: "🔵", // striker/coin for solo play
  },
  {
    title: "2 vs 2",
    type: "Double Player",
    description: "Play with a friend in a team duel.",
    actionText: "Start Game →",
    icon: "👥", // two players for 2v2
  },
  {
    title: "2 – 4 Players",
    type: "Freestyle",
    description: "Free-for-all fun with up to 4 players.",
    actionText: "Start Game →",
    icon: "🎯", // target for multiple strikes
  },
];
function Cards() {
  return (
    <section className=" grid md:grid-cols-3 grid-cols-1   gap-5 md:px-4 lg:px-0 w-full   md:max-w-245 sm:max-w-150 max-w-80 relative z-10 mx-auto mb-20">
      {gameModes.map((mode, idx) => (
        <div
          key={idx}
          className="relative flex flex-col max-md:items-center  p-[36px_28px_28px] bg-[#111722] border border-[#1e2836] 
                 rounded-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset] 
                 overflow-hidden cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#161f2e] hover:border-[#2a3a50] hover:translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,160,0.35),0_4px_24px_rgba(0,0,0,0.5)]"
        >
          {/* Gradient top line */}
          <div
            className="absolute top-0 left-0 right-0 h-px bg-linear-to-r 
                      from-transparent via-[rgba(0,229,160,0.3)] to-transparent opacity-0 
                      transition-opacity duration-300 ease-in-out hover:opacity-100"
          ></div>

          {/* Icon wrapper */}
          <div
            className="w-13 h-13 rounded-[14px] bg-[rgba(0,229,160,0.12)] border border-[rgba(0,229,160,0.15)] 
                      flex items-center justify-center mb-5 text-[22px] transition-all duration-200 ease-in-out
                      hover:bg-[rgba(0,229,160,0.18)] hover:shadow-[0_0_16px_rgba(0,229,160,0.35)] hover:scale-[1.08]"
          >
            {mode.icon}
          </div>

          {/* Tag / type */}
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide uppercase text-[#4a5c70] mb-5">
            {mode.type}
          </div>

          {/* Title */}
          <h2 className="font-syne font-bold text-[20px] tracking-[-0.4px] mb-2 text-[#e8f0f8]">
            {mode.title}
          </h2>

          {/* Description */}
          <p className="text-[#8a9bb0] text-[13.5px] leading-[1.6] font-light mb-7 flex-1">
            {mode.description}
          </p>

          {/* Button   /match-setup/:id */}
          <StartGame title={mode.title} />
        </div>
      ))}
    </section>
  );
}

export default Cards;
