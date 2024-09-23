"use client";

import useTimer from "@/hooks/use-timer";
import React from "react";

const TimerComponent: React.FC = () => {
  const { displayTimeLeft, timeLeft, isRunning, start, pause, reset } =
    useTimer(); // Pass initial time in seconds
  console.log("dis", displayTimeLeft);

  const minutes = Math.floor(displayTimeLeft / 60);
  const seconds = Math.floor(displayTimeLeft % 60);

  return (
    <div className=" text-white">
      <h2>Timer</h2>
      <p>
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </p>
      <div className=" space-x-2">
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default TimerComponent;
