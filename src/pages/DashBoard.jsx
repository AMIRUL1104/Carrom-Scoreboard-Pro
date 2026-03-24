import { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
// Replace these with your real data props or API calls
// ------ Real data -----------
// ----------------------------

const stored_LocaleStorage_Data = () => {
  try {
    const savedData = localStorage.getItem("historyData");
    // যদি ডাটা থাকে তবে পার্স করো, নাহলে খালি অ্যারে দাও
    return savedData ? JSON.parse(savedData) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const allData = stored_LocaleStorage_Data();

let all_Players_Name = []; //just player name
let playersMatch = []; // player name with played matches

for (const element of allData) {
  // ১. সব প্লেয়ারকে একটি সেট হিসেবে নেওয়া
  // ২. অপশনাল চেইনিং ব্যবহার করে ডাটা এক্সট্র্যাক্ট করা
  let playersInMatch = [
    element.winner?.playerOne,
    element.winner?.playerTwo,
    element.loser?.playerOne, // যদি প্রথম লুজার থাকে
    element.loser?.playerTwo,
  ];

  // ৩. 'undefined' বা 'null' or duplicate  ভ্যালুগুলো ফিল্টার করে বাদ দেওয়া
  let validPlayers = playersInMatch.filter(
    (player) =>
      player != null && // null এবং undefined একসাথে চেক করে
      !all_Players_Name.includes(player), // যদি অলরেডি না থাকে তবেই নেবে
  );
  // ৪. সঠিক ভেরিয়েবল নামে পুশ করা
  all_Players_Name.push(...validPlayers);
}

all_Players_Name.forEach((element) => {
  let playMatch = allData.filter((item) => {
    if (
      item.winner?.playerOne === element ||
      item.winner?.playerTwo === element ||
      item.losser?.playerOne === element ||
      item.losser?.playerTwo === element
    ) {
      return item;
    }
  });

  // store player name with played matches
  playersMatch.push({
    playerName: element,
    matches: [...playMatch],
  });
});

// {
//     "id": "e57c6a8b-8793-4010-be71-01c992c0af20",
//     "gameMode": "Single Player",
//     "gameStart": "2026-03-22T12:06:46.689Z",
//     "targetScore": 29,
//     "boardPoint": [
//         {
//             "id": "e87c561a-a539-4681-9a0b-3e21bdc74a93",
//             "teamName": "TeamA",
//             "playerOne": "amirul",
//             "value": 8,
//             "boardNO": 5,
//             "totalPoint": 29
//         },
//         {
//             "id": "a9357e07-58a6-4bb9-a7f6-a7459275fb83",
//             "teamName": "TeamA",
//             "playerOne": "amirul",
//             "value": 10,
//             "boardNO": 4,
//             "totalPoint": 21
//         },
//         {
//             "id": "586618e0-24e9-493e-932d-4b0b283f5879",
//             "teamName": "TeamA",
//             "playerOne": "amirul",
//             "value": 4,
//             "boardNO": 3,
//             "totalPoint": 11
//         },
//         {
//             "id": "c8cc5036-d29f-4189-92d2-03d232da00de",
//             "teamName": "TeamB",
//             "playerOne": "jomir",
//             "value": 7,
//             "boardNO": 2,
//             "totalPoint": 7
//         },
//         {
//             "id": "878653f5-22d4-439e-a4de-399af66afecf",
//             "teamName": "TeamA",
//             "playerOne": "amirul",
//             "value": 7,
//             "boardNO": 1,
//             "totalPoint": 7
//         }
//     ],
//     "countBoard": 5,
//     "winner": {
//         "teamName": "TeamA",
//         "playerOne": "amirul",
//         "totalPoint": 29
//     },
//     "losser": {
//         "teamName": "TeamB",
//         "playerOne": "jomir",
//         "totalPoint": 7
//     }
// }

// console.log(player_info);

// ─── Mock Data ────────────────────────────────────────────────────────────────

const MOCK_PLAYERS = [
  { name: "Arif", matches: 24, wins: 18, losses: 6, avgScore: 21.4 },
  { name: "Sakib", matches: 20, wins: 13, losses: 7, avgScore: 18.9 },
  { name: "Nadia", matches: 18, wins: 10, losses: 8, avgScore: 17.2 },
  { name: "Rafi", matches: 15, wins: 7, losses: 8, avgScore: 15.8 },
  { name: "Mitu", matches: 12, wins: 4, losses: 8, avgScore: 13.1 },
];

const MOCK_HIGHLIGHTS = {
  longestMatch: { duration: "18m 42s", players: ["Arif", "Sakib"] },
  shortestMatch: { duration: "2m 15s", players: ["Rafi", "Mitu"] },
  highestScoreMatch: { score: 29, players: ["Arif", "Nadia"] },
  closestMatch: { diff: 1, score: "14 vs 13", players: ["Sakib", "Rafi"] },
};

const MOCK_CHART_DATA = {
  matchesOverTime: [
    { label: "Mon", value: 3 },
    { label: "Tue", value: 5 },
    { label: "Wed", value: 2 },
    { label: "Thu", value: 7 },
    { label: "Fri", value: 4 },
    { label: "Sat", value: 9 },
    { label: "Sun", value: 6 },
  ],
  winDistribution: [
    { name: "Arif", wins: 18, color: "#00e5a0" },
    { name: "Sakib", wins: 13, color: "#3b82f6" },
    { name: "Nadia", wins: 10, color: "#f59e0b" },
    { name: "Rafi", wins: 7, color: "#ec4899" },
    { name: "Mitu", wins: 4, color: "#8b5cf6" },
  ],
};

// ─── Utility ──────────────────────────────────────────────────────────────────

/** Count-up animation hook */
function useCountUp(target, duration = 1200, active = true) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return value;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Skeleton shimmer block */
function Skeleton({ className = "" }) {
  return (
    <div
      className={`rounded-xl bg-[#1a2333] relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-linear-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent" />
    </div>
  );
}

/** Overview stat card */
function StatCard({ icon, label, value, sub, delay = 0, isLoading }) {
  const [visible, setVisible] = useState(false);
  const numericValue = typeof value === "number" ? value : 0;
  const counted = useCountUp(numericValue, 1200, visible && !isLoading);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (isLoading) {
    return (
      <div className="p-6 bg-[#111722] border border-[#1e2836] rounded-3xl">
        <Skeleton className="w-10 h-10 mb-4" />
        <Skeleton className="w-16 h-7 mb-2" />
        <Skeleton className="w-24 h-4" />
      </div>
    );
  }

  return (
    <div
      className="group relative flex flex-col p-6 bg-[#111722] border border-[#1e2836] 
      rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.04)_inset]
      overflow-hidden cursor-default transition-all duration-200 ease-in-out
      hover:bg-[#161f2e] hover:border-[#2a3a50] hover:-translate-y-0.5
      hover:shadow-[0_0_20px_rgba(0,229,160,0.25),0_4px_24px_rgba(0,0,0,0.5)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms, box-shadow 0.2s ease, border-color 0.2s ease`,
      }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(0,229,160,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl bg-[rgba(0,229,160,0.1)] border border-[rgba(0,229,160,0.15)]
        flex items-center justify-center mb-4 text-[#00e5a0] text-lg
        group-hover:bg-[rgba(0,229,160,0.18)] group-hover:shadow-[0_0_14px_rgba(0,229,160,0.3)]
        transition-all duration-200"
      >
        {icon}
      </div>

      {/* Value */}
      <div className="text-[28px] font-extrabold font-[Syne] text-[#e8f0f8] leading-none mb-1 tabular-nums">
        {typeof value === "number" ? counted : value}
      </div>

      {/* Label */}
      <div className="text-[12px] font-medium uppercase tracking-widest text-[#4a5c70] mb-1">
        {label}
      </div>

      {/* Sub info */}
      {sub && (
        <div className="text-[12px] text-[#00e5a0] font-medium mt-auto pt-2">
          {sub}
        </div>
      )}
    </div>
  );
}

/** Win % progress bar cell */
function WinBar({ percent }) {
  return (
    <div className="flex items-center gap-2.5 min-w-25">
      <div className="flex-1 h-1.5 bg-[#1e2836] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-[#00e5a0] to-[#00b87a] transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-[12px] font-semibold text-[#e8f0f8] w-9 text-right tabular-nums">
        {percent}%
      </span>
    </div>
  );
}

/** Highlight card */
function HighlightCard({
  icon,
  label,
  main,
  sub,
  color = "#00e5a0",
  delay = 0,
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="group relative flex flex-col p-5 bg-[#111722] border border-[#1e2836]
      rounded-[20px] overflow-hidden cursor-default
      hover:border-[#2a3a50] hover:-translate-y-0.5
      transition-all duration-200"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms, border-color 0.2s ease`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Bg glow */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-300"
        style={{ background: color }}
      />

      <div
        className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base mb-3"
        style={{
          background: `${color}1a`,
          border: `1px solid ${color}26`,
          color,
        }}
      >
        {icon}
      </div>

      <div className="text-[11px] uppercase tracking-widest text-[#4a5c70] font-medium mb-1">
        {label}
      </div>
      <div className="text-[22px] font-extrabold font-[Syne] text-[#e8f0f8] leading-tight mb-1">
        {main}
      </div>
      <div className="text-[12px] text-[#8a9bb0]">{sub}</div>
    </div>
  );
}

/** Simple inline bar chart */
function BarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex items-end gap-2 h-28 w-full">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
          <div
            className="w-full flex flex-col justify-end"
            style={{ height: "80px" }}
          >
            <div
              className="w-full rounded-t-sm bg-linear-to-t from-[#00b87a] to-[#00e5a0] opacity-80 hover:opacity-100 transition-all duration-300"
              style={{
                height: `${(d.value / max) * 100}%`,
                minHeight: "4px",
              }}
            />
          </div>
          <span className="text-[10px] text-[#4a5c70] font-medium">
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Simple donut-like win distribution */
function WinDistributionChart({ data }) {
  const total = data.reduce((s, d) => s + d.wins, 0);
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {data.map((d, i) => {
        const pct = Math.round((d.wins / total) * 100);
        return (
          <div key={i} className="flex items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: d.color }}
            />
            <span className="text-[12px] text-[#8a9bb0] w-14 truncate">
              {d.name}
            </span>
            <div className="flex-1 h-1.5 bg-[#1e2836] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`, background: d.color }}
              />
            </div>
            <span className="text-[11px] text-[#4a5c70] w-8 text-right tabular-nums">
              {pct}%
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** Empty state */
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-16 h-16 rounded-full bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.12)] flex items-center justify-center text-3xl">
        🎯
      </div>
      <div className="text-[#e8f0f8] font-semibold font-[Syne] text-lg">
        No stats available yet
      </div>
      <div className="text-[#4a5c70] text-sm text-center max-w-xs">
        Play some matches to see your insights and analytics here.
      </div>
    </div>
  );
}

// ─── Main Dashboard Component ─────────────────────────────────────────────────
export default function StatsDashboard() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [filter, setFilter] = useState("All Time"); // "All Time" | "Today" | "This Week"
  const [playerFilter, setPlayerFilter] = useState("All Players");
  const [sortKey, setSortKey] = useState("winPct"); // column key for table sort
  const [sortDir, setSortDir] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [hasData] = useState(true); // set false to preview empty state
  //

  // all player details information
  const [player_info] = useState(() => {
    const playerInfo = playersMatch.map((player) => {
      let notePlayerinfo = {
        name: player.playerName,
        matches: player.matches.length,
      };

      let wins = 0;
      let losses = 0;
      let totalPoint = 0;
      player.matches.forEach((match) => {
        if (
          match.winner?.playerOne === player.playerName ||
          match.winner?.playerTwo === player.playerName
        ) {
          wins = wins + 1;
          totalPoint = totalPoint + match.winner.totalPoint;
        } else {
          losses++;
          totalPoint = totalPoint + match.losser.totalPoint;
        }

        notePlayerinfo = {
          ...notePlayerinfo,
          wins,
          losses,
          winPct: Math.round((wins / player.matches.length) * 100),
          avgScore: (totalPoint / player.matches.length).toFixed(1),
        };
      });
      return notePlayerinfo;
    });
    return playerInfo;
  });

  //========= computed data =======
  // ==============================
  // -------closest match----------
  let diffRefs = useRef(100);
  let closestMatch;

  allData.forEach((match) => {
    let calcPoint = match.winner.totalPoint - match.losser.totalPoint;
    if (calcPoint < diffRefs.current) {
      diffRefs.current = calcPoint;
      closestMatch = match;
    } else if (calcPoint === diffRefs.current) {
      if (closestMatch?.countBoard >= match.countBoard) return;
      diffRefs.current = calcPoint;
      closestMatch = match;
    }
  });
  console.log(closestMatch);

  // Simulate loading
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  // Filter options
  const timeFilters = ["All Time", "Today", "This Week"];
  const playerNames = ["All Players", ...player_info.map((p) => p.name)];

  // ── Computed stats ─────────────────────────────────────────────────────────
  const players = player_info.map((p) => ({
    ...p,
    winPct: Math.round((p.wins / p.matches) * 100),
  }));
  console.log(player_info);

  // const totalMatches = players.reduce((s, p) => s + p.matches, 0) / 2; // each match has 2 players
  const bestPlayer = [...players].sort((a, b) => b.winPct - a.winPct)[0];
  const highestScore = Math.max(...players.map((p) => p.avgScore));
  const highestScorer = players.find((p) => p.avgScore === highestScore);

  // Sort table
  const sortedPlayers = [...players].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    return sortDir === "desc" ? bv - av : av - bv;
  });

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const SortIcon = ({ col }) => (
    <span
      className={`ml-1 text-[10px] ${sortKey === col ? "text-[#00e5a0]" : "text-[#2a3a50]"}`}
    >
      {sortKey === col ? (sortDir === "desc" ? "▼" : "▲") : "⇅"}
    </span>
  );

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#0a0f18] text-[#e8f0f8] font-sans">
      {/* ── Ambient background glows (matching existing site style) ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute rounded-full blur-[100px] opacity-[0.10] w-125 h-125 bg-[radial-gradient(circle,#00e5a0_0%,transparent_70%)] -top-48 left-1/2 -translate-x-1/2" />
        <div className="absolute rounded-full blur-[80px] opacity-[0.08] w-100 h-100 bg-[radial-gradient(circle,#3b82f6_0%,transparent_70%)] bottom-0 -right-24" />
      </div>

      {/* ── Page content ── */}
      <div className="relative z-10 mx-auto max-w-270 px-4 sm:px-6 lg:px-0 pb-24">
        {/* ══════════════════════════════════════════════════════════════
            SECTION 0 — PAGE HEADER
        ══════════════════════════════════════════════════════════════ */}
        <div className="flex items-center justify-center mb-12 max-w-360">
          <Header></Header>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 1 — PAGE HEADER
        ══════════════════════════════════════════════════════════════ */}
        <div className="pt-12 pb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          {/* Title block */}
          <div>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#00e5a01f] border border-[#00e5a033] rounded-full py-1 px-3 text-[11px] font-medium text-[#00e5a0] mb-4 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a0] animate-pulse" />
              Analytics
            </div>
            <h1 className="font-[Syne] font-extrabold text-3xl sm:text-4xl text-[#e8f0f8] leading-tight mb-1">
              Stats Dashboard
            </h1>
            <p className="text-[#4a5c70] text-sm font-light">
              Insights from your matches
            </p>
          </div>

          {/* Filter controls */}
          <div className="flex flex-wrap gap-3 sm:items-start">
            {/* Time filter pills */}
            <div className="flex gap-1 p-1 bg-[#111722] border border-[#1e2836] rounded-xl">
              {timeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-150 cursor-pointer
                    ${
                      filter === f
                        ? "bg-[#00e5a0] text-[#0a0f18] shadow-[0_0_12px_rgba(0,229,160,0.35)]"
                        : "text-[#4a5c70] hover:text-[#8a9bb0]"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Player filter dropdown */}
            <div className="relative">
              <select
                value={playerFilter}
                onChange={(e) => setPlayerFilter(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 bg-[#111722] border border-[#1e2836] rounded-xl
                  text-[12px] text-[#8a9bb0] font-medium cursor-pointer outline-none
                  hover:border-[#2a3a50] focus:border-[#00e5a033] transition-colors duration-150"
              >
                {playerNames.map((n) => (
                  <option key={n} value={n} className="bg-[#111722]">
                    {n}
                  </option>
                ))}
              </select>
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#4a5c70] text-[10px] pointer-events-none">
                ▾
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2 — OVERVIEW CARDS
        ══════════════════════════════════════════════════════════════ */}
        {!hasData ? (
          <EmptyState />
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <StatCard
                icon="🎯"
                label="Total Matches"
                value={Math.round(allData.length)}
                delay={0}
                isLoading={isLoading}
              />
              <StatCard
                icon="⏱️"
                label="Avg Match Time"
                value="5m 20s"
                delay={80}
                isLoading={isLoading}
              />
              <StatCard
                icon="🏆"
                label="Best Player"
                value={bestPlayer?.name}
                sub={`${bestPlayer?.winPct}% Win Rate`}
                delay={160}
                isLoading={isLoading}
              />
              <StatCard
                icon="⚡"
                label="Highest Score"
                value={MOCK_HIGHLIGHTS.highestScoreMatch.score}
                sub={`by ${highestScorer?.name}`}
                delay={240}
                isLoading={isLoading}
              />
            </div>

            {/* ══════════════════════════════════════════════════════════════
                SECTION 3 — PLAYER PERFORMANCE TABLE
            ══════════════════════════════════════════════════════════════ */}
            <div className="mb-10">
              {/* Section heading */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-1 h-5 rounded-full bg-[#00e5a0]" />
                <h2 className="font-[Syne] font-bold text-lg text-[#e8f0f8]">
                  Player Performance
                </h2>
              </div>

              {/* Table wrapper — horizontal scroll on mobile */}
              <div
                className="bg-[#111722] border border-[#1e2836] rounded-3xl
                shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <table className="w-full min-w-140">
                    {/* Sticky header */}
                    <thead className="sticky top-0 z-10">
                      <tr className="bg-[#0e1520] border-b border-[#1e2836]">
                        {[
                          { key: "name", label: "Player" },
                          { key: "matches", label: "Matches" },
                          { key: "wins", label: "Wins" },
                          { key: "losses", label: "Losses" },
                          { key: "winPct", label: "Win %" },
                          { key: "avgScore", label: "Avg Score" },
                        ].map((col) => (
                          <th
                            key={col.key}
                            onClick={() =>
                              col.key !== "name" && toggleSort(col.key)
                            }
                            className={`px-5 py-3.5 text-left text-[11px] uppercase tracking-widest font-semibold text-[#4a5c70]
                              ${col.key !== "name" ? "cursor-pointer hover:text-[#8a9bb0] select-none" : ""}`}
                          >
                            {col.label}
                            {col.key !== "name" && <SortIcon col={col.key} />}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {isLoading
                        ? Array.from({ length: 4 }).map((_, i) => (
                            <tr
                              key={i}
                              className="border-b border-[#1e2836] last:border-0"
                            >
                              {Array.from({ length: 6 }).map((_, j) => (
                                <td key={j} className="px-5 py-4">
                                  <Skeleton className="h-4 w-full" />
                                </td>
                              ))}
                            </tr>
                          ))
                        : sortedPlayers.map((p, i) => {
                            const isTopPlayer =
                              i === 0 &&
                              sortKey === "winPct" &&
                              sortDir === "desc";
                            return (
                              <tr
                                key={p.name}
                                className={`border-b border-[#1e2836] last:border-0 transition-colors duration-150
                                  ${
                                    isTopPlayer
                                      ? "bg-[rgba(0,229,160,0.04)]"
                                      : "hover:bg-[#161f2e]"
                                  }`}
                              >
                                {/* Player name */}
                                <td className="px-5 py-4">
                                  <div className="flex items-center gap-3">
                                    {/* Avatar initials */}
                                    <div
                                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0
                                        ${
                                          isTopPlayer
                                            ? "bg-[rgba(0,229,160,0.15)] text-[#00e5a0] border border-[rgba(0,229,160,0.3)]"
                                            : "bg-[#1e2836] text-[#4a5c70]"
                                        }`}
                                    >
                                      {p.name[0]}
                                    </div>
                                    <span
                                      className={`text-sm font-semibold ${isTopPlayer ? "text-[#00e5a0]" : "text-[#e8f0f8]"}`}
                                    >
                                      {p.name}
                                    </span>
                                    {isTopPlayer && (
                                      <span className="text-[10px] font-medium bg-[rgba(0,229,160,0.1)] border border-[rgba(0,229,160,0.2)] text-[#00e5a0] px-2 py-0.5 rounded-full">
                                        Top
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="px-5 py-4 text-[13px] text-[#8a9bb0] tabular-nums">
                                  {p.matches}
                                </td>
                                <td className="px-5 py-4 text-[13px] text-[#00e5a0] font-semibold tabular-nums">
                                  {p.wins}
                                </td>
                                <td className="px-5 py-4 text-[13px] text-[#8a9bb0] tabular-nums">
                                  {p.losses}
                                </td>
                                {/* Win % with progress bar */}
                                <td className="px-5 py-4">
                                  <WinBar percent={p.winPct} />
                                </td>
                                <td className="px-5 py-4 text-[13px] text-[#8a9bb0] tabular-nums">
                                  {p.avgScore}
                                </td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </table>

                  {/* Empty state inside table */}
                  {!isLoading && sortedPlayers.length === 0 && (
                    <div className="py-16 text-center text-[#4a5c70] text-sm">
                      No match data yet
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════
                SECTION 4 — HIGHLIGHTS
            ══════════════════════════════════════════════════════════════ */}
            <div className="mb-10">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-1 h-5 rounded-full bg-[#f59e0b]" />
                <h2 className="font-[Syne] font-bold text-lg text-[#e8f0f8]">
                  Match Highlights
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <HighlightCard
                  icon="🕐"
                  label="Longest Match"
                  main={MOCK_HIGHLIGHTS.longestMatch.duration}
                  sub={MOCK_HIGHLIGHTS.longestMatch.players.join(" vs ")}
                  color="#00e5a0"
                  delay={0}
                />
                <HighlightCard
                  icon="⚡"
                  label="Shortest Match"
                  main={MOCK_HIGHLIGHTS.shortestMatch.duration}
                  sub={MOCK_HIGHLIGHTS.shortestMatch.players.join(" vs ")}
                  color="#3b82f6"
                  delay={80}
                />
                <HighlightCard
                  icon="🔥"
                  label="Highest Score"
                  main={MOCK_HIGHLIGHTS.highestScoreMatch.score}
                  sub={MOCK_HIGHLIGHTS.highestScoreMatch.players.join(" vs ")}
                  color="#f59e0b"
                  delay={160}
                />
                <HighlightCard
                  icon="⚖️"
                  label="Closest Match"
                  main={MOCK_HIGHLIGHTS.closestMatch.score}
                  sub={MOCK_HIGHLIGHTS.closestMatch.players.join(" vs ")}
                  color="#ec4899"
                  delay={240}
                />
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════
                SECTION 5 — CHARTS
            ══════════════════════════════════════════════════════════════ */}
            <div className="mb-10">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-1 h-5 rounded-full bg-[#8b5cf6]" />
                <h2 className="font-[Syne] font-bold text-lg text-[#e8f0f8]">
                  Analytics
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {/* ── Bar Chart: Matches Over Time ── */}
                <div
                  className="p-6 bg-[#111722] border border-[#1e2836] rounded-3xl
                  shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#2a3a50] transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-[#4a5c70] font-medium mb-0.5">
                        This Week
                      </div>
                      <div className="font-[Syne] font-bold text-[#e8f0f8]">
                        Matches Over Time
                      </div>
                    </div>
                    {/* Simple legend dot */}
                    <div className="flex items-center gap-1.5 text-[11px] text-[#4a5c70]">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#00e5a0] opacity-80" />
                      Matches
                    </div>
                  </div>
                  {isLoading ? (
                    <div className="flex items-end gap-2 h-28">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <Skeleton
                          key={i}
                          className="flex-1"
                          style={{ height: `${30 + Math.random() * 50}%` }}
                        />
                      ))}
                    </div>
                  ) : (
                    <BarChart data={MOCK_CHART_DATA.matchesOverTime} />
                  )}
                </div>

                {/* ── Win Distribution ── */}
                <div
                  className="p-6 bg-[#111722] border border-[#1e2836] rounded-3xl
                  shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#2a3a50] transition-colors duration-200"
                >
                  <div className="mb-5">
                    <div className="text-[11px] uppercase tracking-widest text-[#4a5c70] font-medium mb-0.5">
                      All Players
                    </div>
                    <div className="font-[Syne] font-bold text-[#e8f0f8]">
                      Win Distribution
                    </div>
                  </div>
                  {isLoading ? (
                    <div className="flex flex-col gap-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                      ))}
                    </div>
                  ) : (
                    <WinDistributionChart
                      data={MOCK_CHART_DATA.winDistribution}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── Keyframe for shimmer skeleton animation ── */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
