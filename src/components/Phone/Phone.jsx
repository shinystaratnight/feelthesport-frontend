import React from "react";
import Typography from "../Typography";
import "./Phone.css";

export default function Phone({ className, ...props }) {
  const cClassName = className !== undefined ? ` ${className}` : "";
  return (
    <div className={`Phone--container${cClassName}`} {...props}>
      Phone
    </div>
  );
}
