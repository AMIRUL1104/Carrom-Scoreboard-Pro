import undo from "../../assets/undo-2.svg";
import redo from "../../assets/redo-2.svg";
function UndoRedo() {
  return (
    <div
      className="
          /* Layout */
          w-full
          sm:w-auto

          flex flex-row
          items-center

          max-sm:justify-start

          gap
        "
    >
      {/* Undo Button */}
      <button
        className="
            /* Layout */
            w-full
            sm:w-auto

            inline-flex items-center justify-center
            gap-2

            /* Spacing */
            p-2

            /* Typography */
            text-sm
            font-semibold

            /* UI */
            rounded-lg

            hover:bg-[#ffffff1a]
            text-[#e8f0f8]

            /* Animation */
            transform
            transition-all
            duration-200
            ease-out

            focus-visible:outline-2
            focus-visible:outline-[#00e5a0]
            focus-visible:outline-offset-2

            active:scale-95
          "
      >
        <img src={undo} />
      </button>

      {/* Redo Button */}
      <button
        type="button"
        className="
            /* Layout */
            w-full
            sm:w-auto

            inline-flex items-center justify-center
            gap-2

            /* Spacing */
            p-2

            /* Typography */
            text-sm
            font-semibold

            /* UI */
            rounded-lg

            hover:bg-[#ffffff1a]
            text-[#e8f0f8]

            /* Animation */
            transform
            transition-all
            duration-200
            ease-out

            focus-visible:outline-2
            focus-visible:outline-[#00e5a0]
            focus-visible:outline-offset-2

            active:scale-95
          "
      >
        <img src={redo} />
      </button>
    </div>
  );
}

export default UndoRedo;
