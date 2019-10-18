import React from "react";
import classNames from "classnames";
import "./Wedge.css";

export default function Wedge({ type, top, bottom }) {
  const wedgeClass = classNames({
    "Wedge--type1--topBlack--bottomWhite":
      type === 1 && top === "black" && bottom === "white",
    "Wedge--type2--topBlack--bottomWhite":
      type === 2 && top === "black" && bottom === "white",
    "Wedge--type1--topWhite--bottomBlack":
      type === 1 && top === "white" && bottom === "black",
    "Wedge--type2--topWhite--bottomBlack":
      type === 2 && top === "white" && bottom === "black"
  });

  return <div className={wedgeClass} />;
}

// const bottomClasses = classNames({
//   "Wedge--bottom--black": bottom === "black",
//   "Wedge--bottom--white": bottom === "white",
//   "Wedge--bottom--transparent": bottom === "transparent"
// });
