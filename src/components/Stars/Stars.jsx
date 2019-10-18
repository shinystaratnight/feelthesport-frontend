import React from "react";
import Typography from "../Typography";
import "./Stars.css";

const uuidv4 = require("uuid/v4");

export default function Stars({ stars, color, rating, className, ...props }) {
  const starsColor = c => {
    if (c === "white" || c === undefined) return "#fff";
    if (c === "black") return "#19191b";
    if (c === "gray") return "#747478";
    if (c === "lightOrange") return "#fc9b04";
    if (c === "darkOrange") return "#f05327";
    if (c === "blue") return "#3869e8";
    if (c === "green") return "#b5e237";
    return "#fff";
  };

  const fullStars = Math.floor(stars);
  const halfStars = stars === Math.floor(stars) ? 0 : 1;
  const emptyStars = 5 - fullStars - halfStars;
  const allStars = [fullStars, halfStars, emptyStars];
  const sColor = starsColor(color);
  const sClassName = className !== undefined ? ` ${className}` : "";

  return (
    <div className={`Stars--container${sClassName}`} {...props}>
      {allStars.map((star, index) => {
        if (index === 0)
          return new Array(star).fill(0).map(() => (
            <svg
              width="36"
              height="33"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              key={uuidv4()}
            >
              <path
                d="M18.1818 2.47375L21.8396 13.055L21.9559 13.3916H22.3121H34.0593L24.5828 19.8631L24.2675 20.0785L24.3922 20.4394L28.0286 30.9588L18.4638 24.427L18.1818 24.2344L17.8998 24.427L8.33502 30.9588L11.9714 20.4394L12.0962 20.0785L11.7808 19.8631L2.30433 13.3916H14.0515H14.4077L14.5241 13.055L18.1818 2.47375Z"
                fill={sColor}
                stroke={sColor}
              />
            </svg>
          ));
        if (index === 1)
          return new Array(star).fill(0).map(() => (
            <svg
              width="36"
              height="33"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              key={uuidv4()}
            >
              <path
                d="M18.3537 2.47375L22.0114 13.055L22.1278 13.3916H22.484H34.2312L24.7547 19.8631L24.4393 20.0785L24.5641 20.4394L28.2005 30.9588L18.6357 24.427L18.3537 24.2344L18.0717 24.427L8.50689 30.9588L12.1433 20.4394L12.268 20.0785L11.9527 19.8631L2.4762 13.3916H14.2234H14.5796L14.6959 13.055L18.3537 2.47375Z"
                stroke={sColor}
              />
              <path
                d="M17.8556 3.92036L17.8554 12.8916V18.235V22.2698V22.2698L17.8556 24.5759L8.50884 30.9588L12.1452 20.4394L12.27 20.0785L11.9546 19.8631L2.47815 13.3916H14.2253H14.5815L14.6979 13.055L17.8556 3.92036Z"
                fill={sColor}
                stroke={sColor}
              />
            </svg>
          ));
        if (index === 2)
          return new Array(star).fill(0).map(() => (
            <svg
              width="36"
              height="33"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              key={uuidv4()}
            >
              <path
                d="M18.3537 2.47375L22.0114 13.055L22.1278 13.3916H22.484H34.2312L24.7547 19.8631L24.4393 20.0785L24.5641 20.4394L28.2005 30.9588L18.6357 24.427L18.3537 24.2344L18.0717 24.427L8.50689 30.9588L12.1433 20.4394L12.268 20.0785L11.9527 19.8631L2.4762 13.3916H14.2234H14.5796L14.6959 13.055L18.3537 2.47375Z"
                stroke={sColor}
              />
            </svg>
          ));
        return null;
      })}
      {rating && (
        <Typography type="subtitle2" color={color} className="Stars--rating">
          {stars}
        </Typography>
      )}
    </div>
  );
}
