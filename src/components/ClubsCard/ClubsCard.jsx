import React from "react";
import LocationButton from "../LocationButton";
import LocationIcon from "../../assets/images/icons/icon-location.svg";
import NotificationIcon from "../../assets/images/icons/icon-notification.svg";
import ClubsImage from "../../assets/images/sportsclub.png";
import "./ClubsCard.css";

export default function ClubsCard({ data: { id, name, area, image, sport } }) {
  const cImage = image !== undefined ? image : ClubsImage;

  return (
    <div className="ClubsCard--container">
      <img src={cImage} alt="card pic" className="ClubsCard--image" />
      {/* <img src={image} alt="card pic" className="ClubsCard--image" /> */}
      {/* <img src={ClubsImage} alt="card pic" className="ClubsCard--image" /> */}
      <LocationButton icon={LocationIcon} className="ClubsCard--locationButton">
        {area}
      </LocationButton>
      <img
        src={NotificationIcon}
        alt="notification icon"
        className="ClubsCard--notification"
      />
      <div className="ClubsCard--name">
        <p className="fnt-subtitle1 fgc-lightOrange">{name}</p>
        <p className="fnt-subtitle2 fgc-white">{area}</p>
      </div>
      <button
        type="button"
        className="btn btn5 bgc-darkOrange fgc-white fnt-button3 ClubsCard--button"
      >
        {sport}
      </button>
    </div>
  );
}
