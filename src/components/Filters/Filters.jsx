import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FiltersCheckbox from "../FiltersCheckbox";
import FiltersRating from "../FiltersRating";
import FiltersPrice from "../FiltersPrice";
import "./Filters.css";

export default function Filters({ filters, filtersHandler, className }) {
  const classes = classNames({
    "Filters--container": true,
    [className]: className
  });

  return (
    <div className={classes}>
      {filters.areas && (
        <FiltersCheckbox
          type="areas"
          filters={filters}
          filtersHandler={filtersHandler}
        />
      )}
      {filters.organizers && (
        <FiltersCheckbox
          type="organizers"
          filters={filters}
          filtersHandler={filtersHandler}
        />
      )}
      {filters.price && (
        <FiltersPrice filters={filters} filtersHandler={filtersHandler} />
      )}
      {filters.rating && (
        <FiltersRating filters={filters} filtersHandler={filtersHandler} />
      )}
      {filters.courtTypes && (
        <FiltersCheckbox
          type="courtTypes"
          filters={filters}
          filtersHandler={filtersHandler}
        />
      )}
      {filters.offers && (
        <FiltersCheckbox
          type="offers"
          filters={filters}
          filtersHandler={filtersHandler}
        />
      )}
    </div>
  );
}

Filters.defaultProps = {
  className: undefined
};

Filters.propTypes = {
  className: PropTypes.string
};
