import React from "react";
import classNames from "classnames";
import { DateTime } from "luxon";
import "./BookingDates.css";

export default function BookingDates({
  dates,
  activeDate,
  dateHandler,
  className
}) {
  const classes = classNames({
    "BookingDates--container": true,
    [className]: className
  });

  return (
    <ul className={classes}>
      {dates.map((dateStr, index) => {
        const date = DateTime.fromISO(dateStr);

        const dateClasses = classNames({
          "BookingDates--date": true,
          "BookingDates--activeDate": activeDate === dateStr,
          "BookingDates--holiday":
            date.toFormat("ccc") === "Sat" || date.toFormat("ccc") === "Sun"
        });

        return (
          <li
            className={dateClasses}
            onClick={
              activeDate !== dateStr ? () => dateHandler(dateStr) : undefined
            }
            key={index}
          >
            <p className="fnt-text2 fnt-bold">{date.toFormat("ccc")}</p>
            <p className="fnt-text1 fnt-bold">{date.toFormat("dd")}</p>
            <p className="fnt-text2 fnt-bold">
              {date.toFormat("LLL").toUpperCase()}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
