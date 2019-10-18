import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./AccountNav.css";

export default function AccountNav({ activeTab, className }) {
  const classes = classNames({
    "AccountNav--container": true,
    [className]: className
  });

  const TabArrow = () => (
    <svg
      width="19"
      height="28"
      viewBox="0 0 19 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.77539 2.43457L17.25 14.293L1.77539 26.1514"
        stroke="#FC9B04"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <ul className={classes}>
      <li>
        <Link
          to="/account/profile"
          className={`fnt-noline fnt-subtitle4 fgc-black${
            activeTab === "profile" ? " fnt-bold" : ""
          }`}
        >
          <span>User Profile</span>
        </Link>
        {activeTab === "profile" && <TabArrow />}
      </li>
      <li>
        <Link
          to="/account/points"
          className={`fnt-noline fnt-subtitle4 fgc-black${
            activeTab === "points" ? " fnt-bold" : ""
          }`}
        >
          <span>FTS Play Points</span>
        </Link>
        {activeTab === "points" && <TabArrow />}
      </li>
      <li>
        <Link
          to="/account/history"
          className={`fnt-noline fnt-subtitle4 fgc-black${
            activeTab === "history" ? " fnt-bold" : ""
          }`}
        >
          <span>History</span>
        </Link>
        {activeTab === "history" && <TabArrow />}
      </li>
      <li>
        <Link
          to="/account/clubs"
          className={`fnt-noline fnt-subtitle4 fgc-black${
            activeTab === "clubs" ? " fnt-bold" : ""
          }`}
        >
          <span>Clubs</span>
        </Link>
        {activeTab === "clubs" && <TabArrow />}
      </li>
      <li>
        <Link
          to="/account/refer"
          className={`fnt-noline fnt-subtitle4 fgc-black${
            activeTab === "refer" ? " fnt-bold" : ""
          }`}
        >
          <span>Refer and Earn</span>
        </Link>
        {activeTab === "refer" && <TabArrow />}
      </li>
      <li>
        <Link
          to="/account/support"
          className={`fnt-noline fnt-subtitle4 fgc-black${
            activeTab === "support" ? " fnt-bold" : ""
          }`}
        >
          <span>Support</span>
        </Link>
        {activeTab === "support" && <TabArrow />}
      </li>
      <li>
        <Link
          to="/account/terms"
          className={`fnt-noline fnt-subtitle4 fgc-black${
            activeTab === "terms" ? " fnt-bold" : ""
          }`}
        >
          <span>Terms and Policies</span>
        </Link>
        {activeTab === "terms" && <TabArrow />}
      </li>
    </ul>
  );
}

AccountNav.defaultProps = {
  className: undefined
};

AccountNav.propTypes = {
  className: PropTypes.string
};
