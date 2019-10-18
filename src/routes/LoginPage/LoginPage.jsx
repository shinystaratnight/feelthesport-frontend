import React, { useState, useEffect } from "react";
import { push } from "connected-react-router";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import {
  login,
  register,
  loginUsingFacebook,
  loginUsingGoogle,
  sendMobileVerifyOTP,
  submitVerifyMobileOTP,
  sendEmailVerifyOTP,
  submitVerifyEmailOTP,
  validateSession,
  sendOTP,
  verifyOTP
} from "../../redux/modules/userInfo";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
//import VerifyMobile from "../../components/VerifyMobile";
import VerifyMobile from "../../components/VerifyMobile";
import VerifyEmail from "../../components/VerifyEmail";
import LoginWithOTP from "../../components/LoginWithOTP";
import back from "../../assets/images/bg/login-bg.jpg";
import SiteLogo from "../../assets/images/logo.png";
import FacebookIcon from "../../assets/images/icons/facebook-icon.svg";
import MailIcon from "../../assets/images/icons/mail-icon.svg";
import Spinner from "../../components/Spinner";
import moment from "moment";
import "./LoginPage.css";
import Modal from "../../components/Modal";
import SelectCity from "../../components/SelectCity";

const mapStateToProps = state => ({
  userInfo: state.userState.id,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError,
  phone: state.userState.phone,
  phone_verify: state.userState.phone_verify,
  email: state.userState.email,
  email_verify: state.userState.email_verify
});
const mapDispatchToProps = {
  login,
  register,
  loginUsingFacebook,
  loginUsingGoogle,
  sendMobileVerifyOTP,
  submitVerifyMobileOTP,
  sendEmailVerifyOTP,
  submitVerifyEmailOTP,
  validateSession,
  sendOTP,
  verifyOTP
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function LoginPage({
                       className,
                       location,
                       userInfo,
                       apiLoading,
                       apiError,
                       login: loginDispatcher,
                       register: registerDispatcher,
                       loginUsingFacebook,
                       loginUsingGoogle,
                       sendMobileVerifyOTP: sendMobileVerifyOTPDispatcher,
                       submitVerifyMobileOTP: submitVerifyMobileOTPDispatcher,
                       sendEmailVerifyOTP: sendEmailVerifyOTPDispatcher,
                       submitVerifyEmailOTP: submitVerifyEmailOTPDispatcher, sendOTP: sendOTPDispatcher,
                       verifyOTP: verifyOTPDispatcher,
                       phone: userPhone,
                       phone_verify,
                       email: userEmail,
                       email_verify,
                       validateSession
}) {
  const [verifyMobileOpen, setVerifyMobileOpen] = useState(true);
  const [verifyEmailOpen, setVerifyEmailOpen] = useState(true);
  const [verifySuccess, setVerifySuccess] = useState(false);
  const [loginWithOTPOpen, setLoginWithOTPOpen] = useState(false);
  const [loginOrRegistration, setLoginOrRegistration] = useState(location.pathname);
  const [otpMobileJustSent, setOtpMobileJustSent] = useState(false);
  const [otpEmailJustSent, setOtpEmailJustSent] = useState(false);

  const verifyOTP = form => {
    verifyOTPDispatcher(form.mobile_or_email, form.insert_otp);
  };

  const sendOTP = mobileOrEmail => {
    sendOTPDispatcher(mobileOrEmail);
  };

  const verifyMobileOTP = form => {
    submitVerifyMobileOTPDispatcher(form.opt_mobile_no, form.insert_otp);
    setVerifyEmailOpen(true);
    setVerifySuccess(true);
  };
  const sendMobileOTP = mobileNo => {
    sendMobileVerifyOTPDispatcher(mobileNo);
  };
  const verifyEmailOTP = form => {
    submitVerifyEmailOTPDispatcher(form.opt_email_id, form.insert_otp);
    setVerifyEmailOpen(true);
    setVerifySuccess(true);
  };
  const sendEmailOTP = emailID => {
    sendEmailVerifyOTPDispatcher(emailID);
  };
  const responseGoogle = (response) => {
    if (response.accessToken) {
      let finalResponse = {};
      finalResponse.email = response.profileObj.email;
      finalResponse.name = response.profileObj.name;
      finalResponse.id = response.googleId;
      finalResponse.avatar_url = response.profileObj.imageUrl;
      finalResponse.access_token = response.accessToken;
      finalResponse.dateOfBirth = "";
      finalResponse.referrer_code = "";
      finalResponse.gender = "other";
      loginUsingGoogle(finalResponse);
      setVerifyMobileOpen(true);
      setVerifyEmailOpen(true);
      setOtpMobileJustSent(true);
      setOtpEmailJustSent(true);
    }
  };
  const responseFacebook = (response) => {
    if (response.accessToken) {
      let finalResponse = {};
      finalResponse.name = response.name;
      finalResponse.email = response.email;
      finalResponse.id = response.id;
      finalResponse.gender = response.gender;
      finalResponse.avatar_url = response.picture.data.url;
      finalResponse.access_token = response.accessToken;
      finalResponse.dateOfBirth = moment(response.birthday).format("YYYY-MM-DD");
      finalResponse.referrer_code = "";
      loginUsingFacebook(finalResponse);
      setVerifyMobileOpen(true);
      setVerifyEmailOpen(true);
      setOtpMobileJustSent(true);
      setOtpEmailJustSent(true);
    }
  };

  const loginHandler = form => {
    loginDispatcher(form.email_mobile, form.password);
    setVerifyMobileOpen(true);
    setVerifyEmailOpen(true);
  };

  const verifyMobileCloseHandler = () => {
    setVerifyMobileOpen(!verifyMobileOpen);
  };
  const verifyEmailCloseHandler = () => {
    setVerifyEmailOpen(!verifyEmailOpen);
  };
  const verifySuccessCloseHandler = () => {
    validateSession();
    setVerifySuccess(!verifySuccess);
  };
  const loginWithOTPCloseHandler = () => {
    setLoginWithOTPOpen(!loginWithOTPOpen);
  };


  const registerHandler = form => {
    registerDispatcher({
      name: form.name,
      password: form.password,
      email: form.email,
      phone: form.phone,
      dateOfBirth: form.date,
      gender: form.gender,
      ...(form.referral && { referrerCode: form.referral })
    });
    setVerifyMobileOpen(true);
    setOtpMobileJustSent(true);
    setOtpEmailJustSent(true);
  };

  const LoginPageClassNames = classNames({
    "LoginPage--container": true,
    [className]: className
  });
  if (loginOrRegistration !== location.pathname) {
    setLoginOrRegistration(location.pathname);
  }
  return (
    <div className={LoginPageClassNames}>
      <div className="LoginPage--welcome">
        <h1 className="fnt-title1 fgc-white login-page-title">
          {loginOrRegistration === "/login" ? (<span>Welcome To<br/>FTS</span>) : (<span>FTS<br/>Sign Up</span>)}
        </h1>
      </div>
      {loginOrRegistration === "/login" && (
        <div>
          <Modal
            isOpen={loginWithOTPOpen}
            closeHandler={loginWithOTPCloseHandler}
            overflow="visible"
          >
            <LoginWithOTP
              loading={apiLoading}
              loginWithOTPErrors={apiError}
              verifyOTP={verifyOTP}
              sendOTP={sendOTP}
            />
          </Modal>
          {phone_verify === false &&
          <Modal
            isOpen={verifyMobileOpen}
            closeHandler={verifyMobileCloseHandler}
            overflow="visible"
          >
            <VerifyMobile
              loading={apiLoading}
              verifyMobileErrors={apiError}
              verifyMobileOTP={verifyMobileOTP}
              sendMobileOTP={sendMobileOTP}
              userPhone={userPhone}
              otpMobileJustSent={otpMobileJustSent}
            />
          </Modal>}
          {phone_verify === true && userEmail != "" && email_verify === false &&
          <Modal
            isOpen={verifyEmailOpen}
            closeHandler={verifyEmailCloseHandler}
            overflow="visible"
          >
            <VerifyEmail
              loading={apiLoading}
              verifyEmailErrors={apiError}
              verifyEmailOTP={verifyEmailOTP}
              sendEmailOTP={sendEmailOTP}
              userEmail={userEmail}
              otpEmailJustSent={otpEmailJustSent}
            />
          </Modal>}
          {phone_verify === true && (userEmail === null || userEmail === "" || email_verify === true) &&
          <Modal
            isOpen={verifySuccess}
            closeHandler={verifySuccessCloseHandler}
            overflow="visible"
          >
            <div className="Modal-Form-Container mb-30 mt-30">
             <div className="">
               <p className="fnt-title3 fgc-lightOrange text-center FormVerify-title mb-30">
                 Your phone number {email_verify === true && "and email"} have been successfully verified
               </p>
               <div className="text-center mb-30 mt-50">
                 <button
                   type="button"
                   className="btn btn4 fnt-button4 bgc-lightOrange fgc-white pl-50 pr-50"
                   onClick={verifySuccessCloseHandler}
                 >
                   Login
                 </button>
               </div>
             </div>
            </div>
          </Modal>}
          <Login
            loading={apiLoading}
            loginErrors={apiError}
            loginHandler={loginHandler}
            responseGoogle={responseGoogle}
            responseFacebook={responseFacebook}
            setLoginWithOTPOpen={setLoginWithOTPOpen}
          />
        </div>
      )}
      {loginOrRegistration === "/register" && (
        <SignUp
          loading={apiLoading}
          registerErrors={apiError}
          registerHandler={registerHandler}
        />
      )}
    </div>
  );
});
