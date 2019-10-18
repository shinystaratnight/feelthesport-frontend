import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Input.css";

export default function Input({
  containerClass,
  inputClass,
  labelPosition,
  type,
  children,
  ...inputProps
}) {
  const containerClasses = classNames({
    "Input--container": true,
    [containerClass]: containerClass,
    "Input--label--top": labelPosition === "top" && children,
    "Input--label--right": labelPosition === "right" && children,
    "Input--label--bottom": labelPosition === "bottom" && children,
    "Input--label--left": labelPosition === "left" && children
  });

  return (
    <div className={containerClasses}>
      {children && !children.props ? (
        <p className="fnt-text1 fgc-gray">{children}</p>
      ) : (
        children
      )}
      {type === "textarea" ? (
        <textarea cols="30" rows="10" className={inputClass} {...inputProps} />
      ) : (
        <input type={type} className={inputClass} {...inputProps} />
      )}
    </div>
  );
}

Input.defaultProps = {
  containerClass: undefined,
  inputClass: undefined,
  labelPosition: "left",
  type: "text"
};

Input.propTypes = {
  containerClass: PropTypes.string,
  inputClass: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  type: PropTypes.oneOf([
    "text",
    "date",
    "password",
    "email",
    "phone",
    "textarea"
  ])
};
