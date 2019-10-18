export default t => {
  const time = t.split(":");
  const hours = Number(time[0]);
  const minutes = Number(time[1]);
  let newTime;

  if (hours > 0 && hours <= 12) {
    newTime = `${hours}`;
  } else if (hours > 12) {
    newTime = `${hours - 12}`;
  } else if (hours === 0) {
    newTime = "12";
  }

  newTime += minutes < 10 ? `:0${minutes}` : `:${minutes}`;
  newTime += hours >= 12 ? "pm" : "am";

  return newTime;
};
