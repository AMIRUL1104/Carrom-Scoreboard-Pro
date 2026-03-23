// import filter from "../../assets/funnel.svg";
// import sort from "../../assets/arrow-down-up.svg";
// function FilterSort() {
//   return (
//     <div className="flex flex-col items-start relative">
//       <div
//         className="
//     shrink-0
//     flex flex-row
//     items-center
//     gap
//   "
//       >
//         {/* Filter Button */}

//         <button
//           title="filter"
//           type="button"
//           className="
//                     inline-flex items-center justify-center
//                     gap-2
//                     p-2
//                     text-sm font-semibold
//                     rounded-lg
//                     hover:bg-[#ffffff1a]
//                     text-[#e8f0f8]
//                     disabled:opacity-60 disabled:hover:bg-transparent
//                     transform transition-all duration-200 ease-out
//                     focus-visible:outline-2
//                     focus-visible:outline-[#00e5a0]
//                     focus-visible:outline-offset-2
//                     active:scale-95
//                     "
//         >
//           <img src={filter} className="w-5 h-5" />
//         </button>
//         {/* Sort Button */}
//         <button
//           title="sort"
//           type="button"
//           className="
//       inline-flex items-center justify-center
//       gap-2
//       p-2
//       text-sm font-semibold
//       rounded-lg
//       hover:bg-[#ffffff1a]
//       text-[#e8f0f8]
//       disabled:opacity-60 disabled:hover:bg-transparent
//       transform transition-all duration-200 ease-out
//       focus-visible:outline-2
//       focus-visible:outline-[#00e5a0]
//       focus-visible:outline-offset-2
//       active:scale-95
//     "
//         >
//           <img src={sort} className="w-5 h-5" />
//         </button>
//       </div>

//       <div>
//         <ol
//           className={` absolute z-50 border rounded-sm bg-slate-600 px-2 min-w-34 right-12 `}
//         >
//           <li >single player</li>
//           <li>dubble player</li>
//         </ol>
//         <ol className={` absolute z-50 border rounded-sm bg-slate-600 px-2 min-w-34 right-12 `}
//    >
//             <li >single player</li>
//           <li>dubble player</li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// export default FilterSort;

import { useState, useEffect, useRef } from "react";
import filter from "../../assets/funnel.svg";
import sort from "../../assets/arrow-down-up.svg";

function FilterSort({ handleSortFilter }) {
  const [openDropdown, setOpenDropdown] = useState(null); // "filter" | "sort" | null
  const containerRef = useRef(null);

  const filterOptions = ["All", "Single Player", "Dubble Player"];
  const sortOptions = ["Newest", "Oldest", "Highest Score", "Lowest Score"];

  // বাইরে click করলে বন্ধ হবে
  useEffect(() => {
    function handleOutsideClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  function toggle(name) {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }

  const btnClass = `
    inline-flex items-center justify-center
    gap-2 p-2
    text-sm font-semibold
    rounded-lg
    hover:bg-[#ffffff1a]
    text-[#e8f0f8]
    disabled:opacity-60 disabled:hover:bg-transparent
    transform transition-all duration-200 ease-out
    focus-visible:outline-2
    focus-visible:outline-[#00e5a0]
    focus-visible:outline-offset-2
    active:scale-95
  `;

  const dropdownClass = `
    absolute top-full right-0 mt-1
    z-50
    min-w-[160px]
    bg-[#111722]
    border border-[#1e2836]
    rounded-xl
    overflow-hidden
    shadow-[0_4px_24px_rgba(0,0,0,0.5)]
  `;

  const itemClass = `
    w-full text-left
    px-4 py-2.5
    text-sm text-[#8a9bb0]
    hover:bg-[#ffffff0d] hover:text-[#e8f0f8]
    transition-colors duration-150
    capitalize
  `;

  return (
    <div
      ref={containerRef}
      className="flex flex-row items-center gap-1 shrink-0"
    >
      {/* ── Filter ── */}
      <div className="relative">
        <button
          title="filter"
          type="button"
          onClick={() => toggle("filter")}
          className={`${btnClass} ${openDropdown === "filter" ? "bg-[#ffffff1a]" : ""}`}
        >
          <img src={filter} className="w-5 h-5" />
        </button>

        {openDropdown === "filter" && (
          <ol className={dropdownClass}>
            {filterOptions.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  name="filter"
                  value={opt}
                  onClick={(e) => {
                    handleSortFilter(e);
                    setOpenDropdown(null);
                  }}
                  className={itemClass}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* ── Sort ── */}
      <div className="relative">
        <button
          title="sort"
          type="button"
          onClick={() => toggle("sort")}
          className={`${btnClass} ${openDropdown === "sort" ? "bg-[#ffffff1a]" : ""}`}
        >
          <img src={sort} className="w-5 h-5" />
        </button>

        {openDropdown === "sort" && (
          <ol className={dropdownClass}>
            {sortOptions.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  name="sort"
                  value={opt}
                  onClick={(e) => {
                    handleSortFilter(e);
                    setOpenDropdown(null);
                  }}
                  className={itemClass}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default FilterSort;
