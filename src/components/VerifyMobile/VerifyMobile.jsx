import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames";
import phoneRegExp from "../../helpers/mobileNoRegex";
import Spinner from "../Spinner";
import FacebookIcon from "../../assets/images/icons/facebook-icon.svg";
import MailIcon from "../../assets/images/icons/mail-icon.svg";
import "./VerifyMobile.css";
import Input from "../Input";
import Modal from "../Modal";
import * as Yup from "yup";


const VerifyMobileSchema = Yup.object().shape({
  opt_mobile_no: Yup.string()
  .matches(phoneRegExp, "Invalid phone number.")
    .required("Please enter phone number"),
  insert_otp: Yup.string()
    .required("Please insert OTP.")
});


export default function VerifyMobile({
                                       loading,
                                       verifyMobileErrors,
                                       verifyMobileOTP,
                                       sendMobileOTP,
                                       userPhone,
                                       className,
                                       otpMobileJustSent
                                     }) {
  const [sendOTPVerifyLocalError, setSendOTPVerifyLocalError] = useState(undefined);
  const [optSent, setOtpSent] = useState(otpMobileJustSent);
  const formClasses = classNames({
    "": true,
    [className]: className
  });
  const sendOTPLocal = (mobileNo, mobileError) => {
    if (mobileNo != "" && !mobileError) {
      setSendOTPVerifyLocalError(undefined);
      setOtpSent(true);
      sendMobileOTP(mobileNo);
    } else {
      setOtpSent(false);
      setSendOTPVerifyLocalError("Please enter mobile to verify");
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          opt_mobile_no: userPhone || "",
          insert_otp: ""
        }}
        validationSchema={VerifyMobileSchema}
        onSubmit={values => {
          verifyMobileOTP(values);
        }}
        render={renderProps => (
          <form className={formClasses} onSubmit={renderProps.handleSubmit}>
            <div className="Modal-Form-Container">
              <p className="fnt-title2 fgc-lightOrange text-center FormVerify-title mb-30">Verify your phone number</p>
              <div className="verify--success">
                {optSent && renderProps.values.opt_mobile_no != "" && !verifyMobileErrors && !loading ? (
                  <p className="fnt-text2 fgc-blue fnt-bold">
                    OTP sent to {renderProps.values.opt_mobile_no}, Please check your phone
                  </p>
                ) : null}
              </div>
              <div className="verify--errors">
                {renderProps.errors.opt_mobile_no && renderProps.touched.opt_mobile_no ? (
                  <p className="fnt-text2 fgc-red fnt-bold">
                    {renderProps.errors.opt_mobile_no}
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
                {verifyMobileErrors && !loading && (
                  <p className="fnt-text2 fgc-red fnt-bold">
                    Please enter valid Phone number and OTP.
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
                    value={renderProps.values.opt_mobile_no}
                    name="opt_mobile_no"
                    className="input-block"
                    placeholder="Mobile No"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="input-container">
                  <button
                    type="button"
                    className="btn btn4 fnt-button3 bgc-lightOrange fgc-white btn-block"
                    onClick={() => {
                      sendOTPLocal(renderProps.values.opt_mobile_no, renderProps.errors.opt_mobile_no);
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

VerifyMobile.defaultProps = {
  className: undefined
};

VerifyMobile.propTypes = {
  className: PropTypes.string
};
