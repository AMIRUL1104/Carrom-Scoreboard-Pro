import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
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
  const allBoardInfoRef = useRef([
    {
      TeamA: 0,
      TeamB: 0,
      boardPoint: [],
      countBoard: 1,
    },
  ]);
  const undoRedoRef = useRef(0);

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

  const undoRedoFunction = (e) => {
    const name = e.currentTarget.name;
    let targetIndex = undoRedoRef.current;

    if (name === "undo") {
      // ১. পরবর্তী ইনডেক্স চেক করুন
      targetIndex = undoRedoRef.current + 1;

      // ২. বাউন্ডারি চেক (অ্যারের বাইরে যেন না যায়)
      if (targetIndex >= allBoardInfoRef.current.length) return;
    } else if (name === "redo") {
      // ৩. পূর্ববর্তী ইনডেক্স চেক করুন
      targetIndex = undoRedoRef.current - 1;

      // ৪. বাউন্ডারি চেক (০ এর নিচে যেন না যায়)
      if (targetIndex < 0) return;
    }

    // ৫. find() এর বদলে সরাসরি ইনডেক্স দিয়ে ডেটা নেওয়া (বেশি ফাস্ট)
    const board = allBoardInfoRef.current[targetIndex];

    if (board) {
      setPointCount(board);
      undoRedoRef.current = targetIndex;
    }
  };

  let ground = null;
  if (id === "1-vs-1") {
    ground = (
      <SingleGround
        SetupData={SetupData}
        pointCount={pointCount}
        setPointCount={setPointCount}
        allBoardInfoRef={allBoardInfoRef}
      />
    );
  } else {
    ground = (
      <DubbleGround
        SetupData={SetupData}
        pointCount={pointCount}
        setPointCount={setPointCount}
        allBoardInfoRef={allBoardInfoRef}
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
        undoRedoFunction={undoRedoFunction}
      />
      {ground}
    </div>
  );
}

export default PlayGround;
