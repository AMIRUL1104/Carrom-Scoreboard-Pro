import { useParams } from "react-router-dom";
import { useState } from "react";
import GameStatus from "../components/PlayGround/GameStatus";
import DubbleGround from "../components/PlayGround/DubbleGround";
import SingleGround from "../components/PlayGround/SingleGround";

function PlayGround({ SetupData }) {
  const { id } = useParams();
  const [pointCount, setPointCount] = useState({
    TeamA: 0,
    TeamB: 0,
    boardPoint: [],
    countBoard: 1,
  });

  if (!SetupData) return;
  const { gameMode, TargetScore } = SetupData;
  console.log(SetupData);

  // reset match
  const resetMatch = () => {
    setPointCount((pre) => {
      return {
        ...pre,
        TeamA: 0,
        TeamB: 0,
        boardPoint: [],
        countBoard: 1,
      };
    });
  };

  let ground = null;

  if (id === "1-vs-1") {
    ground = (
      <SingleGround
        SetupData={SetupData}
        pointCount={pointCount}
        setPointCount={setPointCount}
      />
    );
  } else {
    ground = (
      <DubbleGround
        SetupData={SetupData}
        pointCount={pointCount}
        setPointCount={setPointCount}
      />
    );
  }
  return (
    <div className="max-w-400 mx-auto">
      <GameStatus
        gameMode={gameMode}
        TargetScore={TargetScore}
        resetMatch={resetMatch}
      />
      {ground}
    </div>
  );
}

export default PlayGround;
