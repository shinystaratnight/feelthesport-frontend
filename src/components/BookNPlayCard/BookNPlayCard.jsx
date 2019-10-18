import React from "react";
import { Link } from "react-router-dom";
import Stars from "../Stars";
import MoneyIcon from "../../assets/images/icons/icon-hand-money.svg";
import TimeIcon from "../../assets/images/icons/icon-time.svg";
import MapIcon from "../../assets/images/icons/icon-map.svg";
import "./BookNPlayCard.css";

export default function BookNPlayCard({
  data: {
    arenaId,
    arenaName,
    rating,
    area,
    sport,
    courtTypes,
    price,
    biggestPercentOffer,
    biggestAmountOffer,
    bookaslotId,
    hasMembership,
    hasCoaching,
    isEventComplex,
    isEventOrganizer
  }
}) {
  return (
    <div className="BookNPlayCard--container">
      <div className="BookNPlayCard--top">
        <h3 className="fnt-title2 fgc-white">{arenaName}</h3>
        <Stars stars={Number(rating)} color="lightOrange" />
        <Link to={`/arena/${arenaId}/${sport}`} className="fnt-noline">
          <button
            type="button"
            className="btn btn5 fnt-button3 bgc-darkOrange fgc-white btn-rounded"
          >
            Info
          </button>
        </Link>
      </div>
      <div className="BookNPlayCard--middle">
        <div>
          <img src={MapIcon} alt="map icon" />
          <p className="fnt-subtitle4 fgc-white">{area}</p>
        </div>
        <p className="fnt-subtitle4 fgc-white">{sport}</p>
      </div>
      <div className="BookNPlayCard--middle">
        <div>
          <img src={TimeIcon} alt="time icon" />
          <p className="fnt-subtitle4 fgc-white">1234</p>
        </div>
        <p className="fnt-subtitle4 fgc-white">{courtTypes}</p>
      </div>
      <div className="BookNPlayCard--middle">
        <div>
          <img src={MoneyIcon} alt="money icon" />
          <p className="fnt-subtitle4 fgc-white">{price}</p>
        </div>
        <p className="fnt-subtitle4 fgc-white">offers</p>
      </div>
      <div className="BookNPlayCard--bottom">
        <div className="BookNPlayCard--bottom--left">
          {/* <button
            type="button"
            className="btn btn4 fnt-text1 bgc-transparent brdc-lightOrange fgc-lightOrange"
          >
            Events
          </button> */}
          <Link
            to={`/events/?organizers=${arenaName.replace(/ /g, "+")}`}
            className="btn btn4 fnt-text1 bgc-transparent brdc-lightOrange fgc-lightOrange fnt-noline"
          >
            Events
          </Link>
          <button
            type="button"
            className="btn btn4 fnt-text1 bgc-transparent brdc-lightOrange fgc-lightOrange"
          >
            Coaching
          </button>
        </div>
        <div className="BookNPlayCard--bottom--right">
          <Link
            to={`/arena/${arenaId}/membership/${bookaslotId}`}
            className="btn btn4 fnt-text1 bgc-darkOrange fgc-black"
          >
            Membership
          </Link>
          <Link
            to={`/arena/${arenaId}/bookaslot/${bookaslotId}`}
            className="btn btn4 fnt-text1 bgc-lightOrange fgc-black fnt-noline"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
