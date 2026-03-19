import { useState } from "react";
import Header from "../components/Header/Header";
import HistoryCards from "../components/History/HistoryCards";
import HistoryTopBar from "../components/History/HistoryTopBar";
import MatchDetail from "../components/History/MatchDetail";

function History() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [details, setDetails] = useState(null);

  const allMatch = JSON.parse(localStorage.getItem("historyData"));

  const openModal = (e) => {
    setModalOpen((pre) => !pre);
    const id = e.currentTarget.id;

    const findMatch = allMatch.find((match) => match.id === id);
    setDetails(findMatch);
    // console.log(id);
    // console.log(isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="">
      <Header />
      <HistoryTopBar totalMatch={allMatch.length} />
      <HistoryCards allMatch={allMatch} openModal={openModal} />

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

      {/* Modal Wrapper */}
      {isModalOpen && <MatchDetail details={details} closeModal={closeModal} />}
    </div>
  );
}

export default History;
