import { useState } from "react";
import Header from "../components/Header/Header";
import HistoryCards from "../components/History/HistoryCards";
import HistoryTopBar from "../components/History/HistoryTopBar";
import MatchDetail from "../components/History/MatchDetail";

function History() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteDrawerOpen, setDeleteDrawerOpen] = useState(false);

  const [details, setDetails] = useState(null);

  const [allMatch, setAllMatch] = useState(() => {
    try {
      const savedData = localStorage.getItem("historyData");
      // যদি ডাটা থাকে তবে পার্স করো, নাহলে খালি অ্যারে দাও
      return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });
  // const allMatch = JSON.parse(localStorage.getItem("historyData"));

  const openModal = (e) => {
    setModalOpen((pre) => !pre);
    const id = e.currentTarget.id;

    const findMatch = allMatch.find((match) => match.id === id);
    setDetails(findMatch);
  };

  const closeModal = () => {
    setModalOpen(false);
    setDeleteDrawerOpen(false);
    setDetails(null);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    const id = e.target.id;

    const updated = allMatch.filter((match) => match.id != id);
    localStorage.setItem("historyData", JSON.stringify(updated));
    setAllMatch(updated);
  };
  const handleDeleteAll = () => {
    setAllMatch([]);
    localStorage.setItem("historyData", JSON.stringify([]));
    closeModal();
  };
  const handleDeleteDrawer = () => {
    setDeleteDrawerOpen(true);
  };
  return (
    <div className="">
      <Header />
      <HistoryTopBar
        totalMatch={allMatch.length}
        handleDeleteDrawer={handleDeleteDrawer}
      />
      <HistoryCards
        allMatch={allMatch}
        openModal={openModal}
        handleDelete={handleDelete}
      />

      {/* Overlay */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="
      fixed inset-0 z-40

      bg-[#060810d9]
      backdrop-blur-md

      transition-opacity
      duration-300
    "
        />
      )}
      {/* delete Overlay */}
      {isDeleteDrawerOpen && (
        <div
          onClick={closeModal}
          className="
      fixed inset-0 z-40

      bg-[#060810d9]
      backdrop-blur-md

      transition-opacity
      duration-300
    "
        />
      )}
      {isDeleteDrawerOpen && (
        <div
          className="
    fixed inset-0 z-50
    flex items-center justify-center
    py-0 px-2 sm:p-4
    pointer-events-none 
  "
        >
          <div
            className="
    w-full max-w-md sm:max-w-2xl

    bg-[#111722]
    border border-[rgba(0,229,160,0.25)]

    rounded-xl sm:rounded-[28px]

    px-4 py-5
    sm:px-6 sm:py-8

    text-center

    shadow-[0_0_20px_rgba(0,229,160,0.35),0_4px_24px_rgba(0,0,0,0.5)]

    relative overflow-hidden

    transition-all duration-300 ease-out

    pointer-events-auto
  "
          >
            {/* Title */}
            <h3 className="text-sm sm:text-lg font-semibold text-white leading-snug mb-4 sm:mb-6">
              Are you sure you want to delete all match history?
            </h3>

            {/* Buttons */}
            <div
              className="
    flex flex-col sm:flex-row
    items-center justify-center
    gap-2 sm:gap-4
  "
            >
              {/* No Button */}
              <button
                onClick={closeModal}
                type="button"
                className="
        w-full sm:w-auto

        px-4 py-2

        rounded-xl
        text-sm font-semibold

        bg-[#0d1117]
        border border-[#1e2836]
        text-[#8a9bb0]

        transition-all duration-200

        hover:bg-[#161b22]
        hover:text-white

        active:scale-95
      "
              >
                No
              </button>

              {/* Delete Button */}
              <button
                type="button"
                onClick={handleDeleteAll}
                className="
        w-full sm:w-auto

        px-4 py-2

        bg-[#ff4d6d1f]
        border border-[#ff4d6d40]
        text-[#ff4d6d]

        rounded-xl
        text-sm font-semibold

        transition-all duration-200 ease-out

        hover:bg-[#ff4d6d33]
        hover:border-[#ff4d6d]
        hover:shadow-[0_0_20px_rgba(255,77,109,0.25)]

        active:scale-95
      "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Wrapper */}
      {isModalOpen && <MatchDetail details={details} closeModal={closeModal} />}
    </div>
  );
}

export default History;
