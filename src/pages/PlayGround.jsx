import { useParams } from "react-router-dom";
import GameStatus from "../components/PlayGround/GameStatus";
import DubbleGround from "../components/PlayGround/DubbleGround";
import SingleGround from "../components/PlayGround/SingleGround";

function PlayGround({ SetupData }) {
  const { id } = useParams();

  if (!SetupData) return;
  const { gameMode, TargetScore } = SetupData;

  let ground = null;

  if (id === "1-vs-1") {
    ground = <SingleGround SetupData={SetupData} />;
  } else {
    ground = <DubbleGround SetupData={SetupData} />;
  }
  return (
    <div>
      <GameStatus gameMode={gameMode} TargetScore={TargetScore} />
      {ground}
    </div>
  );
}

export default PlayGround;
