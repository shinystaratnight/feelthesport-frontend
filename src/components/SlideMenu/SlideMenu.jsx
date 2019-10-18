import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./SlideMenu.css";

export default function SlideMenu({
  isOpen,
  handleClose,
  children,
  className,
  ...props
}) {
  const cClassName = className !== undefined ? ` ${className}` : "";
  return (
    <div className={`SlideMenu--container${cClassName}`} {...props}>
      <Menu
        isOpen={isOpen}
        customBurgerIcon={false}
        customCrossIcon={false}
        disableAutoFocus
        width={320}
        className="SlideMenu"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
          xmlSpace="preserve"
          className="SlideMenu--closeButton"
          onClick={handleClose}
        >
          <g>
            <path
              fill="#f05327"
              d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M722.7,661.6l-61.1,61.1L500,561.1L338.3,722.8l-61.1-61.1L438.9,500L277.3,338.3l61.1-61.1L500,438.9l161.7-161.7l61.1,61.1L561.1,500L722.7,661.6z"
            />
          </g>
        </svg>
        {children}
      </Menu>
    </div>
  );
}
