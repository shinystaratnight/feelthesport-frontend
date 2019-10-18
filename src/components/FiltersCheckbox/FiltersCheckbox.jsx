import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import FiltersHeader from "../FiltersHeader";
import Checkbox from "../Checkbox";

import "./FiltersCheckbox.css";

export default function FiltersCheckbox({ type, filters, filtersHandler }) {
  const [open, setOpen] = useState(true);
  const [numOfOptions, setNumOfOptions] = useState(4);

  const showMoreHandle = () => {
    if (filters[type].options.length <= numOfOptions) setNumOfOptions(4);
    else setNumOfOptions(prevNumOfOptions => prevNumOfOptions + 4);
  };

  let category = "";
  if (type === "areas") category = "Area";
  else if (type === "courtTypes") category = "Court Type";
  else if (type === "offers") category = "Offers";
  else if (type === "organizers") category = "Organizers";
  else category = "Category";

  return (
    <div className="FiltersCheckbox--container">
      <FiltersHeader text={category} open={open} setOpen={setOpen} />
      <AnimateHeight duration={500} height={open ? "auto" : 0}>
        <div className="FiltersCheckbox--list">
          {filters[type].options.slice(0, numOfOptions).map((item, index) => (
            <Checkbox
              key={index}
              name={category}
              value={!!filters[type].selected}
              checked={!!filters[type].selected}
              onChange={() => filtersHandler(type, item)}
            >
              {item}
            </Checkbox>
          ))}
        </div>
        {filters[type].options.length >= 4 && (
          <p className="fnt-text2 fgc-darkOrange" onClick={showMoreHandle}>
            {filters[type].options.length <= numOfOptions
              ? "Hide"
              : "Show More"}
          </p>
        )}
      </AnimateHeight>
    </div>
  );
}
