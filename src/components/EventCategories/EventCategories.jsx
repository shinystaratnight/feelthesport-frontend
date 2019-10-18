import React from "react";
import "./EventCategories.css";

export default function EventCategories({ categories, registrationHandler }) {
  return (
    <div className="EventCategories--container">
      {categories.map(({ id, name, price, description }, index) => (
        <div key={index} className="EventCategories--category">
          <div>
            <h4 className="fnt-subtitle2 fgc-black">{name}</h4>
            <h4 className="fnt-subtitle2 fgc-black">{price}</h4>
            <button
              type="button"
              className="btn btn4 fnt-button4 bgc-lightOrange fgc-white"
              onClick={() => registrationHandler(id, name, price, description)}
            >
              Register
            </button>
          </div>
          <div>
            <p className="fnt-text1 fgc-gray">{description}</p>
            <button
              type="button"
              className="btn btn4 fnt-button4 bgc-lightOrange fgc-white"
              onClick={() => registrationHandler(id, name, price, description)}
            >
              Register
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

EventCategories.defaultProps = {
  items: []
};
