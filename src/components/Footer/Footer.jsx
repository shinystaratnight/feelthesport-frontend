/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import { connect } from "react-redux";
import SiteLogo from "../../assets/images/fts.png";
import PhoneEmail from "../PhoneEmail";
import SocialMedia from "../SocialMedia";
import "./Footer.css";

const mapStateToProps = state => ({
  phone: state.siteState.phone,
  email: state.siteState.email,
  socialMedia: state.siteState.socialMedia
});

export default connect(mapStateToProps)(function Footer({
  phone,
  email,
  socialMedia
}) {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = e => {
    setInputValue(e.target.value);
  };

  const subscribeHandler = e => {
    if (e.target.name === "email" && e.key !== "Enter") return;
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <div className="Footer--container">
      <div>
        <div>
          <img src={SiteLogo} alt="site logo" />
        </div>
        <p className="fnt-text2 fgc-white">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div>
        <p className="fnt-text3 fgc-white fnt-bold">About Us</p>
        <p className="fnt-text3 fgc-white fnt-bold">Partner With Us</p>
        <p className="fnt-text3 fgc-white fnt-bold">Reward Points</p>
        <p className="fnt-text3 fgc-white fnt-bold">Contact Us</p>
        <p className="fnt-text3 fgc-white fnt-bold">Terms and Conditions</p>
        <p className="fnt-text3 fgc-white fnt-bold">Policy</p>
      </div>
      <div>
        {email && (
          <PhoneEmail type="email" color="white Footer--iconText">
            {email}
          </PhoneEmail>
        )}
        {phone && (
          <PhoneEmail type="phone" color="white Footer--iconText">
            {phone}
          </PhoneEmail>
        )}
        {socialMedia && <SocialMedia socialMedia={socialMedia} color="white" />}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Your email"
            value={inputValue}
            onChange={changeHandler}
            onKeyPress={subscribeHandler}
          />
          <button
            type="button"
            className="btn btn6 fnt-text3 bgc-lightOrange fgc-black"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
});
