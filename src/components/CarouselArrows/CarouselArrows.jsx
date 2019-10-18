import React from "react";
import classNames from "classnames";
import "./CarouselArrows.css";
export default function CarouselArrows({ className, type, style, onClick }) {
  const classes = classNames({
    "CarouselArrows--container": true,
    [className]: className
  });

  if (type === "next")
    return (

      <svg
        width="19"
        height="36"
        viewBox="0 0 19 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        style={{ ...style }}
        className={classes}
      >
        <path
          d="M2.23828 2.30908C7.92487 8.40643 16.7997 17.9223 16.7997 17.9223L2.23828 33.5356"
          stroke="#FC9B04"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (type === "prev")
    return (
      <svg
        width="20"
        height="36"
        viewBox="0 0 20 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        style={{ ...style }}
        className={classes}
      >
        <path
          d="M17.0938 33.5356C11.4072 27.4383 2.53232 17.9224 2.53232 17.9224L17.0938 2.30916"
          stroke="#FC9B04"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
}


/*
import React from "react";
import classNames from "classnames";
import "./CarouselArrows.css";


export default function CarouselArrows({ className, type, style, onClick }) {
  const classes = classNames({
    "CarouselArrows--container": true,
    [className]: className
  });

  if (type === "next")
    return (
        <span className={classes}>
          <svg width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.69336 1.5459C7.87448 6.28462 17.5211 13.6801 17.5211 13.6801L1.69335 25.8144" stroke="white"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </span>
    );
  if (type === "prev")
    return (
        <span className={classes}>
          <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4844 26.1582C11.3033 21.4195 1.65663 14.024 1.65663 14.024L17.4844 1.88972" stroke="white"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
    );
}

 */