import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames";
import Spinner from "../Spinner";
import SiteLogo from "../../assets/images/logo.png";
import FacebookIcon from "../../assets/images/icons/facebook-icon.svg";
import MailIcon from "../../assets/images/icons/mail-icon.svg";
import "./Login.css";
import Input from "../Input";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";


const LoginSchema = Yup.object().shape({
  email_mobile: Yup.string()
    .required("Please enter email address or phone no."),
  password: Yup.string()
    .required("Please enter password.")
 // , recaptcha: Yup.string().required("Please solve captcha.")
});



export default function Login({
  loading,
  loginErrors,
  loginHandler,
  responseGoogle,
  responseFacebook,
  setLoginWithOTPOpen,
  className
}) {
  const formClasses = classNames({
    "Login--form": true,
    [className]: className
  });

  return (
    <Formik
      initialValues={{
        email_mobile: "",
        password: "",
        recaptcha: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        loginHandler(values);
      }}
      render={renderProps => (
        <form className={formClasses} onSubmit={renderProps.handleSubmit}>
          <img src={SiteLogo} alt="site logo" className="Login--logo" />
          <div className="login-form-wrapper">
            <div className="input-container">
              <h2 className="fnt-title2 fgc-lightOrange text-center">Log In</h2>
            </div>
            <div className="input-container">
              <p className="fnt-text2 fgc-black text-center">Don't have an account?</p>
              <Link to="/register" className="fnt-text2 fgc-blue text-decoration-none display-block text-center">
                Create an account
              </Link>
            </div>
            <div className="error-display fnt-text2 fgc-red fnt-bold">
              {renderProps.errors.email_mobile && renderProps.touched.email_mobile ? (
                <p>
                  {renderProps.errors.email_mobile}
                </p>
              ) : null}
              {renderProps.errors.password && renderProps.touched.password ? (
                <p>
                  {renderProps.errors.password}
                </p>
              ) : null}
              {renderProps.errors.recaptcha && renderProps.touched.recaptcha ? (
                <p>
                  {renderProps.errors.recaptcha}
                </p>
              ) : null}
              {loginErrors && (
                <p>
                  Phone number or Email or Password were incorrect
                </p>
              )}
            </div>
            <div className="input-container">
              <Input
                onChange={renderProps.handleChange}
                onBlur={renderProps.handleBlur}
                value={renderProps.values.email_mobile}
                name="email_mobile"
                placeholder="Phone number or Email"
                maxLength="30"
              />
            </div>
            <div className="input-container">
            <Input
              onChange={renderProps.handleChange}
              onBlur={renderProps.handleBlur}
              value={renderProps.values.password}
              name="password"
              placeholder="Password"
              type="password"
              maxLength="50"
            />
              <p className="fnt-text2 fgc-gray text-right mt-5" onClick={() => {
                setLoginWithOTPOpen(true);
              }}>Forgot password?</p>
            </div>
            <div className="input-container">
              <div className="SignUp--captcha">
                <ReCAPTCHA
                  sitekey="6LeM77QUAAAAADOth10v7zcoDY2Qo8syPEp7Yp6F"
                  render="explicit"
                  onChange={response => {
                    renderProps.setFieldValue("recaptcha", response);
                  }}
                />
              </div>
            </div>
            <div className="input-container">
            <button
              type="submit"
              className="btn btn2 fnt-button3 bgc-darkOrange bgch-lightOrange fgc-white btn-block"
            >
              Log in
            </button>
            </div>
            <div className="input-container mb-20 mt-20">
              <p className="fnt-text1 fgc-black fnt-bold text-center">OR</p>
            </div>
            <div className="input-container">
            <button
              type="button"
              className="btn btn2 fnt-button4 bgc-lightOrange fgc-white btn-block"
              onClick={() => {
                setLoginWithOTPOpen(true);
              }}
            >
              Log in with OTP
            </button>
            </div>
            <div className="input-container">
              <FacebookLogin
                appId="362341918026434"
                fields="name,email,picture,birthday,gender"
                callback={responseFacebook}
                scope="public_profile,email,user_birthday,user_gender"
                render={rProps => (
                  <button
                    onClick={rProps.onClick}
                    type="button"
                    className="btn btn2 fnt-button4 bgc-fb-brand bgch-blue fgc-white btn-icon btn-block "
                  >
                    <img src={FacebookIcon} alt="facebook"/>
                    <span></span>
                    Log in with Facebook
                  </button>
                )}
              />
            </div>
            <div className="input-container">
              <GoogleLogin
                clientId="239129983312-atnfos6qstbj74cgqa0tpmjj51icb6u1.apps.googleusercontent.com"
                scope="profile email"
                render={rProps => (
                  <button
                    onClick={rProps.onClick}
                    type="button"
                    disabled={rProps.disabled}
                    className="btn btn2 fnt-button4 bgc-red bgch-darkOrange fgc-white btn-icon btn-block"
                  >
                    <img src={MailIcon} alt="mail"/>
                    <span></span>
                    Log in with Gmail
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </form>
      )}
    />
  );
}

Login.defaultProps = {
  className: undefined
};

Login.propTypes = {
  className: PropTypes.string
};
