/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Checkbox.css";

export default function Checkbox({
  className,
  checkboxClassName,
  labelClassName,
  children,
  ...checkboxProps
}) {
  const classes = classNames({
    Checkbox: true,
    [className]: className
  });

  return (
    <label className={classes}>
      <input type="checkbox" className={checkboxClassName} {...checkboxProps} />
      <span className={labelClassName}>{children}</span>
    </label>
  );
}

Checkbox.defaultProps = {
  className: "",
  checkboxClassName: undefined,
  labelClassName: "fnt-text2 fgc-black"
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checkboxClassName: PropTypes.string,
  labelClassName: PropTypes.string
};
