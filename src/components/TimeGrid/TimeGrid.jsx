import React from "react";
import classNames from "classnames";
import "./TimeGrid.css";

export default function TimeGrid({
  slotTimes,
  activeDate,
  courtId,
  slotHandler,
  currentCourt,
  className
}) {
  const classes = classNames({
    "TimeGrid--container": true,
    [className]: className
  });

  return (
    <div className={classes}>
      {Object.entries(slotTimes).map(([slotId, slotTime], index) => {
        const timeClasses = classNames({
          "fnt-subtitle4": true,
          "fgc-black": true,
          "TimeGrid--selected": currentCourt.slots[slotId] === "selected",
          "TimeGrid--unavailable": currentCourt.slots[slotId] === "unavailable",
          "TimeGrid--inProcess": currentCourt.slots[slotId] === "inProcess"
        });

        return (
          <p
            className={timeClasses}
            onClick={
              currentCourt.slots[slotId] === "selected" ||
              currentCourt.slots[slotId] === "available"
                ? () => slotHandler(activeDate, courtId, slotId)
                : undefined
            }
            key={index}
          >
            {slotTime.replace("-", " - ")}
          </p>
        );
      })}
    </div>
  );
}
