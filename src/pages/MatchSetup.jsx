import { useParams } from "react-router-dom";
import OneVsOneSetup from "../components/MatchSetup/OneVsOneSetup";
import TwoVsTwoSetup from "../components/MatchSetup/TwoVsTwoSetup";
import FreeStyleSetup from "../components/MatchSetup/FreeStyleSetup";
import Header from "../components/Header/Header";
function MatchSetup() {
  const { id } = useParams();

  let SetupComponent = null;
  if (id === "1-vs-1") {
    SetupComponent = <OneVsOneSetup />;
  } else if (id === "2-vs-2") {
    SetupComponent = <TwoVsTwoSetup />;
  } else {
    SetupComponent = <FreeStyleSetup />;
  }
  return (
    <div>
      <Header />
      {SetupComponent}
    </div>
  );
}

export default MatchSetup;
