import StatCard from "./StatCard";
function Overview({ allData, player_info, isLoading }) {
  // ── Computed stats ─────────────────────────────────────────────────────────
  const players = player_info.map((p) => ({
    ...p,
    winPct: Math.round((p.wins / p.matches) * 100),
  }));
  // console.log(player_info);

  const bestPlayer = [...players].sort((a, b) => b.winPct - a.winPct)[0];
  const highestScore = Math.max(...players.map((p) => p.avgScore));
  const highestScorer = players.find(
    (p) => Math.round(p.avgScore) === highestScore,
  );

  console.log(players);

  // ডাটা ম্যাপ করার জন্য অ্যারে তৈরিs
  const highlightData = [
    {
      icon: "🎯",
      label: "Total Matches",
      value: Math.round(allData.length),
      sub: "",
      delay: 0,
      isLoading: isLoading,
    },
    {
      icon: "⏱️",
      label: "Avg Match Time",
      value: "5m 20s",
      sub: "",
      delay: 80,
      isLoading: isLoading,
    },
    {
      icon: "🏆",
      label: "Best Player",
      value: bestPlayer?.name,
      sub: `${bestPlayer?.winPct}% Win Rate`,
      delay: 160,
      isLoading: isLoading,
    },
    {
      icon: "⚡",
      label: "Highest Score",
      value: highestScore,
      sub: `by ${highestScorer?.name}`,
      delay: 240,
      isLoading: isLoading,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {highlightData.map((data, index) => (
        <StatCard key={index} data={data} />
      ))}
    </div>
  );
}

export default Overview;
