"use client";

import React, { useRef, useState } from "react";

type Props = {};

export default function Stopwatch({}: Props) {
  const [now, setNow] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timeout>();

  const handleStart = () => {
    console.log("handle");
    setNow(Date.now());
    setStartTime(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  function displayDiff(difference: number) {
    const msec = Math.round(difference / 10);
    const sec = Math.round(difference / 1000) % 60;
    const minutes = Math.round(difference / (1000 * 60));

    const secString =
      sec.toString().length == 1 ? "0" + sec.toString() : sec.toString();
    return (
      <div>
        {minutes}:{secString || "00"}:{msec % 100 || "00"}
      </div>
    );
  }

  const diff = now - startTime;

  return (
    <div>
      <div className="mx-2 my-4 rounded-lg w-fit px-4 py-1 text-white flex flex-col justify-center gap-3">
        {displayDiff(diff)}
        <div className=" space-x-3">
          <button
            onClick={handleStart}
            className=" bg-slate-400 rounded px-3 py-1 hover:bg-slate-500"
          >
            Start
          </button>
          <button
            onClick={handleStop}
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
