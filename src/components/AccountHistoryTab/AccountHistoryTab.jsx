import React, { useState } from "react";
import AccountHistoryNav from "../AccountHistoryNav";
import AccountHistoryTabRow from "../AccountHistoryTabRow";
import "./AccountHistoryTab.css";

export default function AccountHistoryTab() {
  const [activeTab, setActiveTab] = useState("booking");

  const tabHandler = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="AccountHistoryTab--container">
      <h2 className="fnt-subtitle2 fgc-black">History</h2>
      <AccountHistoryNav activeTab={activeTab} tabHandler={tabHandler} />
      <AccountHistoryTabRow />
      <AccountHistoryTabRow />
      <AccountHistoryTabRow />
      <AccountHistoryTabRow />
      <AccountHistoryTabRow />
      <AccountHistoryTabRow />
      <p className="fnt-text1 fgc-lightOrange">Show more</p>
    </div>
  );
}
