import { useState } from "react";

const BgChanger = () => {
  const [color, setcolor] = useState("");

  return (
    <>
      <div
        className="w-screen h-screen  duration-1000 bg-slate-700"
        style={{ backgroundColor: color }}
      >
        <div className="w-60 h-70 fixed top-14 bg-blue-950 flex flex-col align-middle  gap-14 text-slate-200 rounded-md">
          <button
            className="border-4 rounded-full shadow-xl hover:shadow-inner shadow-blue-500/50 border-slate-200 p-5 m-3"
            onClick={() => setcolor("#FF0000")}
          >
            red
          </button>
          <button
            className="border-4 rounded-full shadow-xl hover:shadow-inner shadow-blue-500/50 border-slate-200 p-5 m-3"
            onClick={() => setcolor("#0000FF")}
          >
            blue
          </button>
          <button
            className="border-4 rounded-full shadow-xl hover:shadow-inner shadow-blue-500/50 border-slate-200 p-5 m-3"
            onClick={() => setcolor("#008000")}
          >
            green
          </button>
          <button
            className="border-4 rounded-full shadow-xl hover:shadow-inner shadow-blue-500/50 border-slate-200 p-5 m-3"
            onClick={() => setcolor("#FFFF00")}
          >
            yellow
          </button>
          <button
            className="border-4 rounded-full shadow-xl hover:shadow-inner shadow-blue-500/50 border-slate-200 p-5 m-3"
            onClick={() => setcolor("#FF00FF")}
          >
            pink
          </button>
        </div>
      </div>
    </>
  );
};

export default BgChanger;
