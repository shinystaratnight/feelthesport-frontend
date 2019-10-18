import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ArrowUp from "../../assets/images/icons/arrow-up.png";
import ArrowDown from "../../assets/images/icons/arrow-down.png";
import "./FiltersHeader.css";

export default function FiltersHeader({
  text,
  open,
  setOpen,
  className,
  ...props
}) {
  const classes = classNames({
    "FiltersHeader--container": true,
    [className]: className
  });

  return (
    <div className={classes} {...props}>
      <h3 className="fnt-button2 fgc-black">{text}</h3>
      <img
        src={open ? ArrowUp : ArrowDown}
        alt={open ? "arrow up" : "arrow down"}
        onClick={() => setOpen(!open)}
        className="FiltersHeader--arrow"
      />
    </div>
  );
}

FiltersHeader.defaultProps = {
  className: undefined
};

FiltersHeader.propTypes = {
  className: PropTypes.string
};
