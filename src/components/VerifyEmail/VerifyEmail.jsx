import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames";
import Spinner from "../Spinner";
import FacebookIcon from "../../assets/images/icons/facebook-icon.svg";
import MailIcon from "../../assets/images/icons/mail-icon.svg";
import "./VerifyEmail.css";
import Input from "../Input";
import Modal from "../Modal";
import * as Yup from "yup";


const VerifyEmailSchema = Yup.object().shape({
  opt_email_id: Yup.string()
    .email("Email is invalid.")
    .required("Please enter email address"),
  insert_otp: Yup.string()
    .required("Please insert OTP.")
});


export default function VerifyEmail({
                                      loading,
                                      verifyEmailErrors,
                                      verifyEmailOTP,
                                      sendEmailOTP,
                                      userEmail,
                                      className,
                                      otpEmailJustSent
                                    }) {
  const [sendOTPVerifyLocalError, setSendOTPVerifyLocalError] = useState(undefined);
  const [optSent, setOtpSent] = useState(otpEmailJustSent);
  const formClasses = classNames({
    "": true,
    [className]: className
  });
  const sendOTPLocal = (emailID, emailError) => {
    if (emailID != "" && !emailError) {
      setSendOTPVerifyLocalError(undefined);
      setOtpSent(true);
      sendEmailOTP(emailID);
    } else {
      setOtpSent(false);
      setSendOTPVerifyLocalError("Please enter email to verify");
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          opt_email_id: userEmail || "",
          insert_otp: ""
        }}
        validationSchema={VerifyEmailSchema}
        onSubmit={values => {
          verifyEmailOTP(values);
        }}
        render={renderProps => (
          <form className={formClasses} onSubmit={renderProps.handleSubmit}>
            <div className="Modal-Form-Container">
              <p className="fnt-title2 fgc-lightOrange text-center FormVerify-title mb-30">Verify your email address</p>
              <div className="verify--success">
                {optSent && renderProps.values.opt_email_id != "" && !verifyEmailErrors && !loading ? (
                  <p className="fnt-text2 fgc-blue fnt-bold">
                    OTP sent to {renderProps.values.opt_email_id}, Please check your email address
                  </p>
                ) : null}
              </div>
              <div className="verify--errors">
                {renderProps.errors.opt_email_id && renderProps.touched.opt_email_id ? (
                  <p className="fnt-text2 fgc-red fnt-bold">
                    {renderProps.errors.opt_email_id}
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
                {verifyEmailErrors && !loading && (
                  <p className="fnt-text2 fgc-red fnt-bold">
                    Please enter valid Email and OTP.
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
                    value={renderProps.values.opt_email_id}
                    name="opt_email_id"
                    className="input-block"
                    placeholder="Email address"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="input-container">
                  <button
                    type="button"
                    className="btn btn4 fnt-button3 bgc-lightOrange fgc-white btn-block"
                    onClick={() => {
                      sendOTPLocal(renderProps.values.opt_email_id, renderProps.errors.opt_email_id);
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

VerifyEmail.defaultProps = {
  className: undefined
};

VerifyEmail.propTypes = {
  className: PropTypes.string
};
