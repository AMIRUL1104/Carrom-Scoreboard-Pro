import HighlightCard from "./HighlightCards";

function Highlights({ highlights }) {
  const formatTeam = (playerOne, playerTwo) => {
    const p1 = playerOne || "";
    const p2 = playerTwo || "";

    if (p1 && p2) return `${p1} + ${p2}`;
    return p1 || p2 || "";
  };

  // ডাটা ম্যাপ করার জন্য অ্যারে তৈরিs
  const highlightData = [
    {
      icon: "🕐",
      label: "Longest Match",
      main: `${highlights.longestMatch?.countBoard || 0} Boards`,
      sub: `${formatTeam(
        highlights.longestMatch?.winner?.playerOne,
        highlights.longestMatch?.winner?.playerTwo,
      )} vs ${formatTeam(
        highlights.longestMatch?.losser?.playerOne,
        highlights.longestMatch?.losser?.playerTwo,
      )}`,
      color: "#00e5a0",
      delay: 0,
    },
    {
      icon: "⚡",
      label: "Shortest Match",
      main: `${highlights.shortestMatch?.countBoard || 0} Boards`,
      sub: `${formatTeam(
        highlights.shortestMatch?.winner?.playerOne,
        highlights.shortestMatch?.winner?.playerTwo,
      )} vs ${formatTeam(
        highlights.shortestMatch?.losser?.playerOne,
        highlights.shortestMatch?.losser?.playerTwo,
      )}`,
      color: "#3b82f6",
      delay: 80,
    },
    {
      icon: "🔥",
      label: "Big Diff Match",
      main: `${
        (highlights.bigDiffMatch?.winner?.totalPoint || 0) -
        (highlights.bigDiffMatch?.losser?.totalPoint || 0)
      } Pts`,
      sub: `${formatTeam(
        highlights.bigDiffMatch?.winner?.playerOne,
        highlights.bigDiffMatch?.winner?.playerTwo,
      )} vs ${formatTeam(
        highlights.bigDiffMatch?.losser?.playerOne,
        highlights.bigDiffMatch?.losser?.playerTwo,
      )}`,
      color: "#f59e0b",
      delay: 160,
    },
    {
      icon: "⚖️",
      label: "Closest Match",
      main: `${
        (highlights.closestMatch?.winner?.totalPoint || 0) -
        (highlights.closestMatch?.losser?.totalPoint || 0)
      } Pts Diff`,
      sub: `${formatTeam(
        highlights.closestMatch?.winner?.playerOne,
        highlights.closestMatch?.winner?.playerTwo,
      )} vs ${formatTeam(
        highlights.closestMatch?.losser?.playerOne,
        highlights.closestMatch?.losser?.playerTwo,
      )}`,
      color: "#ec4899",
      delay: 240,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {highlightData.map((item, index) => (
        <HighlightCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Highlights;
