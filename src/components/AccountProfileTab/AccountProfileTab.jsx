import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Input from "../Input";
import RadioButton from "../RadioButton";
import Pic from "../../assets/images/user.png";
import "./AccountProfileTab.css";

export default function AccountProfileTab({ className }) {
  const classes = classNames({
    "AccountProfileTab--container": true,
    [className]: className
  });

  return (
    <div className={classes}>
      <h2 className="fnt-subtitle2 fgc-black">User Profile</h2>
      <div className="AccountProfileTab--profilePhoto">
        <div>
          <h2 className="fnt-subtitle4 fgc-lightOrange">Profile photo</h2>
          <p className="fnt-text1 fgc-gray">Change the image</p>
          <button
            type="button"
            className="btn btn4 bgc-lightOrange fgc-white fnt-text1 fnt-bold"
          >
            Choose image
          </button>
        </div>
        <img src={Pic} alt="user avatar" />
      </div>
      <div className="AccountProfileTab--mainInformation">
        <h2 className="fnt-subtitle4 fgc-lightOrange">Main Information</h2>
        <div>
          <Input labelPosition="top">Your name</Input>
          <Input labelPosition="top">Phone number</Input>
        </div>
        <div>
          <Input labelPosition="top">Date of birth</Input>
          <Input labelPosition="top">Email ID</Input>
        </div>
        <div>
          <p className="fnt-text1 fgc-gray">Gender</p>
          <div>
            <RadioButton name="gender">Female</RadioButton>
            <RadioButton name="gender">Male</RadioButton>
            <RadioButton name="gender">Other</RadioButton>
          </div>
        </div>
      </div>
      <div className="AccountProfileTab--changePassword">
        <h2 className="fnt-subtitle4 fgc-lightOrange">Change the password</h2>
        <Input labelPosition="top">New password</Input>
        <Input labelPosition="top">Retype new password</Input>
        <button
          type="button"
          className="btn btn4 bgc-lightOrange fgc-white fnt-text1 fnt-bold"
        >
          Save
        </button>
      </div>
    </div>
  );
}

AccountProfileTab.defaultProps = {
  className: undefined
};

AccountProfileTab.propTypes = {
  className: PropTypes.string
};
