import React from "react";
import PhoneEmail from "../PhoneEmail";
import SocialMedia from "../SocialMedia";
import GetDirections from "../GetDirections";
import Pic from "../../assets/images/car-1.png";
import "./MapCard.css";

export default function MapCard({ name, address, email, phone, socialMedia }) {
  return (
    <div className="MapCard--container">
      <img src={Pic} alt="map" />
      <div>
        <div>
          <h4 className="fnt-subtitle1 fgc-black">{name}</h4>
          <p className="fnt-subtitle4 fgc-gray">{address}</p>
        </div>
        <GetDirections />
        <div>
          <PhoneEmail type="email" color="black">
            {email}
          </PhoneEmail>
          <PhoneEmail type="phone" color="black">
            {phone}
          </PhoneEmail>
          <SocialMedia socialMedia={socialMedia} color="black" />
        </div>
      </div>
    </div>
  );
}
