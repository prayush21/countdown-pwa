import { useState, useEffect } from "react";

const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [displayTimeLeft, setDisplayTimeLeft] = useState<number>(300);

  const fetchTimerState = async () => {
    const res = await fetch("/api/timer", { method: "GET" });
    const data = await res.json();
    console.log("data", data, isRunning);
    setDisplayTimeLeft(data.timeLeft);
    setTimeLeft(data.timeLeft);
    setIsRunning(data.isRunning);
  };

  const start = async () => {
    await fetch("/api/timer", {
      method: "POST",
      body: JSON.stringify({ action: "start" }),
    });
    fetchTimerState();
  };

  const pause = async () => {
    await fetch("/api/timer", {
      method: "POST",
      body: JSON.stringify({ action: "pause" }),
    });
    fetchTimerState();
  };

  const reset = async () => {
    await fetch("/api/timer", {
      method: "POST",
      body: JSON.stringify({ action: "reset" }),
    });
    fetchTimerState();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("isRunning", isRunning, displayTimeLeft);

      if (isRunning == true) {
        setDisplayTimeLeft(displayTimeLeft - 1);
      }
      console.log("Update", isRunning, displayTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, displayTimeLeft]);

  return { displayTimeLeft, timeLeft, isRunning, start, pause, reset };
};

export default useTimer;
