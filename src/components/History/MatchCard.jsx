import icon from "../../assets/calendar.png";
import trash from "../../assets/trash-2.png";
import trophy from "../../assets/trophy.png";
import timer from "../../assets/timer.png";
import BoardDetails from "../ReusableCom/BoardDetails";

function MatchCard({ match, openModal }) {
  const { id, gameMode, gameStart, targetScore, losser, winner } = match;

  return (
    <div
      id={id}
      onClick={openModal}
      className=" mx-2.5 relative z-10 bg-[#111722] border border-[#1e2836] rounded-[28px] max-sm:rounded-2xl  shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden "
    >
      {/* Top Glow Effect  */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-[radial-gradient(circle,#00e5a0_0%,transparent_70%)] opacity-[0.08] blur-[80px] -top-20 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* ===== Part 1 ===== */}
      <div className="p-5 border-b border-[#1e2836] relative z-10">
        {/* Layer 1 */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 text-xs text-[#8a9bb0]">
            <span className="px-3 py-1 rounded-full bg-[#00e5a01f] border border-[#00e5a033] text-[#00e5a0] capitalize">
              {gameMode.toLowerCase() === "single player"
                ? ` 🌀 ${gameMode}`
                : `👥 ${gameMode}`}
            </span>

            <p className="flex items-center gap-1">
              <img className="w-3 h-3 opacity-70" src={icon} />
              <span>{gameStart} </span>
            </p>
          </div>

          <div className="flex items-center ">
            <button className="p-2 rounded-lg hover:bg-[#0d1117] transition">
              <img className="w-4 h-4 opacity-70" src={trash} />
            </button>
          </div>
        </div>

        {/* Layer 2 */}
        <h3 className="text-lg font-semibold text-white mb-2 capitalize">
          {winner.playerOne}{" "}
          {winner.playerTwo ? ` + ${winner.playerTwo}   ` : ``}{" "}
          <span className="px-3 py-0.5 font-normal ml-2 rounded-full bg-[#00e5a01f] border border-[#00e5a033] text-[#00e5a0] capitalize text-xs inline-flex items-center gap-1.5 ">
            <img src={trophy} /> Winner
          </span>
        </h3>

        {/* Layer 3 */}
        <div className="flex items-center gap-4 text-sm text-[#8a9bb0] mb-4">
          <p className="flex items-center gap-1">
            <img className="w-4 h-4 opacity-70" src={timer} />
            <span>10m 25s</span>
          </p>
          <p>
            Target:{" "}
            <span className="text-white font-medium">{targetScore} </span>
          </p>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* <div className=" flex items-center  gap-4"> */}
          <div className="bg-[#0d1117] border border-[#1e2836] rounded-xl px-4 py-2 text-center ">
            <p className="text-sm text-[#8a9bb0] mb-1 capitalize">
              {winner.playerOne}{" "}
              {winner.playerTwo ? ` + ${winner.playerTwo}` : ``}{" "}
            </p>
            <h3 className="text-2xl font-bold text-[#00e5a0]">
              {winner.totalPoint}
            </h3>
          </div>

          <div className="bg-[#0d1117] border border-[#1e2836] rounded-xl px-4 py-2 text-center  ">
            <p className="text-sm text-[#8a9bb0] mb-1 capitalize">
              {losser.playerOne}{" "}
              {losser.playerTwo ? ` + ${losser.playerTwo}` : ``}
            </p>
            <h3 className="text-2xl font-bold text-white">
              {losser.totalPoint}
            </h3>
          </div>
        </div>
      </div>

      {/* ===== Part 2 ===== */}
      {/* <div className="p-5 relative z-10 hidden">
        <h3 className="text-sm font-semibold text-[#00e5a0] uppercase tracking-wide mb-4">
          Score History
        </h3>
      </div> */}
    </div>
  );
}

export default MatchCard;

// function MatchCard() {
//   return (
//     <div className=" bor rounded-2xl">
//       {/* patr one */}
//       <div className=" border-b border-[#8a9bb0]">
//         {/* layer one  */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center justify-between gap-2.5">
//             <p className=" capitalize">dubble mode</p>
//             <p className="flex items-center justify-between gap-1">
//               <img className=" " src={icon} />{" "}
//               <span> Mar 19,2026, 11:15 AM</span>
//             </p>
//           </div>
//           <div>
//             <button>
//               <img src={trash} />
//             </button>
//             <button>
//               <img src={toggle} />
//             </button>
//           </div>
//         </div>

//         {/* layer 2 */}
//         <h3>Amirul + Jomir</h3>

//         {/* layer 3  */}
//         <div className="flex items-center gap-2.5 ">
//           <p className="flex items-center gap-1">
//             <img src={timer} alt="" srcset="" />
//             <span>10m 25s</span>
//           </p>
//           <p>Target : 29</p>
//         </div>

//         {/* layer 5  */}
//         <div className="flex items-start gap-5 ">
//           <div className=" border-[#8a9bb0] w-[200px]">
//             <p>Amirul + Jomir</p>
//             <h3>34</h3>
//           </div>
//           <div className=" border-[#8a9bb0]  w-[200px]">
//             <p>Rafi + Tuhin</p>
//             <h3>24</h3>
//           </div>
//         </div>
//       </div>

//       {/* part 2  */}
//       <div>
//         <h3 className=" capitalize">score history</h3>
//         {/* Responsive Score Board Table */}

//         <div className="w-full px-4 sm:px-8 lg:px-16 pb-10 bg-[#060810]">
//           <div
//             className="
//       w-full
//       max-h-100        /* maximum height control */
//       overflow-auto        /* vertical + horizontal scroll */
//       bg-[#111722]
//       border border-[#1e2836]
//       rounded-[28px]
//       shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]
//     "
//           >
//             <table className="w-full min-w-125 max-sm:min-w-83 text-[#e8f0f8] text-xs sm:text-sm lg:text-base">
//               {/* Table Header - always visible */}
//               <thead className="bg-[#0d1117] sticky top-0 z-10">
//                 <tr>
//                   <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
//                     No
//                   </th>
//                   <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
//                     Team
//                   </th>
//                   <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
//                     Score
//                   </th>
//                   <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
//                     Point
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-[#1e2836]">
//                 {/* {pointCount.boardPoint.map((board) => ( */}
//                 <tr
//                   //   key={board.id}
//                   className="
//               hover:bg-[#0d1117]
//               transition-colors duration-200
//             "
//                 >
//                   <td className="px-0 sm:px-6 py-3 font-medium text-center">
//                     {/* {board.boardNO} */}1
//                   </td>

//                   <td className="px-0 sm:px-6 py-3 text-[#00e5a0] font-semibold text-center capitalize">
//                     {/* {board.playerOne} + {board.playerTwo} */}
//                     jomir + amirul
//                   </td>

//                   <td className="px-0 sm:px-6 py-3 text-center">
//                     {/* {board.value} */}5
//                   </td>

//                   <td className="px-0 sm:px-6 py-3 text-[#8a9bb0] text-center">
//                     {/* {board.totalPoint} */}
//                     20
//                   </td>
//                 </tr>
//                 {/* ))} */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// <div className="w-full overflow-auto bg-[#0d1117] border border-[#1e2836] rounded-2xl">
//   <table className="w-full min-w-100 text-sm text-[#e8f0f8]">
//     <thead className="bg-[#060810] sticky top-0">
//       <tr>
//         <th className="py-3 text-center text-[#8a9bb0]">No</th>
//         <th className="py-3 text-center text-[#8a9bb0]">Team</th>
//         <th className="py-3 text-center text-[#8a9bb0]">Score</th>
//         <th className="py-3 text-center text-[#8a9bb0]">Point</th>
//       </tr>
//     </thead>

//     <tbody className="divide-y divide-[#1e2836]">
//       <tr className="hover:bg-[#060810] transition">
//         <td className="py-3 text-center">1</td>

//         <td className="py-3 text-center text-[#00e5a0] font-semibold capitalize">
//           jomir + amirul
//         </td>

//         <td className="py-3 text-center">5</td>

//         <td className="py-3 text-center text-[#8a9bb0]">20</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
