import React, { useState } from "react";
import Spinner from "../Spinner";
import "./SelectSport.css";

export default function SelectSport({
  sportCategories,
  setUserSport,
  loading,
  error,
  userSelectedSport
}) {
  const [selectedSport, setSelectedSport] = useState(userSelectedSport);

  const OrangeKickBall = () => (
    <svg
      width="55"
      height="64"
      viewBox="0 0 55 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.49609 63.1758C9.8098 63.1758 12.4961 60.2656 12.4961 56.6758C12.4961 53.0859 9.8098 50.1758 6.49609 50.1758C3.18238 50.1758 0.496094 53.0859 0.496094 56.6758C0.496094 60.2656 3.18238 63.1758 6.49609 63.1758Z"
        fill="#FC9B04"
      />
      <path
        d="M31.4961 13.1758C34.8098 13.1758 37.4961 10.2656 37.4961 6.67578C37.4961 3.08593 34.8098 0.175781 31.4961 0.175781C28.1824 0.175781 25.4961 3.08593 25.4961 6.67578C25.4961 10.2656 28.1824 13.1758 31.4961 13.1758Z"
        fill="#FC9B04"
      />
      <path
        d="M36.4961 22.5091L29.8004 39.1758L14.4961 35.1634L20.2352 21.5832L22.4671 14.1758L35.2207 17.5708L36.4961 22.5091Z"
        fill="#FC9B04"
      />
      <path
        d="M10.4961 30.1758L12.0541 26.832C13.612 23.4883 16.1048 20.7525 19.2207 18.9286C21.7135 17.4088 24.5178 16.8008 27.6338 17.4088L32.9309 18.6247C35.112 18.9286 36.9816 19.8406 39.1628 20.7525L53.4961 28.3519"
        stroke="#FC9B04"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M28.4961 33.1758L18.4961 60.1758"
        stroke="#FC9B04"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M21.4961 28.1758L14.4961 44.1758"
        stroke="#FC9B04"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (loading)
    return (
      <div className="SelectSport--container">
        <OrangeKickBall />
        <p className="fnt-text2 fgc-lightOrange fnt-bold">Select Sport</p>
        <Spinner />
      </div>
    );

  return (
    <div className="SelectSport--container">
      <OrangeKickBall />
      <p className="fnt-text2 fgc-lightOrange fnt-bold">Select Sport</p>
      <div className="SelectSport--rows">
        {Object.entries(sportCategories).map(([category, sports], i) => (
          <div className="SelectSport--category" key={i}>
            <h3 className="fnt-subtitle4 fnt-bold fgc-black">{category}</h3>
            <div>
              {sports.map((sport, j) => (
                <div
                  className={`SelectSport--sport  ${
                    selectedSport === sport.name
                          ? "its_selected"
                          : ""
                  }`}
                  key={j}
                  onClick={() => setSelectedSport(sport.name)}
                >
                  <img src={sport.icon} alt={sport.name} />
                  <p className="sport_item fnt-text2 fgc-black">
                      {sport.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="btn btn4 fnt-button3 bgc-lightOrange fgc-white"
        onClick={() => setUserSport(selectedSport)}
      >
        Submit
      </button>
    </div>
  );
}
