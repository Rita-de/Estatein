import { useState } from "react";
import {  ChevronDownCircle } from "lucide-react";

const ChevronSelect = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const options = ["New York","london","Nigeria","USA"];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className=" text-white px-4 py-1 rounded-xl flex items-center gap-2 shadow bg-transparent  transition-colors  "
      >
        {selected}
        <ChevronDownCircle className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-transparent text-white hover:text-black   max-w-3xl border    rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChevronSelect;
