import React from "react";
import "./SportNav.css";

export default function SportNav({ activeTab, tabHandler }) {
  return (
    <div className="SportNav--container">
      <div
        onClick={
          activeTab !== "academy" ? () => tabHandler("academy") : undefined
        }
        className={activeTab === "academy" ? `SportNav--activeTab` : ""}
      >
        <h3
          className={`fnt-subtitle2 ${
            activeTab === "academy" ? "fgc-white" : "fgc-black"
          }`}
        >
          Academy
        </h3>
      </div>
      <div
        onClick={
          activeTab !== "trainer" ? () => tabHandler("trainer") : undefined
        }
        className={activeTab === "trainer" ? `SportNav--activeTab` : ""}
      >
        <h3
          className={`fnt-subtitle2 ${
            activeTab === "trainer" ? "fgc-white" : "fgc-black"
          }`}
        >
          Trainer
        </h3>
      </div>
    </div>
  );
}
