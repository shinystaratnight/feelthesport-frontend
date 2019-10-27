import React from "react";
import { Link } from "react-router-dom";
import CalendarIcon from "../../assets/images/icons/icon-calendar.png";
import TimeIcon from "../../assets/images/icons/icon-time.svg";
import StadiumIcon from "../../assets/images/icons/icon-stadium.png";
import AgeIcon from "../../assets/images/icons/icon-age.png";
import MoneyIcon from "../../assets/images/icons/icon-hand-money.svg";
import SportIcon from "../../assets/images/icons/icon-sport.png";
import LocationIcon from "../../assets/images/icons/icon-location.svg";
import LocationButton from "../LocationButton";
import Pic from "../../assets/images/car-1.png";
import "./EventCard.css";
import "./EventCard2.css";

export default function EventCard({
  type,
  data: {
    id,
    name,
    city,
    area,
    organizer,
    complex,
    sport,
    price,
    startDate,
    endDate,
    startTime,
    endTime,
    startAge,
    endAge,
    image
  }
}) {
  const formatTime = time => {
    const t = time.split(":");
    return `${t[0]}:${t[1]}`;
  };

  if (type === 1) {
    return (
      <div className="EventsCard1--container">
        <img src={Pic} alt="card pic" className="EventsCard1--image" />
        <LocationButton icon={SportIcon} className="EventsCard1--sport">
          {sport}
        </LocationButton>
        <LocationButton icon={LocationIcon} className="EventsCard1--area">
          {area}
        </LocationButton>
        <div className="EventsCard1--name">
          <p className="fnt-text1 fnt-bold fgc-white">{name}</p>
          <p className="fnt-text3 fgc-white">{`Organized by ${organizer}`}</p>
        </div>

        <div className="EventsCard1--date">
          <img src={CalendarIcon} alt="info icon" />
          <p className="fnt-text3 fgc-white">
            {startDate.replace("-", "/").replace("-", "/")}
          </p>
        </div>
        <div className="EventsCard1--time">
          <img src={TimeIcon} alt="info icon" />
          <p className="fnt-text3 fgc-white">{`${formatTime(
            startTime
          )}-${formatTime(endTime)}`}</p>
        </div>
        <div className="EventsCard1--complex">
          <img src={StadiumIcon} alt="info icon" />
          <p className="fnt-text3 fgc-white">{complex}</p>
        </div>
        <div className="EventsCard1--age">
          <img src={AgeIcon} alt="info icon" />
          <p className="fnt-text3 fgc-white">{`Age ${startAge}-${endAge}`}</p>
        </div>
        <div className="EventsCard1--price">
          <img src={MoneyIcon} alt="info icon" />
          <p className="fnt-text3 fgc-white">{`Rs ${price}`}</p>
        </div>
        <Link to={`/event/${id}`} className="fnt-noline EventsCard1--button">
          <button
            type="button"
            className="btn btn7 fnt-text2 bgc-black fgc-lightOrange brdc-lightOrange btn-skewed custom-padding"
          >
            <span>Details</span>
          </button>
        </Link>
      </div>
    );
  }

  if (type === 2) {
    return (
      <div className="EventsCard2--container">
        <img src={Pic} alt="card pic" className="EventsCard2--image" />
        <LocationButton icon={SportIcon} className="EventsCard2--sport">
          {sport}
        </LocationButton>
        <LocationButton icon={LocationIcon} className="EventsCard2--area">
          {area}
        </LocationButton>
        <div className="EventsCard2--name">
          <p className="fnt-text1 fnt-bold fgc-white">{name}</p>
          <p className="fnt-text3 fgc-white">{`Organized by ${organizer}`}</p>
        </div>

        <div className="EventsCard2--date">
          <img src={CalendarIcon} alt="info icon" />
          <p className="fnt-text2 fgc-white">
            {startDate.replace("-", "/").replace("-", "/")}
          </p>
        </div>
        <div className="EventsCard2--time">
          <img src={TimeIcon} alt="info icon" />
          <p className="fnt-text2 fgc-white">{`${formatTime(
            startTime
          )}-${formatTime(endTime)}`}</p>
        </div>
        <div className="EventsCard2--complex">
          <img src={StadiumIcon} alt="info icon" />
          <p className="fnt-text2 fgc-white">{complex}</p>
        </div>
        <div className="EventsCard2--age">
          <img src={AgeIcon} alt="info icon" />
          <p className="fnt-text2 fgc-white">{`Age ${startAge}-${endAge}`}</p>
        </div>
        <div className="EventsCard2--price">
          <img src={MoneyIcon} alt="info icon" />
          <p className="fnt-text2 fgc-white">{`Rs ${price}`}</p>
        </div>
        <Link to={`/event/${id}`} className="fnt-noline EventsCard2--button">
          <button
            type="button"
            className="btn btn7 fnt-text1 bgc-black fgc-lightOrange brdc-lightOrange btn-skewed"
          >
            <span>Details</span>
          </button>
        </Link>
      </div>
    );
  }

  if (type === 3) {
    return (
      <div className="EventsCard1--container EventsCard3--type">
        <img src={Pic} alt="card pic" className="EventsCard1--image" />
        <div className="EventsCard2--name">
          <p className="fnt-text1 fnt-bold fgc-white">Coming Soon</p>
          <p className="fnt-text3 fgc-white">Event Cards are coming soon.</p>
        </div>
      </div>
    );
  }
}
