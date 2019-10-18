import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames";
import Spinner from "../Spinner";
import FacebookIcon from "../../assets/images/icons/facebook-icon.svg";
import MailIcon from "../../assets/images/icons/mail-icon.svg";
import "./LoginWithOTP.css";
import Input from "../Input";
import Modal from "../Modal";
import * as Yup from "yup";

const LoginWithOTPSchema = Yup.object().shape({
  mobile_or_email: Yup.string()
    .required("Please enter phone number or email address"),
  insert_otp: Yup.string()
    .required("Please insert OTP.")
});


export default function LoginWithOTP({
                                       loading,
                                       loginWithOTPErrors,
                                       verifyOTP,
                                       sendOTP,
                                       className
                                     }) {
  const [sendOTPVerifyLocalError, setSendOTPVerifyLocalError] = useState(undefined);
  const [optSent, setOtpSent] = useState(false);
  const formClasses = classNames({
    "": true,
    [className]: className
  });
  const sendOTPLocal = (mobileNoEmail, mobileNoEmailError) => {
    if (mobileNoEmail != "" && !mobileNoEmailError) {
      setSendOTPVerifyLocalError(undefined);
      setOtpSent(true);
      sendOTP(mobileNoEmail);
    } else {
      setOtpSent(false);
      setSendOTPVerifyLocalError("Please enter mobile or email to verify");
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          mobile_or_email: "",
          insert_otp: ""
        }}
        validationSchema={LoginWithOTPSchema}
        onSubmit={values => {
          verifyOTP(values);
        }}
        render={renderProps => (
          <form className={formClasses} onSubmit={renderProps.handleSubmit}>
            <div className="Modal-Form-Container">
              <p className="fnt-title2 fgc-lightOrange text-center FormVerify-title mb-30">Login with OTP</p>
              <div className="verify--success">
                {optSent && !loginWithOTPErrors && !loading ? (
                  <p className="fnt-text2 fgc-blue fnt-bold">
                    OTP sent to {renderProps.values.mobile_or_email}, Please check
                  </p>
                ) : null}
              </div>
              <div className="verify--errors">
                {renderProps.errors.mobile_or_email && renderProps.touched.mobile_or_email ? (
                  <p className="fnt-text2 fgc-red fnt-bold">
                    {renderProps.errors.mobile_or_email}
                  </p>
                ) : null}
                {sendOTPVerifyLocalError ? (
                  <p className="fnt-text2 fgc-red fnt-bold">
                    {sendOTPVerifyLocalError}
                  </p>
                ) : null}
                {renderProps.errors.insert_otp && renderProps.touched.insert_otp ? (
                  <p className="fnt-text2 fgc-red fnt-bold">
                    {renderProps.errors.insert_otp}
                  </p>
                ) : null}
                {loginWithOTPErrors && !loading && (
                  <p className="fnt-text2 fgc-red fnt-bold">
                    Please enter valid Phone number or Email and OTP.
                  </p>
                )}
              </div>
              <div className="Modal-Form-wrapper">
                <div className="input-container">
                  <Input
                    onChange={(ev) => {
                      renderProps.handleChange(ev);
                      setOtpSent(false);
                    }}
                    onBlur={renderProps.handleBlur}
                    value={renderProps.values.mobile_or_email}
                    name="mobile_or_email"
                    className="input-block"
                    placeholder="Mobile No or Email"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="input-container">
                  <button
                    type="button"
                    className="btn btn4 fnt-button3 bgc-lightOrange fgc-white btn-block"
                    onClick={() => {
                      sendOTPLocal(renderProps.values.mobile_or_email, renderProps.errors.mobile_or_email);
                    }}
                  >
                    {optSent ? "Resend OTP" : "Send OTP"}
                  </button>
                </div>
                <div className="input-container">
                  <Input
                    onChange={renderProps.handleChange}
                    onBlur={renderProps.handleBlur}
                    value={renderProps.values.insert_otp}
                    className="input-block"
                    name="insert_otp"
                    placeholder="Insert OTP"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn4 fnt-button3 bgc-lightOrange fgc-white"
                  >
                    Verify
                  </button>
                </div>
              </div>

            </div>
          </form>
        )}
      />
    </div>
  );
}

LoginWithOTP.defaultProps = {
  className: undefined
};

LoginWithOTP.propTypes = {
  className: PropTypes.string
};
