/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./RadioButton.css";

export default function RadioButton({
  className,
  radioClassName,
  labelClassName,
  children,
  ...radioProps
}) {
  const classes = classNames({
    RadioButton: true,
    [className]: className
  });

  return (
    <label className={classes}>
      <input type="radio" className={radioClassName} {...radioProps} />
      <span className={labelClassName}>{children}</span>
    </label>
  );
}

RadioButton.defaultProps = {
  className: "",
  radioClassName: undefined,
  labelClassName: "fnt-text2 fgc-black"
};

RadioButton.propTypes = {
  className: PropTypes.string,
  radioClassName: PropTypes.string,
  labelClassName: PropTypes.string
};
