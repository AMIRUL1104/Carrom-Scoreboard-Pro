import Header from "../components/Header/Header";
// import { Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
function History() {
  // const allMatch = JSON.parse(localStorage.getItem("historyData"));
  // console.log(allMatch);

  return (
    <div>
      <Header />
      {/* <Link
        to="/"
        className="flex items-center text-zinc-400 hover:text-white transition-colors font-bold mb-8 text-sm sm:text-base"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
        Back
      </Link> */}

      <h1 className=" text-red-500 mt-20 p-20">History </h1>
    </div>
  );
}

export default History;
