import React from "react";
import PropTypes from "prop-types";
import "./AboutStats.css";

export default function AboutStats({
  bookingCount,
  membershipCount,
  eventCount
}) {
  return (
    <div className="AboutStats--container">
      <div>
        <p className="fnt-title1 fgc-lightOrange">{bookingCount}</p>
        <p className="fnt-button1 fgc-gray">BOOKINGS</p>
      </div>
      <div>
        <p className="fnt-title1 fgc-lightOrange">{membershipCount}</p>
        <p className="fnt-button1 fgc-gray">MEMBERSHIPS</p>
      </div>
      <div>
        <p className="fnt-title1 fgc-lightOrange">{eventCount}</p>
        <p className="fnt-button1 fgc-gray">EVENTS</p>
      </div>
    </div>
  );
}

AboutStats.propTypes = {
  bookingCount: PropTypes.number.isRequired,
  membershipCount: PropTypes.number.isRequired,
  eventCount: PropTypes.number.isRequired
};
