export function toUnits(difference: number) {
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
