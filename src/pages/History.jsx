import Header from "../components/Header/Header";
import HistoryCards from "../components/History/HistoryCards";
import HistoryTopBar from "../components/History/HistoryTopBar";
function History() {
  const allMatch = JSON.parse(localStorage.getItem("historyData"));

  return (
    <div className="">
      <Header />
      <HistoryTopBar totalMatch={allMatch.length} />
      <HistoryCards allMatch={allMatch} />
    </div>
  );
}

export default History;
