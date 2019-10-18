import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import SubscriptionItem from "../SubscriptionItem";
import "./SubscriptionTable.css";

const ArrowUp = ({ clickHandler }) => (
  <svg
    width="34"
    height="19"
    viewBox="0 0 34 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={clickHandler}
    className="SubscriptionTable--arrow"
  >
    <path
      d="M2.31348 16.8702L17.0303 2.15332L31.7471 16.8702"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDown = ({ clickHandler }) => (
  <svg
    width="34"
    height="18"
    viewBox="0 0 34 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={clickHandler}
    className="SubscriptionTable--arrow"
  >
    <path
      d="M31.748 1.72946L17.0312 16.4463L2.31439 1.72946"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SubscriptionTable({ type, data }) {
  const [open, setOpen] = useState(true);
  let header;
  if (type === "membership") header = "Membership";
  else if (type === "coaching") header = "Coaching";
  else if (type === "bookaslot") header = "Book a Slot";

  return (
    <div className="SubscriptionTable--container">
      <div className="SubscriptionTable--header">
        <p className="fnt-button1 fgc-white">{header}</p>
        {open ? (
          <ArrowUp clickHandler={() => setOpen(!open)} />
        ) : (
          <ArrowDown clickHandler={() => setOpen(!open)} />
        )}
      </div>
      <AnimateHeight duration={500} height={open ? "auto" : 0}>
        <div className="SubscriptionTable--priceTime">
          {type !== "bookaslot" && (
            <p className="fnt-button1 fgc-lightOrange">Time</p>
          )}
          <p className="fnt-button1 fgc-lightOrange">Price</p>
        </div>
        <div className="SubscriptionTable--items">
          {type === "bookaslot" ? (
            <SubscriptionItem
              type={type}
              categoryName={data.categoryName}
              description={data.description}
              bookaslotPrice={data.price}
            />
          ) : (
            Object.values(data).map(
              ({ categoryName, description, periods }, index) => (
                <SubscriptionItem
                  type={type}
                  categoryName={categoryName}
                  description={description}
                  periods={periods}
                  key={index}
                />
              )
            )
          )}
        </div>
      </AnimateHeight>
    </div>
  );
}
