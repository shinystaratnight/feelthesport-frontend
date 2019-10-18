import React from "react";
import "./TransactionBoxItem.css";

export default function TransactionBoxItem({ type, data }) {
  if (type === "bookaslots") {
    console.log(data);
    let slotCostTotal = 0;
    const [courtId, { courtType, players, timeSlots }] = data;
    return (
      <div className="TransactionBoxItem--container TransactionBoxItem--bookaslot">
        <p className="fnt-text1 fgc-black">
          Court {courtId} ({courtType})
          <br/>
          {players} players </p>
        <div>
          {Object.entries(timeSlots).map(([itemId, slot], index) => {
            let { timeSlots, slotCost } = slot;
            slotCostTotal += slotCost;
            return (
              <p key={index} className="fnt-text1 fgc-black">
                {timeSlots}
              </p>
            );
          })}
        </div>
        <p className="fnt-button2 fgc-black  TransactionBoxItem--showCost">
          ₹{slotCostTotal}
        </p>
      </div>
    );
  }
}
