/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { Range } from "rc-slider";
import AnimateHeight from "react-animate-height";
import useDebounce from "../../helpers/useDebounce";
import FiltersHeader from "../FiltersHeader";
import "rc-slider/assets/index.css";
import "./FiltersPrice.css";

export default function FiltersPrice({ filters, filtersHandler }) {
  const [open, setOpen] = useState(true);
  const [userActed, setUserActed] = useState(false);
  const [sliderValue, setSliderValue] = useState([0, 5000]);
  const [inputValue, setInputValue] = useState([0, 5000]);
  const debouncedInput = useDebounce(inputValue, 250);
  const debouncedPrice = useDebounce(sliderValue, 500);

  useEffect(() => {
    if (debouncedInput) {
      setSliderValue(inputValue);
    }
  }, [debouncedInput]);

  useEffect(() => {
    if (debouncedPrice && userActed) {
      filtersHandler("price", sliderValue);
    }
  }, [debouncedPrice]);

  const onSliderChange = value => {
    if (!userActed) setUserActed(true);
    setSliderValue(value);
    setInputValue(value);
  };

  const fromInputHandler = e => {
    if (!userActed) setUserActed(true);
    const v = e.target.value;
    if (isNaN(v) || v.includes(".")) return;
    setInputValue([Number(v), inputValue[1]]);
  };

  const toInputHandler = e => {
    if (!userActed) setUserActed(true);
    const v = e.target.value;
    if (isNaN(v) || v.includes(".")) return;
    setInputValue([inputValue[0], Number(v)]);
  };

  return (
    <div className="FiltersPrice--container">
      <FiltersHeader text="Price" open={open} setOpen={setOpen} />
      <AnimateHeight duration={500} height={open ? "auto" : 0}>
        <div>
          <div className="FiltersPrice--inputs">
            <div>
              <input
                type="text"
                maxLength="4"
                value={inputValue[0]}
                onChange={fromInputHandler}
              />
              <p className="fnt-text2 fgc-black FiltersPrice--fromto">from</p>
            </div>

            <div>
              <input
                type="text"
                maxLength="4"
                value={inputValue[1]}
                onChange={toInputHandler}
              />
              <p className="fnt-text2 fgc-black FiltersPrice--fromto">from</p>
            </div>
          </div>
          <Range
            allowCross={false}
            value={sliderValue}
            min={0}
            max={5000}
            step={1}
            trackStyle={[{ backgroundColor: "#F05327" }]}
            handleStyle={[
              {
                height: 22,
                width: 22,
                marginLeft: -14,
                marginTop: -9,
                border: "2px solid #C4C4C4",
                backgroundColor: "#fff"
              },
              {
                height: 22,
                width: 22,
                marginLeft: -14,
                marginTop: -9,
                border: "2px solid #C4C4C4",
                backgroundColor: "#fff"
              }
            ]}
            onChange={onSliderChange}
            className="FiltersPrice--range"
          />
        </div>
      </AnimateHeight>
    </div>
  );
}
