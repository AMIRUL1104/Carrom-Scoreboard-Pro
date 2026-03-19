import Header from "../components/Header/Header";
import HistoryCards from "../components/History/HistoryCards";
import HistoryTopBar from "../components/History/HistoryTopBar";
// import { Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
function History() {
  // const allMatch = JSON.parse(localStorage.getItem("historyData"));
  // console.log(allMatch);

  return (
    <div className="">
      <Header />
      {/* <Link
        to="/"
        className="flex items-center text-zinc-400 hover:text-white transition-colors font-bold mb-8 text-sm sm:text-base"
      >
       <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
        Back
      </Link> */}

      <HistoryTopBar />
      <HistoryCards />
    </div>
  );
}

export default History;
