import React from "react";
import "./TransactionCost.css";
import { DateTime } from "luxon";

export default function TransactionCost({ data }) {
  const {
    orderID,
    transactionId,
    paymentID,
    pointsUsed,
    discount,
    cost,
    payMethod,
    createdAt
  } = data;
  const d = DateTime.fromISO(createdAt);
  return (
    <div className="TransactionCost--container">
      <div>
        <p className="fnt-text1 fgc-gray">
          Booking ID: <span className="fgc-blue">#{transactionId}</span>
        </p>
        <p className="fnt-text1 fgc-gray">
          Payment ID: <span className="fgc-blue">#{paymentID}</span>
        </p>
        <p className="fnt-text1 fgc-gray">
          Payment Method: <span className="fgc-blue">{payMethod.toUpperCase()}</span>
        </p>
        <p className="fnt-text1 fgc-gray">
          Payment date: <span className="fgc-blue">{d.toFormat("ccc")}, {d.toFormat("dd LLL y")} </span>
        </p>
      </div>
      <div>
        <p className="fnt-subtitle4 fgc-black">
          Sub Total: <span className="fgc-darkOrange">₹{cost+discount+pointsUsed}</span>
        </p>
        <p className="fnt-subtitle4 fgc-black">
          Coupon Discount: <span className="fgc-darkOrange">₹{discount}</span>
        </p>
        <p className="fnt-subtitle4 fgc-black">
          Reward Points: <span className="fgc-darkOrange">₹{pointsUsed}</span>
        </p>
        <p className="fnt-button2 fgc-black fnt-bold">
          Grand Total: <span className="fgc-darkOrange">₹{cost}</span>
        </p>
      </div>
    </div>
  );
}
