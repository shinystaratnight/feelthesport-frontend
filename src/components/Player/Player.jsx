import React from "react";
import SocialMedia from "../SocialMedia";
import PlaceholderAvatar from "../../assets/images/placeholder_avatar.png";
import "./Player.css";

export default function Player({ name, position, avatar, socialMedia }) {
  return (
    <div className="Player--container">
      <img src={avatar || PlaceholderAvatar} alt="player avatar" />
      <p className="fnt-subtitle4 fgc-gray">{name}</p>
      <p className="fnt-text2 fgc-gray">{position}</p>
      {socialMedia ? (
        <SocialMedia socialMedia={socialMedia} color="black" />
      ) : (
        <SocialMedia
          socialMedia={["https://facebook.com"]}
          color="black"
          className="Player--hidden"
        />
      )}
    </div>
  );
}
