import React from "react";
import classNames from "classnames";
import "./SortBy.css";

export default function SortBy({ filters, filtersHandler, className }) {
  const classes = classNames({
    "SortBy--container": true,
    [className]: className
  });

  return (
    <div className={classes}>
      <p className="fnt-text1 fgc-black">Sort by:</p>
      {filters.sortBy.options.map((sortBy, index) => (
        <p
          className={`fnt-text1 ${
            filters.sortBy.selected === sortBy ? "fgc-darkOrange" : "fgc-black"
          }`}
          onClick={() => filtersHandler("sortBy", sortBy)}
          key={index}
        >
          {sortBy}
        </p>
      ))}
    </div>
  );
}
