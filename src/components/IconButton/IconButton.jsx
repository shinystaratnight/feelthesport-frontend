/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./IconButton.css";

export default function IconButton({ children, className, ...props }) {
  const classes = classNames({
    IconButton: true,
    [className]: className.length !== 0
  });

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  className: ""
};

IconButton.propTypes = {
  className: PropTypes.string
};
