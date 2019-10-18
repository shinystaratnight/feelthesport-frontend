import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./AccountHistoryTabRow.css";

export default function AccountHistoryTabRow({ className, ...props }) {
  const classes = classNames({
    "AccountHistoryTabRow--container": true,
    [className]: className
  });

  return (
    <div className={classes} {...props}>
      <p className="fnt-text1 fgc-black">1 Name of Arena</p>
      <div>
        <div>
          <p className="fnt-text2 fgc-gray">
            Mon, 01 oct 2018{" "}
            <span className="fgc-darkOrange">10:00am-11:00am</span>
          </p>
          <p className="fnt-text2 fgc-gray">
            Booking ID: <span className="fgc-blue">#123654876223265</span>
          </p>
          <p className="fnt-text2 fgc-gray">
            Transaction ID: <span className="fgc-darkOrange">54876223265</span>
          </p>
          <p className="fnt-text2 fgc-gray">
            Payment method: <span className="fgc-darkOrange">visa</span>
          </p>
          <p className="fnt-text2 fgc-gray">
            Event details: <span className="fgc-lightOrange">Show</span>
          </p>
        </div>
        <div>
          <p className="fnt-text2 fgc-gray">
            Status: <span className="fgc-darkOrange">Active</span>
          </p>
          <p className="fnt-text2 fgc-gray">
            Coupon code: <span className="fgc-darkOrange">ANVSRD</span>
          </p>
          <p className="fnt-text2 fgc-gray">
            Play points Credit: <span className="fgc-darkOrange">-100</span>
          </p>
          <p className="fnt-text2 fgc-gray">
            Play points Debit: <span className="fgc-darkOrange">+200</span>
          </p>
          <p className="fnt-text2 fgc-black">
            Total Cost: <span className="fgc-darkOrange">537</span>
          </p>
        </div>
      </div>
      <div>
        <p className="fnt-text1 fgc-red fnt-bold">Cancel</p>
        <p className="fnt-text1 fgc-lightOrange fnt-bold">Rebook</p>
        <p className="fnt-text1 fgc-lightOrange fnt-bold">Rate us</p>
        <p className="fnt-text1 fgc-lightOrange fnt-bold">Support</p>
      </div>
    </div>
  );
}

AccountHistoryTabRow.defaultProps = {
  className: undefined
};

AccountHistoryTabRow.propTypes = {
  className: PropTypes.string
};
