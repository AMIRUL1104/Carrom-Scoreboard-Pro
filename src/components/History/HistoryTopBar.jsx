import ClearHistory from "../Button/ClearHistory";

function HistoryTopBar({ totalMatch, handleDeleteDrawer }) {
  return (
    <div className="mt-16 max-w-7xl px-1 md:px-10 mx-auto ">
      <div className="w-full flex items-start justify-between flex-col   ">
        <h1 className=" capitalize text-2xl md:text-4xl font-extrabold font-[Syne] ">
          match history
        </h1>
        <div className=" w-full flex items-stretch justify-between max-sm:mt-4">
          <p className=" text-[14px] text-[#8a9bb0] block ">
            {totalMatch ? `${totalMatch} recorded matches` : `0 recorded match`}
          </p>
          <ClearHistory handleDeleteDrawer={handleDeleteDrawer} />
        </div>
      </div>
    </div>
  );
}

export default HistoryTopBar;
