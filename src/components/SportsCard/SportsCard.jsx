import React from "react";
import GetDirections from "../GetDirections";
import Stars from "../Stars";
import Pic from "../../assets/images/knights_sports_logo.png";
import "./SportsCard.css";

export default function SportsCard({
  data: {
    arenaId,
    arenaName,
    arenaDescription,
    city,
    area,
    address,
    sport,
    courtTypes,
    price,
    rating,
    openingTime,
    closingTime,
    arenaImage
  }
}) {
  const formatTime = time => {
    const t = time.split(":");
    const amPm = Number(t[0]) >= 12 ? "pm" : "am";
    return `${t[0]}:${t[1]}${amPm}`;
  };

  // console.log("DDDD", data);
  return (
    <div className="SportsCard--container">
      <h3 className="fnt-subtitle2 fgc-black SportsCard--name">{arenaName}</h3>
      <Stars
        stars={rating}
        color="darkOrange"
        rating
        className="SportsCard--rating"
      />
      <div className="SportsCard--placeDirections">
        <p className="fnt-subtitle3 fgc-black SportsCard--name">{city}</p>
        <GetDirections />
      </div>
      <p className="fnt-text1 fgc-gray SportsCard--location">{address}</p>
      <div className="SportsCard--sport">{sport.name}</div>
      <p className="fnt-text1 fgc-lightOrange SportsCard--court">
        Court types: <span className="fgc-gray">{courtTypes}</span>
      </p>
      <p className="fnt-text1 fgc-lightOrange SportsCard--timings">
        Timings:{" "}
        <span className="fgc-gray">{`${formatTime(openingTime)} - ${formatTime(
          closingTime
        )}`}</span>
      </p>
      <img src={Pic} alt="club pic" className="SportsCard--image" />
      {/* <img src={arenaImage} alt="club pic" className="SportsCard--image" /> */}

      <p className="fnt-text1 fgc-gray SportsCard--description">
        {arenaDescription}
      </p>
      <p className="fnt-button1 fgc-darkOrange SportsCard--cost">
        {`Cost: Rs ${price}`}
      </p>
      <button
        type="button"
        className="btn btn4 fnt-button4 bgc-white brdc-lightOrange fgc-lightOrange SportsCard--details"
      >
        Details
      </button>
      <button
        type="button"
        className="btn btn4 fnt-button4 bgc-lightOrange fgc-white SportsCard--register"
      >
        Register
      </button>
    </div>
  );
}
