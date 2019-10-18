import React from "react";
import AccoutPointsTabInfoRow from "../AccoutPointsTabInfoRow";
import "./AccountPointsTab.css";

const fts = {
  balance: "500 FTS Points",
  info: [
    {
      n: 1,
      details: [
        "title",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas quis assumenda quasi veritatis dolorum officia. Reiciendis id omnis modi. "
      ],
      date: ["15.02.2018", "09:06 pm"],
      credit: "400",
      debit: "642",
      balance: "500 FTS Points"
    },
    {
      n: 1,
      details: [
        "title",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas quis assumenda quasi veritatis dolorum officia. Reiciendis id omnis modi. "
      ],
      date: ["15.02.2018", "09:06 pm"],
      credit: "400",
      debit: "642",
      balance: "500 FTS Points"
    },
    {
      n: 1,
      details: [
        "title",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas quis assumenda quasi veritatis dolorum officia. Reiciendis id omnis modi. "
      ],
      date: ["15.02.2018", "09:06 pm"],
      credit: "400",
      debit: "642",
      balance: "500 FTS Points"
    },
    {
      n: 1,
      details: [
        "title",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas quis assumenda quasi veritatis dolorum officia. Reiciendis id omnis modi. "
      ],
      date: ["15.02.2018", "09:06 pm"],
      credit: "400",
      debit: "642",
      balance: "500 FTS Points"
    },
    {
      n: 1,
      details: [
        "title",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas quis assumenda quasi veritatis dolorum officia. Reiciendis id omnis modi. "
      ],
      date: ["15.02.2018", "09:06 pm"],
      credit: "400",
      debit: "642",
      balance: "500 FTS Points"
    },
    {
      n: 1,
      details: [
        "title",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas quis assumenda quasi veritatis dolorum officia. Reiciendis id omnis modi. "
      ],
      date: ["15.02.2018", "09:06 pm"],
      credit: "400",
      debit: "642",
      balance: "500 FTS Points"
    }
  ]
};

export default function AccountPointsTab() {
  return (
    <div className="AccountPointsTab--container">
      <h2 className="fnt-subtitle2 fgc-black">FTS Play Points</h2>
      <div>
        <p className="fnt-subtitle4 fgc-white">Balance</p>
        <p className="fnt-subtitle4 fgc-white">{fts.balance}</p>
      </div>
      <div className="AccountPointsTab--row">
        <div>
          <p className="fnt-text1 fgc-red">№</p>
          <p className="fnt-text1 fgc-red">Details</p>
          <p className="fnt-text1 fgc-red">Date</p>
          <p className="fnt-text1 fgc-red">Credit</p>
          <p className="fnt-text1 fgc-red">Debit</p>
          <p className="fnt-text1 fgc-red">Updated balance</p>
        </div>
        {fts.info.map((info, index) => (
          <AccoutPointsTabInfoRow
            index={index + 1}
            details={info.details[0]}
            description={info.details[1]}
            date={info.date[0]}
            time={info.date[1]}
            credit={info.credit}
            debit={info.debit}
            balance={info.balance}
            key={index}
          />
        ))}
      </div>
      <p className="fnt-text1 fgc-lightOrange">Show more</p>
    </div>
  );
}
