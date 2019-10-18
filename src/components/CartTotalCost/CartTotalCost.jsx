import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../helpers/scrollToTop";
import "./CartTotalCost.css";

export default function CartTotalCost({ cost, getOrderDispatcher }) {
  return (
    <div className="CartTotalCost--container">
      <p className="fnt-button2 fgc-lightOrange">Back</p>
      <div>
        <h3 className="fnt-subtitle2 fgc-black">
          Total Cost:{" "}
          <span className="fgc-darkOrange fnt-bold">{`₹${cost}`}</span>
        </h3>
        {cost > 0 && (<button
          type="button"
          className="btn btn1 fnt-button2 bgc-white fgc-lightOrange brdc-lightOrange"
          onClick={() => {
            scrollToTop();
            getOrderDispatcher();
          }}
        >
          {cost === 0 ? "Confirm" : "Proceed to pay"}
        </button>)}

      </div>
      <Link to="/" className="fnt-text1 fgc-darkOrange fnt-noline">
        Explore more
      </Link>
    </div>
  );
}
