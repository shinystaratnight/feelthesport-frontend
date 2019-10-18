import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import AnimateHeight from "react-animate-height";
import PlaceholderAvatar from "../../assets/images/placeholder_avatar.png";
import "./HeaderUserMenu.css";

// const Arrow = ({ open, clickHandler }) => (
const Arrow = ({ open }) => (
  <svg
    width="22"
    height="14"
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // onClick={() => clickHandler(!open)}
    className={open ? "HeaderUserMenu--arrowUp" : "HeaderUserMenu--arrowDown"}
  >
    <path
      d="M1.26758 12.0322C4.99338 7.87173 10.8081 1.37862 10.8081 1.37862L20.3486 12.0322"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeaderUserMenu({
  className,
  username,
  avatar,
  logoutHandler
}) {
  const [open, setOpen] = useState(false);
  const classes = classNames({
    "HeaderUserMenu--container": true,
    [className]: className
  });

  return (
    <div className={classes}>
      <div className="HeaderUserMenu--top" onClick={() => setOpen(!open)}>
        <img src={avatar || PlaceholderAvatar} alt="avatar" />
        <p className="fnt-text1 fgc-white">
          Hi,{" "}
          {username.length > 10
            ? username.slice(0, 10).concat("...")
            : username}
        </p>
        <Arrow open={open} />
        {/* <Arrow open={open} clickHandler={setOpen} /> */}
      </div>
      <div className="HeaderUserMenu--bottom">
        <AnimateHeight duration={500} height={open ? "auto" : 0}>
          <ul className="HeaderUserMenu--list">
            <li onClick={() => setOpen(false)}>
              <Link
                to="/account/profile"
                className="fnt-text1 fgc-white fnt-bold HeaderUserMenu--listItem fnt-noline HeaderUserMenu--link"
              >
                User Profile
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/account/points"
                className="fnt-text1 fgc-white fnt-bold HeaderUserMenu--listItem fnt-noline HeaderUserMenu--link"
              >
                FTS Play Points
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/account/history"
                className="fnt-text1 fgc-white fnt-bold HeaderUserMenu--listItem fnt-noline HeaderUserMenu--link"
              >
                History
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/account/clubs"
                className="fnt-text1 fgc-white fnt-bold HeaderUserMenu--listItem fnt-noline HeaderUserMenu--link"
              >
                Clubs
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/account/refer"
                className="fnt-text1 fgc-white fnt-bold HeaderUserMenu--listItem fnt-noline HeaderUserMenu--link"
              >
                Refer and Earn
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/account/support"
                className="fnt-text1 fgc-white fnt-bold HeaderUserMenu--listItem fnt-noline HeaderUserMenu--link"
              >
                Support
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/account/terms"
                className="fnt-text1 fgc-white fnt-bold HeaderUserMenu--listItem fnt-noline HeaderUserMenu--link"
              >
                Terms and Policies
              </Link>
            </li>
            <li
              className="fnt-text1 fgc-white fnt-bold HeaderUserMenu--listItem"
              onClick={logoutHandler}
            >
              Logout
            </li>
          </ul>
        </AnimateHeight>
      </div>
    </div>
  );
}
