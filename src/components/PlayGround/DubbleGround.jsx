function DubbleGround({ SetupData }) {
  // return (
  //   <div
  //     className=" border-2 border-red-700
  //     flex
  //     flex-col
  //     sm:flex-row

  //     items-center
  //     justify-center
  //     gap-6
  //     sm:gap-10

  //     p-4
  //     sm:p-10
  //     lg:p-24
  //     "
  //   >
  //     {/* team A score card */}
  //     <div
  //       className="
  //   flex-1
  //   min-w-55
  //   max-w-175
  //   bg-[#111722]
  //   border border-[#1e2836]
  //   rounded-[28px]
  //   px-6 py-7
  //   flex flex-col items-center
  //   shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]
  //   relative overflow-hidden
  //   transition-all duration-220
  //   ease-in-out
  //   text-[#e8f0f8]

  //      w-full
  //   sm:flex-1

  //   min-w-0
  //   sm:min-w-[260px]
  //   sm:max-w-[500px]

  //   bg-[#111722]
  //   border border-[#1e2836]
  //   rounded-[28px]

  //   px-4 py-6
  //   sm:px-6 sm:py-7

  //   flex flex-col items-center

  //   shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]

  //   relative overflow-hidden
  //   transition-all duration-200
  //   ease-in-out

  //   text-[#e8f0f8]
  // "
  //     >
  //       <h2 className="text-xl font-extrabold uppercase mb-4 font-[Syne] text-[#00e5a0] tracking-wide">
  //         Team A
  //       </h2>

  //       <p className="text-[#8a9bb0] text-sm tracking-wide mb-2">
  //         AMIRUL + JOMIR
  //       </p>

  //       <h1 className="text-5xl font-bold font-[DM_Sans] mb-3">0</h1>

  //       <p className="text-xs text-[#4a5c70] mb-6">
  //         target: 29 <span className="text-[#00e5a0]">(0%)</span>
  //       </p>

  //       <div className="w-full flex items-center gap-3">
  //         <button
  //           type="button"
  //           className="
  //   px-4 py-2
  //   bg-[#ff4d6d1f]
  //   border border-[#ff4d6d40]
  //   text-[#ff4d6d]
  //   rounded-[14px]
  //   text-sm font-semibold

  //   hover:bg-[#ff4d6d33]
  //   hover:border-[#ff4d6d]
  //   hover:shadow-[0_0_20px_rgba(255,77,109,0.25)]

  //   active:scale-85

  //   transform
  //   transition-all
  //   duration-200
  //   ease-out
  // "
  //         >
  //           -1
  //         </button>

  //         <input
  //           type="number"
  //           value="0"
  //           className="
  //       flex-1
  //       bg-[#0d1117]
  //       border border-[#1e2836]
  //       rounded-[14px]
  //       px-3 py-2
  //       text-center
  //       outline-none
  //       focus:border-[#00e5a0]
  //       focus:shadow-[0_0_20px_rgba(0,229,160,0.35)]
  //       transition-all duration-220
  //     "
  //         />

  //         <button
  //           type="button"
  //           className="
  //   px-4 py-2
  //   rounded-[14px]

  //   bg-[#00e5a0]
  //   text-black
  //   font-semibold

  //   transform
  //   transition-all
  //   duration-200
  //   ease-out

  //   hover:shadow-[0_0_20px_rgba(0,229,160,0.35)]

  //   active:scale-85
  //   active:translate-y-1px
  // "
  //         >
  //           Add Points
  //         </button>
  //       </div>
  //     </div>

  //     {/* team b score card */}

  //     <div
  //       className="
  //   flex-1
  //   min-w-55
  //   max-w-175
  //   bg-[#111722]
  //   border border-[#1e2836]
  //   rounded-[28px]
  //   px-6 py-7
  //   flex flex-col items-center
  //   shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]
  //   relative overflow-hidden
  //   transition-all duration-220
  //   ease-in-out
  //   text-[#e8f0f8]
  // "
  //     >
  //       <h2 className="text-xl font-extrabold uppercase mb-4 font-[Syne] text-[#00e5a0] tracking-wide">
  //         Team B
  //       </h2>

  //       <p className="text-[#8a9bb0] text-sm tracking-wide mb-2">
  //         AMIRUL + JOMIR
  //       </p>

  //       <h1 className="text-5xl font-bold font-[DM_Sans] mb-3">0</h1>

  //       <p className="text-xs text-[#4a5c70] mb-6">
  //         target: 29 <span className="text-[#00e5a0]">(0%)</span>
  //       </p>

  //       <div className="w-full flex items-center gap-3">
  //         <button
  //           type="button"
  //           className="
  //   px-4 py-2
  //   bg-[#ff4d6d1f]
  //   border border-[#ff4d6d40]
  //   text-[#ff4d6d]
  //   rounded-[14px]
  //   text-sm font-semibold

  //   hover:bg-[#ff4d6d33]
  //   hover:border-[#ff4d6d]
  //   hover:shadow-[0_0_20px_rgba(255,77,109,0.25)]

  //   active:scale-85

  //   transform
  //   transition-all
  //   duration-200
  //   ease-out
  // "
  //         >
  //           -1
  //         </button>

  //         <input
  //           type="number"
  //           value="0"
  //           className="
  //       flex-1
  //       bg-[#0d1117]
  //       border border-[#1e2836]
  //       rounded-[14px]
  //       px-3 py-2
  //       text-center
  //       outline-none
  //       focus:border-[#00e5a0]
  //       focus:shadow-[0_0_20px_rgba(0,229,160,0.35)]
  //       transition-all duration-220
  //     "
  //         />

  //         <button
  //           type="button"
  //           className="
  //   px-4 py-2
  //   rounded-[14px]

  //   bg-[#00e5a0]
  //   text-black
  //   font-semibold

  //   transform
  //   transition-all
  //   duration-200
  //   ease-out

  //   hover:shadow-[0_0_20px_rgba(0,229,160,0.35)]

  //   active:scale-85
  //   active:translate-y-1px
  // "
  //         >
  //           Add Points
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div
      className="
      w-full
      min-h-screen

      flex flex-col
      sm:flex-row

      items-stretch
      sm:items-center

      justify-center

      gap-6
      sm:gap-10

      p-4
      sm:p-8
      lg:p-16

      bg-[#060810]
    "
    >
      {/* TEAM CARD */}
      {["Team A", "Team B"].map((team) => (
        <div
          key={team}
          className="
          w-full
          sm:flex-1

          bg-[#111722]
          border border-[#1e2836]
          rounded-[28px]

          px-4 py-6
          sm:px-6 sm:py-7

          flex flex-col items-center

          shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]

          text-[#e8f0f8]

          transition-all
          duration-200
        "
        >
          <h2
            className="
            text-lg
            sm:text-xl

            font-extrabold
            uppercase
            tracking-wide

            font-[Syne]
            text-[#00e5a0]

            mb-3
          "
          >
            {team}
          </h2>

          <p className="text-[#8a9bb0] text-sm mb-2">AMIRUL + JOMIR</p>

          <h1
            className="
            text-4xl
            sm:text-5xl

            font-bold
            font-[DM_Sans]

            mb-2
          "
          >
            0
          </h1>

          <p className="text-xs text-[#4a5c70] mb-6">
            target: 29 <span className="text-[#00e5a0]">(0%)</span>
          </p>

          {/* Controls */}
          <div
            className="
            w-full

            flex flex-col
            sm:flex-row

            gap-3
          "
          >
            {/* -1 Button */}
            <button
              type="button"
              className="
              w-full
              sm:w-auto

              px-4 py-2

              bg-[#ff4d6d1f]
              border border-[#ff4d6d40]
              text-[#ff4d6d]

              rounded-[14px]
              text-sm font-semibold

              transform
              transition-all
              duration-200
              ease-out

              hover:bg-[#ff4d6d33]
              hover:border-[#ff4d6d]
              hover:shadow-[0_0_20px_rgba(255,77,109,0.25)]

              active:scale-90
            "
            >
              -1
            </button>

            {/* Input */}
            <input
              type="number"
              value="0"
              className="
              w-full
              sm:flex-1

              bg-[#0d1117]
              border border-[#1e2836]

              rounded-[14px]

              px-3 py-2

              text-center

              outline-none

              focus:border-[#00e5a0]
              focus:shadow-[0_0_20px_rgba(0,229,160,0.35)]

              transition-all
              duration-200
            "
            />

            {/* Add Points */}
            <button
              type="button"
              className="
              w-full
              sm:w-auto

              px-4 py-2

              rounded-[14px]

              bg-[#00e5a0]
              text-black
              font-semibold

              transform
              transition-all
              duration-200
              ease-out

              hover:shadow-[0_0_20px_rgba(0,229,160,0.35)]

              active:scale-90
              active:translate-y-px
            "
            >
              Add Points
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DubbleGround;
