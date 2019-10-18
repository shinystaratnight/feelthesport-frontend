import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./AccountHistoryNav.css";

export default function AccountHistoryNav({
  activeTab,
  tabHandler,
  className,
  ...props
}) {
  const classes = classNames({
    "AccountHistoryNav--container": true,
    [className]: className
  });

  return (
    <div className={classes} {...props}>
      <p
        className={`fnt-text1 ${
          activeTab === "booking" ? "fgc-lightOrange" : "fgc-gray"
        }`}
        onClick={() => tabHandler("booking")}
      >
        Booking
      </p>
      <p
        className={`fnt-text1 ${
          activeTab === "event" ? "fgc-lightOrange" : "fgc-gray"
        }`}
        onClick={() => tabHandler("event")}
      >
        Event
      </p>
      <p
        className={`fnt-text1 ${
          activeTab === "training" ? "fgc-lightOrange" : "fgc-gray"
        }`}
        onClick={() => tabHandler("training")}
      >
        Training
      </p>
      <p
        className={`fnt-text1 ${
          activeTab === "payment" ? "fgc-lightOrange" : "fgc-gray"
        }`}
        onClick={() => tabHandler("payment")}
      >
        Payment
      </p>
    </div>
  );
}

AccountHistoryNav.defaultProps = {
  className: undefined
};

AccountHistoryNav.propTypes = {
  className: PropTypes.string
};
