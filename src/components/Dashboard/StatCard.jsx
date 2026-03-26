import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Skeleton from "./Skeleton";

export default function StatCard({ data }) {
  const [visible, setVisible] = useState(false);

  // ডাটা টাইপ চেক করা হচ্ছে
  const isNumber = typeof data?.value === "number";

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), data.delay || 0);
    return () => clearTimeout(t);
  }, [data.delay]);

  if (data.isLoading) {
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
        transition: `opacity 0.4s ease ${data.delay}ms, transform 0.4s ease ${data.delay}ms, box-shadow 0.2s ease, border-color 0.2s ease`,
      }}
    >
      {/* Top gradient animation line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[rgba(0,229,160,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl bg-[rgba(0,229,160,0.1)] border border-[rgba(0,229,160,0.15)]
        flex items-center justify-center mb-4 text-[#00e5a0] text-lg
        group-hover:bg-[rgba(0,229,160,0.18)] group-hover:shadow-[0_0_14px_rgba(0,229,160,0.3)]
        transition-all duration-200"
      >
        {data.icon}
      </div>

      {/* Value Logic: নাম্বার হলে CountUp হবে, স্ট্রিং হলে সরাসরি বসবে */}
      <div className="text-[28px] font-extrabold font-[Syne] text-[#e8f0f8] leading-none mb-1 tabular-nums">
        {isNumber ? (
          visible ? (
            <CountUp end={data.value} duration={2} separator="," />
          ) : (
            "0"
          )
        ) : (
          data.value || "---"
        )}
      </div>

      {/* Label */}
      <div className="text-[12px] font-medium uppercase tracking-widest text-[#4a5c70] mb-1">
        {data.label}
      </div>

      {/* Sub info */}
      {data.sub && (
        <div className="text-[12px] text-[#00e5a0] font-medium mt-auto pt-2">
          {data.sub}
        </div>
      )}
    </div>
  );
}
