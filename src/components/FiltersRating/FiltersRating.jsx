import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import StarRating from "react-rating";
import FiltersHeader from "../FiltersHeader";
import StarFilled from "../../assets/images/star-filled.svg";
import StarEmpty from "../../assets/images/star-empty.svg";
import "./FiltersRating.css";

export default function FiltersRating({ filters, filtersHandler }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="FiltersRating--container">
      <FiltersHeader text="Rating" open={open} setOpen={setOpen} />
      <AnimateHeight duration={500} height={open ? "auto" : 0}>
        <StarRating
          initialRating={filters.rating.selected}
          onChange={r => filtersHandler("rating", r)}
          onClick={r => {
            if (filters.rating.selected === r) {
              filtersHandler("rating", 0);
            }
          }}
          name="rating"
          emptySymbol={
            <img
              src={StarEmpty}
              alt="empty star"
              className="ReviewArena--star"
            />
          }
          fullSymbol={
            <img
              src={StarFilled}
              alt="filled star"
              className="ReviewArena--star"
            />
          }
        />
      </AnimateHeight>
    </div>
  );
}
