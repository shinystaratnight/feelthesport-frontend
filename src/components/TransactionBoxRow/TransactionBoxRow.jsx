import React from "react";
import TransactionBoxItem from "../TransactionBoxItem";
import "./TransactionBoxRow.css";
import { DateTime } from "luxon";
import CartBoxItemRow from "../CartBoxItemRow";

export default function TransactionBoxRow({ type, hideBorder = false, data}) {
  if (type === "bookaslots") {
    console.log(data)
    const [date, { sport, courts }] = data;
    const d = DateTime.fromISO(date);
    return (
      <div className="TransactionBoxRow--container TransactionBoxRow--bookaslot">
        <div>
          <p className="fnt-subtitle2 fgc-black">{sport}</p>
          <p className="fnt-text1 fgc-gray">
            {d.toFormat("dd LLL y")} {d.toFormat("cccc").toUpperCase()}
          </p>
        </div>
        {Object.entries(courts).map((data, index) => (
          <TransactionBoxItem type="bookaslots" key={index} data={data} />
        ))}


        {!hideBorder && <div className="TransactionBoxRow--border" />}
      </div>
    );
  }
}
