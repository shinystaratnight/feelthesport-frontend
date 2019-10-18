import React from "react";
import classNames from "classnames";
import "./PhoneEmail.css";

const Email = ({ color }) => (
  <svg
    width="30"
    height="23"
    viewBox="0 0 30 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0515 14.8332C14.569 14.8332 14.1445 14.6605 13.2375 14.2161L0.540039 7.48642V20.3433C0.540039 21.3535 1.35631 22.18 2.35397 22.18H27.749C28.7466 22.18 29.5629 21.3535 29.5629 20.3433V7.48642L16.8654 14.2161C15.9584 14.6605 15.534 14.8332 15.0515 14.8332ZM27.749 0.139648H2.35397C1.35631 0.139648 0.540039 0.96616 0.540039 1.97634V3.36855L15.0515 11.0918L29.5629 3.36855V1.97634C29.5629 0.96616 28.7466 0.139648 27.749 0.139648Z"
      fill={color === "black" ? "#19191b" : "#fff"}
    />
  </svg>
);

const Phone = ({ color }) => (
  <svg
    width="30"
    height="35"
    viewBox="0 0 30 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.75686 3.45067C5.52946 4.30767 1.9954 8.95666 8.20111 19.4979C14.7383 30.6021 21.1941 30.1448 22.5033 29.3917L18.0889 22.1106C16.9987 22.7099 16.1087 21.7242 14.4757 19.5786C13.3952 18.1588 12.2136 16.3156 11.2998 14.3402C10.6586 12.9541 10.1474 11.5381 11.289 10.9104L6.75686 3.45067Z"
      fill={color === "black" ? "#19191b" : "#fff"}
    />
    <path
      d="M28.3416 28.223C28.9238 27.9035 29.0729 27.2323 28.7721 26.737L28.7738 26.7309C28.7738 26.7309 24.7964 20.192 24.794 20.188C24.4788 19.6691 23.7789 19.5077 23.2304 19.8087L20.6787 21.209L25.7898 29.6232C25.7898 29.6232 28.3375 28.2301 28.3384 28.227L28.3416 28.223Z"
      fill={color === "black" ? "#19191b" : "#fff"}
    />
    <path
      d="M16.1915 9.75101C16.7738 9.4315 16.9229 8.76038 16.622 8.26507L16.6238 8.25892C16.6238 8.25892 12.5317 1.53133 12.5293 1.52737C12.2141 1.00848 11.5143 0.847085 10.9658 1.14807L8.41406 2.54834L13.6398 11.1513C13.6398 11.1513 16.1875 9.7581 16.1884 9.755L16.1915 9.75101Z"
      fill={color === "black" ? "#19191b" : "#fff"}
    />
  </svg>
);

export default function PhoneEmail({ type, color, children, className }) {
  const classes = classNames({
    "PhoneEmail--container": true,
    [className]: className
  });
  const protocol = type === "email" ? "mailto:" : "tel:";

  return (
    <div className={classes}>
      {type === "email" ? <Email color={color} /> : <Phone color={color} />}
      <a
        href={`${protocol}${children}`}
        className={`fnt-text1 ${color === "black" ? "fgc-black" : "fgc-white"}`}
      >
        {children}
      </a>
    </div>
  );
}
