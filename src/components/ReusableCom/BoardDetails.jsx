function BoardDetails({ details }) {
  return (
    <div
      className="
      w-full
      max-h-100        /* maximum height control */
      overflow-auto        /* vertical + horizontal scroll */
      bg-[#111722]
      border border-[#1e2836]
      rounded-[28px] max-sm:rounded-sm
      shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]
    "
    >
      <table className="w-full min-w-125 max-sm:min-w-83 text-[#e8f0f8] text-xs sm:text-sm lg:text-base">
        <thead className="bg-[#0d1117] sticky top-0 z-10">
          <tr>
            <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
              No
            </th>
            <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
              Team
            </th>
            <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
              Score
            </th>
            <th className="px-0 sm:px-6 py-3 text-center font-semibold text-[#8a9bb0] ">
              Point
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#1e2836]">
          {details.map((board) => (
            <tr key={board.id} className="hover:bg-[#060810] transition">
              <td className="px-0 sm:px-6 py-1 font-normal text-center">
                {board.boardNO}
              </td>

              <td className="px-0 sm:px-6 py-1 text-[#00e5a0] font-normal text-center capitalize">
                {board.playerOne}
                {board.playerTwo ? ` + ${board.playerTwo}` : ``}
              </td>

              <td className="px-0 sm:px-6 py-1 text-center">{board.value}</td>

              <td className="px-0 sm:px-6 py-1 text-[#8a9bb0] text-center">
                {board.totalPoint}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardDetails;
