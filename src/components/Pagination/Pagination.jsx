import React from "react";
import classNames from "classnames";
import "./Pagination.css";

const NextArrow = ({ ...props }) => (
  <svg
    width="19"
    height="36"
    viewBox="0 0 19 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.23828 2.30908C7.92487 8.40643 16.7997 17.9223 16.7997 17.9223L2.23828 33.5356"
      stroke="#FC9B04"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const PrevArrow = ({ ...props }) => (
  <svg
    width="20"
    height="36"
    viewBox="0 0 20 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.0938 33.5356C11.4072 27.4383 2.53232 17.9224 2.53232 17.9224L17.0938 2.30916"
      stroke="#FC9B04"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  numOfShownPages,
  pageHandler,
  className
}) {
  const classes = classNames({
    "Pagination--container": true,
    [className]: className
  });

  const numOfPages = Math.min(
    Math.floor(totalItems / itemsPerPage) +
      (totalItems % itemsPerPage === 0 ? 0 : 1),
    numOfShownPages
  );

  if (totalItems === 0) return <></>;

  return (
    <ul className={classes}>
      {currentPage !== 1 ? (
        <PrevArrow
          className="Pagination--arrow"
          onClick={() => pageHandler(currentPage - 1)}
        />
      ) : (
        <div className="Pagination--arrowFiller" />
      )}
      {new Array(numOfPages).fill(0).map((_, index) => (
        <li
          key={index}
          className={`fnt-subtitle4 fnt-bold fgc-lightOrange${
            currentPage === index + 1 ? " Pagination--currentPage" : ""
          }`}
          onClick={
            currentPage === index + 1 ? undefined : () => pageHandler(index + 1)
          }
        >
          {index + 1}
        </li>
      ))}
      {currentPage !== numOfPages ? (
        <NextArrow
          className="Pagination--arrow"
          onClick={() => pageHandler(currentPage + 1)}
        />
      ) : (
        <div className="Pagination--arrowFiller" />
      )}
    </ul>
  );
}
