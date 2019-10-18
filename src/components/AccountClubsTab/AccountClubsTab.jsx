import React from "react";
import Pic from "../../assets/images/knights_sports_logo.png";
import Icon from "../../assets/images/icons/basketball.svg";
import "./AccountClubsTab.css";

const clubs = [
  {
    name: "Name of sport club",
    date: "16.02.2019",
    sport: "Football",
    icon: Icon,
    pic: Pic
  },
  {
    name: "Name of sport club",
    date: "16.02.2019",
    sport: "Football",
    icon: Icon,
    pic: Pic
  },
  {
    name: "Name of sport club",
    date: "16.02.2019",
    sport: "Football",
    icon: Icon,
    pic: Pic
  }
];

export default function AccountClubsTab() {
  return (
    <div className="AccountClubsTab--container">
      <h2 className="fnt-subtitle2 fgc-black">Clubs</h2>
      <p className="fnt-subtitle4 fgc-gray">
        You are associated with the following clubs
      </p>
      <div>
        {clubs.map((club, index) => (
          <div className="AccountClubsTab--card" key={index}>
            <div>
              <p className="fnt-subtitle4 fgc-black">{club.name}</p>
              <p className="fnt-subtitle4 fgc-gray">{club.date}</p>
              <button
                type="button"
                className="btn btn6 fnt-text1 bgc-white fgc gray brdc-gray btn-icon"
              >
                <img src={club.icon} alt="sport" />
                <span>{club.sport}</span>
              </button>
            </div>
            <img src={club.pic} alt="club" />
          </div>
        ))}
      </div>
    </div>
  );
}
