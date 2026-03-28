import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
// const data = [
//   { name: "Amirul", score: 150, matches: 12 },
//   { name: "Jomir", score: 120, matches: 10 },
//   { name: "Tuhin", score: 180, matches: 15 },
//   { name: "Rafi", score: 95, matches: 8 },
//   { name: "Sabbir", score: 140, matches: 11 },
//   { name: "Nayeem", score: 110, matches: 9 },
//   { name: "Rakib", score: 170, matches: 14 },
//   { name: "Hasan", score: 130, matches: 10 },
//   { name: "Imran", score: 160, matches: 13 },
//   { name: "Fahim", score: 100, matches: 7 },
// ];

// #endregion
function Barcharts({ handleWeekMatches, matchesOverTime }) {
  return (
    <div
      onClick={() => handleWeekMatches()}
      className=" max-w-full  md:max-w-125 h-70 mx-auto border border-red-500"
    >
      <ResponsiveContainer width="100%" aspect={1.618} height="100%">
        <BarChart responsive data={matchesOverTime} radius={[10, 10, 0, 0]}>
          <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#aaa" }}></XAxis>
          {/* <YAxis></YAxis> */}
          <Tooltip
            wrapperStyle={{ width: 100, backgroundColor: "#000", fill: "red" }}
          />

          <Bar dataKey="value" fill="#00E5A0" barSize={"25"} />
          {/* <RechartsDevtools /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barcharts;
