import React from "react";
import classNames from "classnames";
import "./TimeMap.css";

export default function TimeMap({ className, ...props }) {
  const classes = classNames({
    "TimeMap--container": true,
    [className]: className
  });

  return (
    <div className={classes} {...props}>
      <div>
        <div />
        <p className="fnt-text2 fgc-black">Available</p>
      </div>
      <div>
        <div />
        <p className="fnt-text2 fgc-black">Selected</p>
      </div>
      <div>
        <div />
        <p className="fnt-text2 fgc-black">In process</p>
      </div>
      <div>
        <div />
        <p className="fnt-text2 fgc-black">Unavailable</p>
      </div>
    </div>
  );
}
