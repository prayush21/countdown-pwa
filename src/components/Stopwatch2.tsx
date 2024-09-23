"use client";

import useStopwatch from "@/hooks/useStopwatch";

type Props = {};

export default function Stopwatch2({}: Props) {
  const { minutes, seconds, milliseconds, start, stop, pause, isRunning } =
    useStopwatch();

  return (
    <div>
      <div className="mx-2 my-4 rounded-lg w-fit px-4 py-1 text-white flex flex-col justify-center gap-3">
        <div>
          {minutes}:{seconds}:{milliseconds}
        </div>
        <div className=" space-x-3">
          <button
            onClick={() => (isRunning ? pause() : start())}
            className=" bg-slate-400 rounded px-3 py-1 hover:bg-slate-500"
          >
            {!isRunning ? "Start" : "Pause"}
          </button>
          <button
            onClick={stop}
            className="bg-slate-400 rounded px-3 py-1 hover:bg-slate-500"
          >
            Stop
          </button>
        </div>
      </div>
      <div className="mx-2 my-4 rounded-lg w-fit px-4 py-1 text-white flex flex-col justify-center gap-3"></div>
    </div>
  );
}
