import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Select from "react-select";
import "./SelectCity.css";

export default function SelectCity({
  loading,
  error,
  cities,
  setUserCity,
  className,
  userSelectedCity,
  ...props
}) {
  const [selectedOption, setSelectedOption] = useState(userSelectedCity);

  const classes = classNames({
    "SelectCity--container": true,
    [className]: className
  });

  const OrangeOffice = () => (
    <svg
      width="32"
      height="51"
      viewBox="0 0 32 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.01959 0.977539H27.3779C29.4501 0.977539 31.1455 2.72478 31.1455 4.8603V50.6759H21.4439V41.315H9.95361V50.6759H0.251953V4.8603C0.251953 2.72478 1.94739 0.977539 4.01959 0.977539ZM6.28017 10.2529H9.67103V4.52689H6.28017V10.2529ZM14.0038 10.2529H17.3947V4.52689H14.0038V10.2529ZM21.7264 10.2529H25.1173V4.52689H21.7264V10.2529ZM25.1173 14.7181H21.7264V20.3481H25.1173V14.7181ZM17.3947 14.7181H14.0038V20.3481H17.3947V14.7181ZM9.67103 14.7181H6.28017V20.3481H9.67103V14.7181ZM25.1173 24.8133H21.7264V30.5404H25.1173V24.8133ZM17.3947 24.8133H14.0038V30.5404H17.3947V24.8133ZM9.67103 24.8133H6.28017V30.5404H9.67103V24.8133Z"
        fill="#FC9B04"
      />
    </svg>
  );

  const handleChange = option => {
    setSelectedOption(option);
  };
  const renderItems = () => {
    return cities.map((city, index) => {
      let sClass = "city-select-box ";
          if(city === selectedOption) sClass +=' its_selected';
          return <span  key={index}  className={sClass} onClick={handleChange.bind(this,city)}>{city}</span>
      });
  };

  return (
    <div className={classes} {...props}>
      <OrangeOffice />
      <p className="fnt-text2 fgc-lightOrange fnt-bold">Select City</p>
      <div className="SelectCity--selection">
          {renderItems()}
      </div>
      <button
        type="button"
        className="btn btn4 fnt-button3 bgc-lightOrange fgc-white"
        onClick={() => setUserCity(selectedOption)}
      >
        Submit
      </button>
    </div>
  );
}

SelectCity.defaultProps = {
  className: undefined
};

SelectCity.propTypes = {
  className: PropTypes.string
};
