import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Spinner.css";

export default function Spinner({ className, ...props }) {
  const classes = classNames({
    "Spinner--container": true,
    [className]: className
  });

  return (
    <div className={classes} {...props}>
      <div className="Spinner--flower-spinner">
        <div className="Spinner--dots-container">
          <div className="Spinner--bigger-dot">
            <div className="Spinner--smaller-dot" />
          </div>
        </div>
      </div>
    </div>
  );
}

Spinner.defaultProps = {
  className: undefined
};

Spinner.propTypes = {
  className: PropTypes.string
};
