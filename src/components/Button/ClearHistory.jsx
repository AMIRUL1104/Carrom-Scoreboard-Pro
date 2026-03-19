function ClearHistory() {
  return (
    <button
      className="
              sm:w-auto

              block

              px-2 md:px-4 py-1 md:py-2

              bg-[#ff4d6d1f]
              border border-[#ff4d6d40]
              text-[#ff4d6d]

              rounded-[14px]
              text-sm font-semibold

              transform
              transition-all
              duration-200
              ease-out

              hover:bg-[#ff4d6d33]
              hover:border-[#ff4d6d]
              hover:shadow-[0_0_20px_rgba(255,77,109,0.25)]

              active:scale-90
            "
    >
      Clear History
    </button>
  );
}

export default ClearHistory;
