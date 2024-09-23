import { useRef, useState } from "react";

function useStopwatch() {
  const [now, setNow] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0); // Track time up to pause
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout>();

  function toUnits(difference: number) {
    const msec = Math.floor(difference / 10) % 100;
    const sec = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 60;

    const secString =
      sec.toString().length === 1 ? "0" + sec.toString() : sec.toString();

    const minutesString =
      minutes.toString().length === 1
        ? "0" + minutes.toString()
        : minutes.toString();

    const hoursString =
      hours.toString().length === 1 ? "0" + hours.toString() : hours.toString();

    const milliseconds =
      msec.toString().length === 1 ? "0" + msec.toString() : msec.toString();
    return {
      hours: hoursString,
      minutes: minutesString,
      seconds: secString,
      milliseconds: milliseconds,
    };
  }

  function start() {
    setIsRunning(true);
    const currentTime = Date.now();
    setStartTime(currentTime); // Set the new start time based on now

    // Clear interval to prevent multiple timers
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function pause() {
    if (!isRunning) return; // Do nothing if not running

    // Calculate the total elapsed time and save it
    setElapsedTime((prevElapsed) => prevElapsed + (Date.now() - startTime));

    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(intervalRef.current);

    // Reset everything to zero
    setNow(0);
    setStartTime(0);
    setElapsedTime(0);
  }

  const diff = isRunning ? now - startTime + elapsedTime : elapsedTime;

  return { ...toUnits(diff), isRunning, start, pause, stop };
}

export default useStopwatch;
