import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Stars2.css";

export default function Stars2({ star, className, rating }) {
  const classes = classNames({
    "Stars2--container": true,
    [className]: className
  });

  return (
    <div className={classes}>
      <p className="fnt-subtitle2 fgc-white">{rating}</p>
      {star && (
        <svg
          width="36"
          height="33"
          viewBox="0 0 36 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.1818 2.47375L21.8396 13.055L21.9559 13.3916H22.3121H34.0593L24.5828 19.8631L24.2675 20.0785L24.3922 20.4394L28.0286 30.9588L18.4638 24.427L18.1818 24.2344L17.8998 24.427L8.33502 30.9588L11.9714 20.4394L12.0962 20.0785L11.7808 19.8631L2.30433 13.3916H14.0515H14.4077L14.5241 13.055L18.1818 2.47375Z"
            fill="white"
            stroke="white"
          />
        </svg>
      )}
    </div>
  );
}

Stars2.defaultProps = {
  className: undefined
};

Stars2.propTypes = {
  className: PropTypes.string
};
