import React from "react";
import "./EventTimePlace.css";

export default function EventTimePlace({
  city,
  sport,
  startDate,
  endDate,
  startTime,
  endTime
}) {
  const formatTime = time => {
    const t = time.split(":");
    const amPm = Number(t[0]) >= 12 ? "pm" : "am";
    return `${t[0]}:${t[1]}${amPm}`;
  };
  const formatDate = date => {
    const d = date.split("-").reverse();
    return `${d[0]}/${d[1]}/${d[2]}`;
  };

  return (
    <div className="EventTimePlace--container">
      <div>
        <p className="fnt-subtitle4 fgc-black">
          City: <span className="fgc-darkOrange">{city}</span>
        </p>
        <p className="fnt-subtitle4 fgc-black">
          Sport: <span className="fgc-darkOrange">{sport}</span>
        </p>
      </div>
      <div>
        <p className="fnt-subtitle4 fgc-black">
          Start date:{" "}
          <span className="fgc-darkOrange">{formatDate(startDate)}</span>
        </p>
        <p className="fnt-subtitle4 fgc-black">
          End date:{" "}
          <span className="fgc-darkOrange">{formatDate(endDate)}</span>
        </p>
      </div>
      <div>
        <p className="fnt-subtitle4 fgc-black">
          Start time:{" "}
          <span className="fgc-darkOrange">{formatTime(startTime)}</span>
        </p>
        <p className="fnt-subtitle4 fgc-black">
          End time:{" "}
          <span className="fgc-darkOrange">{formatTime(endTime)}</span>
        </p>
      </div>
    </div>
  );
}
