import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import GameStatus from "../components/PlayGround/GameStatus";
import DubbleGround from "../components/PlayGround/DubbleGround";
import SingleGround from "../components/PlayGround/SingleGround";
// import Tournament from "../components/PlayGround/Tournament";

function PlayGround({ SetupData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pointCount, setPointCount] = useState({
    TeamA: 0,
    TeamB: 0,
    boardPoint: [],
    countBoard: 1,
  });

  // useRef ব্যবহার করে ডেটা স্টোর করা
  const allBoardInfoRef = useRef([]);
  const isFirstRender = useRef(true); // এটি প্রথমবার true থাকবে

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    allBoardInfoRef.current.unshift(pointCount);
    console.log("Updated Data:", allBoardInfoRef.current);
  }, [pointCount]);

  if (!SetupData) return;
  const { gameMode, TargetScore } = SetupData;

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

  // end match
  const endMatch = () => {
    setPointCount((pre) => {
      return {
        ...pre,
        TeamA: 0,
        TeamB: 0,
        boardPoint: [],
        countBoard: 1,
      };
    });

    navigate("/");
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
        endMatch={endMatch}
      />
      {ground}
    </div>
  );
}

export default PlayGround;
