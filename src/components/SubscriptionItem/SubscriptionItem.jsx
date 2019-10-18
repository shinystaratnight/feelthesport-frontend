/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import "./SubscriptionItem.css";

export default function SubscriptionItem({
  type,
  categoryName,
  description,
  periods,
  bookaslotPrice
}) {
  const [showing, setShowing] = useState(true);

  const handleClick = () => {
    setShowing(!showing);
  };

  return (
    <div className="SubscriptionItem--container">
      <div className="SubscriptionItem--membership">
        <p className="fnt-button1 fgc-black">{categoryName}</p>
        <p className="fnt-text1 fgc-gray">{showing ? description : ""}</p>
        <p
          className="fnt-text2 fgc-lightOrange SubscriptionItem--showMore"
          onClick={handleClick}
        >
          {showing ? "Hide" : "Show more"}
        </p>
      </div>
      {type !== "bookaslot" && (
        <div className="SubscriptionItem--time">
          <p className="fnt-button1 fgc-lightOrange SubscriptionItem--category">
            Time
          </p>
          {periods.map(({ period }, index) => {
            let remaining = period;
            const years = Math.floor(remaining / 365);
            remaining -= years * 365;
            const yearStr =
              years === 0
                ? ""
                : years === 1
                ? `${years} year`
                : `${years} years`;
            const months = Math.floor(remaining / 30);
            remaining -= months * 30;
            const monthStr =
              months === 0
                ? ""
                : months === 1
                ? `${months} month`
                : `${months} months`;

            return (
              <p className="fnt-button1 fgc-gray" key={index}>
                {`${yearStr}${
                  yearStr !== "" && monthStr !== "" ? " and " : ""
                }${monthStr}`}
              </p>
            );
          })}
        </div>
      )}
      <div className="SubscriptionItem--price">
        <p className="fnt-button1 fgc-lightOrange SubscriptionItem--category">
          Price
        </p>
        {type === "bookaslot" ? (
          <p className="fnt-button1 fgc-gray">{bookaslotPrice}</p>
        ) : (
          periods.map(({ price }, index) => (
            <p className="fnt-button1 fgc-gray" key={index}>
              {price}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
