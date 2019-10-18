import React from "react";
import WhatsappIcon from "../../assets/images/icons/events-whatsapp.svg";
import FacebookIcon from "../../assets/images/icons/events-facebook.svg";
import Mail1Icon from "../../assets/images/icons/events-mail1.svg";
import Mail2Icon from "../../assets/images/icons/events-mail2.svg";
import "./AccountReferTab.css";

const icons = [WhatsappIcon, FacebookIcon, Mail1Icon, Mail2Icon];

export default function AccountReferTab({ className, ...props }) {
  return (
    <div className="AccountReferTab--container">
      <h2 className="fnt-subtitle2 fgc-black">Refer and Earn</h2>
      <p className="fnt-subtitle4 fgc-red">YOUR CODE</p>
      <p className="fnt-subtitle4 fgc-black">GRNVvg!243</p>
      <p className="fnt-subtitle4 fgc-black">
        Do you want to earn some FTS Points for free?
      </p>
      <div>
        <p className="fnt-subtitle4 fgc-lightOrange fnt-bold">
          Invite your friends!
        </p>
        <div>
          {icons.map((p, index) => (
            <img
              src={p}
              alt="events social icons"
              key={index}
              className="EventBox--socialIcons"
            />
          ))}
        </div>
      </div>
      <p className="fnt-subtitle4 fgc-black">
        If your friend joins FTS, you earn{" "}
        <span className="fgc-darkOrange">25 FTS Points</span>!
      </p>
      <p className="fnt-subtitle4 fgc-black">
        If your friend joins FTS, he/she earns{" "}
        <span className="fgc-darkOrange">25 FTS Points</span>!
      </p>
    </div>
  );
}
