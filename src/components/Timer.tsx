"use client";

import useTimer from "@/hooks/useTimer";
import React, { useState } from "react";

type Props = {};

function Timer({}: Props) {
  const [timerInput, setTimerInput] = useState<number>();
  const {
    isRunning,
    start,
    pause,
    resume,
    reset,
    // timer,
    seconds,
    milliseconds,
  } = useTimer(5, () => alert("Time Up sir, Time Up!"));

  return (
    <div className="mx-2 my-4 rounded-lg w-fit px-4 py-1 text-white flex flex-col justify-center gap-3">
      Timer
      <input
        className=" text-black"
        value={timerInput}
        disabled
        onChange={(e) => setTimerInput(Number(e.currentTarget.value))}
      />
      <div>
        {seconds}: {milliseconds}
      </div>
      <div className=" space-x-3">
        <button
          onClick={() => (isRunning ? pause() : start())}
          className=" bg-slate-400 rounded px-3 py-1 hover:bg-slate-500"
        >
          {!isRunning ? "Start" : "Pause"}
        </button>
        <button
          onClick={reset}
          className="bg-slate-400 rounded px-3 py-1 hover:bg-slate-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
