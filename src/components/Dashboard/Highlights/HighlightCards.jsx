import { useState, useEffect } from "react";

function HighlightCard({ icon, label, main, sub, color, delay }) {
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
        transition: `opacity 0.4s ease, transform 0.4s ease, border-color 0.2s ease`,
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
      <div className="text-[22px] font-extrabold text-[#e8f0f8] leading-tight mb-1">
        {main}
      </div>
      <div className="text-[12px] text-[#8a9bb0]">{sub}</div>
    </div>
  );
}

export default HighlightCard;
