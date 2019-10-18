import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./AvailableDays.css";

export default function AvailableDays({ days, className }) {
  const classes = classNames({
    "AvailableDays--container": true,
    [className]: className
  });

  const sunClasses = classNames({
    "fnt-text1 fnt-bold": true,
    "fgc-lightOrange": days.includes("sun"),
    "fgc-gray": !days.includes("sun")
  });
  const monClasses = classNames({
    "fnt-text1 fnt-bold": true,
    "fgc-lightOrange": days.includes("mon"),
    "fgc-gray": !days.includes("mon")
  });
  const tueClasses = classNames({
    "fnt-text1 fnt-bold": true,
    "fgc-lightOrange": days.includes("tue"),
    "fgc-gray": !days.includes("tue")
  });
  const wedClasses = classNames({
    "fnt-text1 fnt-bold": true,
    "fgc-lightOrange": days.includes("wed"),
    "fgc-gray": !days.includes("wed")
  });
  const thuClasses = classNames({
    "fnt-text1 fnt-bold": true,
    "fgc-lightOrange": days.includes("thu"),
    "fgc-gray": !days.includes("thu")
  });
  const friClasses = classNames({
    "fnt-text1 fnt-bold": true,
    "fgc-lightOrange": days.includes("fri"),
    "fgc-gray": !days.includes("fri")
  });
  const satClasses = classNames({
    "fnt-text1 fnt-bold": true,
    "fgc-lightOrange": days.includes("sat"),
    "fgc-gray": !days.includes("sat")
  });

  return (
    <div className={classes}>
      <p className={sunClasses}>S</p>
      <p className={monClasses}>M</p>
      <p className={tueClasses}>T</p>
      <p className={wedClasses}>W</p>
      <p className={thuClasses}>T</p>
      <p className={friClasses}>F</p>
      <p className={satClasses}>S</p>
    </div>
  );
}

AvailableDays.defaultProps = {
  className: undefined
};

AvailableDays.propTypes = {
  className: PropTypes.string,
  days: PropTypes.arrayOf(
    PropTypes.oneOf(["sun", "mon", "tue", "wed", "thu", "fri", "sat"])
      .isRequired
  ).isRequired
};
