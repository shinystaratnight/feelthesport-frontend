import React from "react";
import "./GetDirections.css";

const Icon = () => (
  <svg
    width="26"
    height="34"
    viewBox="0 0 26 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.5572 12.4726C25.5572 5.9567 19.9493 0.666016 13.0428 0.666016C6.1362 0.666016 0.52832 5.9567 0.52832 12.4726C0.52832 17.819 4.48335 22.6084 9.91415 23.945L10.9767 26.6182C8.02518 26.7853 3.06663 27.4536 3.06663 29.7926C3.06663 32.967 12.0392 33.0784 13.1018 33.0784C14.1643 33.0784 23.137 32.967 23.137 29.7926C23.137 27.3979 18.1194 26.7853 15.1679 26.6182L16.1714 24.0007C21.6022 22.6641 25.5572 17.8747 25.5572 12.4726ZM17.1159 12.4726C17.1159 14.5889 15.2859 16.3153 13.0428 16.3153C10.7996 16.3153 8.96966 14.5889 8.96966 12.4726C8.96966 10.3563 10.7996 8.62988 13.0428 8.62988C15.2859 8.62988 17.1159 10.3563 17.1159 12.4726ZM21.0119 29.7926C20.4216 30.3495 17.5291 31.1849 13.0428 31.1849C8.61548 31.1849 5.72299 30.3495 5.07366 29.7926C5.60493 29.2914 8.02518 28.5674 11.6851 28.456L12.3344 30.0711C12.4525 30.3495 12.6886 30.5166 13.0428 30.5166C13.3379 30.5166 13.6331 30.3495 13.7511 30.0711L14.3414 28.456C18.0603 28.5674 20.4216 29.2914 21.0119 29.7926Z"
      fill="#3869E8"
    />
  </svg>
);

export default function GetDirections() {
  return (
    <div className="GetDirections--container">
      <Icon />
      <p className="fnt-text1 fgc-blue">Get Directions</p>
    </div>
  );
}
