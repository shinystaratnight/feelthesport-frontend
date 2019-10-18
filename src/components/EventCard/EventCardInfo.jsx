import React from "react";
import "./EventCardInfo.css";

export default function EventCardInfo({ type, icon, children, className }) {
  const cClassName = className !== undefined ? ` ${className}` : "";
  const eVariant = type === 1 ? "EventCard" : "EventCard2";
  return (
    <div className={`${eVariant}--info${cClassName}`}>
      <img src={icon} alt="info icon" />
      <p className="fnt-text2 fgc-white EventCardInfo--text">{children}</p>
    </div>
  );
}
