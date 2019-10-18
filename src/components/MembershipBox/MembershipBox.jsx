import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./MembershipBox.css";

const ArrowUp = ({ clickHandler }) => (
  <svg
    width="34"
    height="19"
    viewBox="0 0 34 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={clickHandler}
    className="SubscriptionTable--arrow"
  >
    <path
      d="M2.31348 16.8702L17.0303 2.15332L31.7471 16.8702"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDown = ({ clickHandler }) => (
  <svg
    width="34"
    height="18"
    viewBox="0 0 34 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={clickHandler}
    className="SubscriptionTable--arrow"
  >
    <path
      d="M31.748 1.72946L17.0312 16.4463L2.31439 1.72946"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function MembershipBox({ className, ...props }) {
  const [open, setOpen] = useState(false);

  const classes = classNames({
    "MembershipBox--container": true,
    [className]: className
  });

  return (
    <div className={classes} {...props}>
      <div className="MembershipBox--title">
        <p className="fnt-button2 fgc-white fnt-bold">Membership1</p>
        <p
          className="fnt-button2 fgc-white fnt-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <ArrowUp clickHandler={setOpen} />
          ) : (
            <ArrowDown clickHandler={setOpen} />
          )}
        </p>
      </div>
      <AnimateHeight duration={500} height={open ? "auto" : 0}>
        <p className="fnt-subtitle4 fgc-gray">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud exerci tation ullamcorper suscipit.
        </p>
        <ul className="MembershipBox--membershipList">
          <li className="MembershipBox--membership">
            <p className="fnt-subtitle2 fgc-gray">1 year</p>
            <p className="fnt-subtitle2 fgc-gray">Rs 5000</p>
            <div />
            <button
              type="button"
              className="btn btn1 fnt-button2 bgc-darkOrange fgc-white fnt-bold"
            >
              BUY
            </button>
          </li>
          <li className="MembershipBox--membership">
            <p className="fnt-subtitle2 fgc-gray">6 mon</p>
            <p className="fnt-subtitle2 fgc-gray">Rs 2300</p>
            <div />
            <button
              type="button"
              className="btn btn1 fnt-button2 bgc-darkOrange fgc-white fnt-bold"
            >
              BUY
            </button>
          </li>
          <li className="MembershipBox--membership">
            <p className="fnt-subtitle2 fgc-gray">1 mon</p>
            <p className="fnt-subtitle2 fgc-gray">Rs 200</p>
            <div />
            <button
              type="button"
              className="btn btn1 fnt-button2 bgc-darkOrange fgc-white fnt-bold"
            >
              BUY
            </button>
          </li>
        </ul>
      </AnimateHeight>
    </div>
  );
}

MembershipBox.defaultProps = {
  className: undefined
};

MembershipBox.propTypes = {
  className: PropTypes.string
};
