import React from "react";
import "./Copyright.css";

export default function Copyright() {
  return (
    <div className="Copyright--container">
      <h6 className="fnt-text2 fgc-black fnt-bold">
        © {new Date().getFullYear()} ftsgroup All rights reserved
      </h6>
    </div>
  );
}
