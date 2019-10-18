import React from "react";
import AvailableDays from "../AvailableDays";
import "./PriceTime.css";
import militaryTimeToRegularTime from "../../helpers/militaryTimeToRegularTime";

export default function PriceTime({
  price,
  openingTime,
  closingTime,
  workingDays
}) {
  return (
    <div className="PriceTime--container">
      <div className="PriceTime--price">
        <p className="fnt-title2 fgc-lightOrange">{`Rs. ${price} / hour`}</p>
      </div>
      <div className="PriceTime--time">
        <div className="PriceTime--openClose">
          <p className="fnt-subtitle1 fgc-gray">
            {militaryTimeToRegularTime(openingTime)}
            <br />
            <span className="fnt-subtitle4">Opening Time</span>
          </p>
          <p className="fnt-subtitle1 fgc-gray">
            {militaryTimeToRegularTime(closingTime)}
            <br />
            <span className="fnt-subtitle4">Closing Time</span>
          </p>
        </div>
        <AvailableDays
          days={workingDays}
          className="PriceTime--availableDays"
        />
      </div>
    </div>
  );
}
