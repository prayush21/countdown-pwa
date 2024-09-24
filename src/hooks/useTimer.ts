import { toUnits } from "@/app/utils";
import { useRef, useState } from "react";

function useTimer(initialValue = 20, onTimeUp: () => void) {
  // const [defaultTimer, setDet] = useState<number>(initialValue);
  // let timer = initialValue;
  const [endTime, setEndTime] = useState<number>(
    Date.now() + initialValue * 1000
  );
  const [now, setNow] = useState<number>(Date.now());
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const diff = isRunning ? endTime - now : initialValue * 1000;

  function start() {
    setIsRunning(true);
    setNow(Date.now());
    setEndTime(Date.now() + initialValue * 1000);
    console.log("now - end", endTime, now, initialValue);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(() => {
        const currentNow = Date.now(); // Get the latest current time
        const timeLeft = endTime - currentNow;
        // console.log("endTime,now, timeLeft", endTime, currentNow, timeLeft);
        console.log("diff", diff);
        if (timeLeft <= 0) {
          handleTimeUp(); // Call the function for time up
          return currentNow; // Return the final value to stop updates
        }

        return currentNow; // Update `now` state with the latest time
      });
    }, 10);
  }

  function resume() {}

  function pause() {}

  function reset() {
    setIsRunning(false);
    setNow(0);
    setEndTime(0);
  }

  function set() {}

  function handleTimeUp() {
    console.log("end");

    clearInterval(intervalRef.current);
    setIsRunning(false);
    setNow(Date.now());
    setEndTime(Date.now() + initialValue);
    onTimeUp();
  }

  // setTimer(endTime - now);

  console.log("now, endTime, diff", now, endTime, diff);

  return {
    ...toUnits(diff),
    // timer,
    isRunning,
    start,
    resume,
    pause,
    set,
    reset,
    // setTimer,
  };
}

export default useTimer;
