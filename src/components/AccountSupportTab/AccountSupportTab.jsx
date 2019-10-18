import React from "react";
import Input from "../Input";
import PhoneEmail from "../PhoneEmail";
import "./AccountSupportTab.css";

export default function AccountSupportTab() {
  return (
    <div className="AccountSupportTab--container">
      <h2 className="fnt-subtitle2 fgc-black">Support</h2>
      <h3 className="fnt-subtitle4 fgc-lightOrange AccountSupportTab--borderBottom">
        Send a message
      </h3>
      <p className="fnt-text1 fgc-black">
        Do you have any questions or concerns? Please, feel free to ask!
      </p>
      <Input labelPosition="top">Title</Input>
      <div className="AccountSupportTab--textarea">
        <p className="fnt-text1 fgc-gray">Write your message</p>
        <textarea name="" id="" cols="30" rows="10" />
      </div>
      <button
        type="submit"
        className="btn btn4 fnt-text1 fnt-bold bgc-lightOrange fgc-white"
      >
        Send
      </button>
      <p className="fnt-subtitle4 fgc-lightOrange AccountSupportTab--borderBottom">
        Contact us
      </p>
      <div>
        <PhoneEmail email color="black">
          abcdef@gmail.com
        </PhoneEmail>
        <PhoneEmail phone color="black">
          89993561751
        </PhoneEmail>
      </div>
    </div>
  );
}
