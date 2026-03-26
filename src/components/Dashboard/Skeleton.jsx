export default function Skeleton({ className = "" }) {
  return (
    <div
      className={`rounded-xl bg-[#1a2333] relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-linear-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent" />
    </div>
  );
}
