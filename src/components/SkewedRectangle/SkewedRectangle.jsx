import React from "react";
import "./SkewedRectangle.css";

export default function SkewedRectangle({ top, bottom }) {
  let topBottom;
  if (top === "white" && bottom === "black")
    topBottom = " SkewedRectangle--topWhite--bottomBlack";
  else if (top === "black" && bottom === "white")
    topBottom = " SkewedRectangle--topBlack--bottomWhite";
  else if (top === "transparent")
    topBottom = " SkewedRectangle--topTransparent--bottomWhite";
  else topBottom = " SkewedRectangle--topWhite--bottomBlack";

  return <div className={`SkewedRectangle--container${topBottom}`} />;
}
