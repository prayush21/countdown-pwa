"use client";

import React from "react";
import { useTimer } from "react-timer-hook";

function Countdown() {
  const exp = new Date("01-01-2025");

  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: exp });
  return (
    <div className="flex flex-col items-center justify-center h-full p-10 text-white">
      <div className="text-4xl font-bold tracking-wider mb-4">Countdown</div>
      <div className="flex space-x-4 text-2xl font-semibold">
        <div className="flex flex-col items-center">
          <span className="text-5xl">{days}</span>
          <span className="text-sm uppercase tracking-wide">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl">{hours}</span>
          <span className="text-sm uppercase tracking-wide">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl">{minutes}</span>
          <span className="text-sm uppercase tracking-wide">Mins</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl">{seconds}</span>
          <span className="text-sm uppercase tracking-wide">Secs</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
