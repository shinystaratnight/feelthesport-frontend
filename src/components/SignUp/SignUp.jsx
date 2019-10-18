import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Formik } from "formik";
import * as Yup from "yup";
import Checkbox from "../Checkbox";
import RadioButton from "../RadioButton";
import SiteLogo from "../../assets/images/logo.png";
import Input from "../Input";
import Spinner from "../Spinner";
import "./SignUp.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Container, Row, Col } from 'react-grid-system';
import phoneRegExp from "../../helpers/mobileNoRegex";


Yup.addMethod(Yup.mixed, 'defined', function () {
    return this.test('defined', "{path} must be defined", value => value !== undefined)
})
const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short.")
    .max(70, "Name is too long.")
    .required("Name field is required."),
  email: Yup.string()
    .email("Email is invalid.")
    .required("Email field is required."),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number.")
    .required("Phone number field is required."),
  date: Yup.date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 13)),
      "You must be atleast 13 years old."
    )
    .required("Date field is required."),
  password: Yup.string()
    .min(6, "Password should be atleast 6 characters long.")
    .matches(/[a-z]/, "Password should have atleast one lowercase letter.")
    .matches(/[A-Z]/, "Password should have atleast one uppercase letter.")
    .matches(/\d+/, "Password should have atleast one number.")
    .required("Password field is required."),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Retype Password field is required."),
  gender: Yup.string()
    .oneOf(["female", "male", "other"])
    .required("Gender field is required."),
  terms: Yup.mixed()
    .oneOf([true], "You must agree with the Terms and Conditions.")
    .required()
//  , recaptcha: Yup.string().required("Please solve captcha.")
});

export default function SignUp({
  loading,
  registerErrors,
  registerHandler,
  className
}) {
  const [dobInputType, setDobInputType] = useState("text");
  const formClasses = classNames({
    "SignUp--form": true,
    [className]: className
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        date: "",
        password: "",
        password2: "",
        gender: "",
        referral: "",
        recaptcha: "",
        terms: false
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => {
        registerHandler(values);
      }}
      render={renderProps => (
        <form className={formClasses} onSubmit={renderProps.handleSubmit}>
          <Container>
            <Row>
              <Col sm={12}>
                <img src={SiteLogo} alt="site logo" className="SignUp--logo " />
                <div className="input-container">
                  <h2 className="fnt-title2 fgc-lightOrange text-center">Sign Up</h2>
                </div>
                <div className="input-container">
                  <p className="fnt-text2 fgc-black text-center">Already have an account?</p>
                  <Link to="/login" className="fnt-text2 fgc-blue text-decoration-none display-block text-center">
                    Log In
                  </Link>
                </div>
                <div className="SignUp--errors error-display fnt-text2 fgc-red fnt-bold mb-30">
                  {renderProps.errors.name && renderProps.touched.name ? (
                    <p>
                      {renderProps.errors.name}
                    </p>
                  ) : null}
                  {renderProps.errors.email && renderProps.touched.email ? (
                    <p>
                      {renderProps.errors.email}
                    </p>
                  ) : null}
                  {renderProps.errors.phone && renderProps.touched.phone ? (
                    <p>
                      {renderProps.errors.phone}
                    </p>
                  ) : null}
                  {renderProps.errors.date && renderProps.touched.date ? (
                    <p>
                      {renderProps.errors.date}
                    </p>
                  ) : null}
                  {renderProps.errors.gender && renderProps.touched.gender ? (
                    <p>
                      {renderProps.errors.gender}
                    </p>
                  ) : null}
                  {renderProps.errors.password && renderProps.touched.password ? (
                    <p>
                      {renderProps.errors.password}
                    </p>
                  ) : null}
                  {renderProps.errors.password2 && renderProps.touched.password2 ? (
                    <p>
                      {renderProps.errors.password2}
                    </p>
                  ) : null}
                  {renderProps.errors.terms && renderProps.touched.terms ? (
                    <p>
                      {renderProps.errors.terms}
                    </p>
                  ) : null}
                  {renderProps.errors.recaptcha && renderProps.touched.recaptcha ? (
                    <p>
                      {renderProps.errors.recaptcha}
                    </p>
                  ) : null}
                  {registerErrors && (
                    <p>
                      There is already an account with this phone number or email
                    </p>
                  )}
                  {/* {registerErrors &&
              registerErrors.map(regErr => (
                <p className="fnt-text2 fgc-red fnt-bold">{regErr}</p>
                  {loading && <Spinner className="SignUp--loading" />}
              ))} */}

                </div>
              </Col>
              <Col sm={6}>
                <Input
                  type="text"
                  labelPosition="top"
                  className="mb-20"
                  onChange={renderProps.handleChange}
                  onBlur={renderProps.handleBlur}
                  value={renderProps.values.name}
                  name="name"
                  maxLength="30"
                  required
                  placeholder="Name"
                />
              </Col>
              <Col sm={6}>
                <Input
                  type="email"
                  labelPosition="top"
                  className="mb-20"
                  onChange={renderProps.handleChange}
                  onBlur={renderProps.handleBlur}
                  value={renderProps.values.email}
                  name="email"
                  maxLength="50"
                  required
                  placeholder="Email"
                />
              </Col>
              <Col sm={6}>
                <Input
                  type="phone"
                  labelPosition="top"
                  className="mb-20"
                  onChange={renderProps.handleChange}
                  onBlur={renderProps.handleBlur}
                  value={renderProps.values.phone}
                  name="phone"
                  maxLength="30"
                  required
                  placeholder="Phone Number"
                />
              </Col>
              <Col sm={6}>
                <Input
                  title="Date of Birth"
                  type={dobInputType}
                  labelPosition="top"
                  className="mb-20"
                  onChange={renderProps.handleChange}
                  onBlur={renderProps.handleBlur}
                  value={renderProps.values.date}
                  name="date"
                  min="1920-01-01"
                  required
                  placeholder="Date of Birth"
                  onFocus={() => {setDobInputType("date")}}
                />
              </Col>
              <Col sm={6}>
                <Input
                  type="password"
                  labelPosition="top"
                  className="mb-20"
                  onChange={renderProps.handleChange}
                  onBlur={renderProps.handleBlur}
                  value={renderProps.values.password}
                  name="password"
                  maxLength="50"
                  required
                  placeholder="Password"
                />
              </Col>
              <Col sm={6}>
                <Input
                  type="password"
                  labelPosition="top"
                  className="mb-20"
                  onChange={renderProps.handleChange}
                  onBlur={renderProps.handleBlur}
                  value={renderProps.values.password2}
                  name="password2"
                  maxLength="50"
                  required
                  placeholder="Retype password"
                />
              </Col>
              <Col sm={6}>
                <div  className="mb-20 mt-15">
                  <div>
                    <RadioButton
                      value="female"
                      name="gender"
                      onChange={renderProps.handleChange}
                      onBlur={renderProps.handleBlur}
                    >
                      Female
                    </RadioButton>
                    <RadioButton
                      value="male"
                      name="gender"
                      onChange={renderProps.handleChange}
                      onBlur={renderProps.handleBlur}
                    >
                      Male
                    </RadioButton>
                    <RadioButton
                      value="other"
                      name="gender"
                      onChange={renderProps.handleChange}
                      onBlur={renderProps.handleBlur}
                    >
                      Other
                    </RadioButton>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <Input
                  type="text"
                  labelPosition="top"
                  className="mb-20"
                  onChange={renderProps.handleChange}
                  onBlur={renderProps.handleBlur}
                  value={renderProps.values.referral}
                  name="referral"
                  maxLength="30"
                  placeholder="Use referral code"
                />
              </Col>
              <Col sm={12}>
                <Checkbox
                  className="mb-20"
                  onChange={renderProps.handleChange}
                  onBlur={renderProps.handleBlur}
                  value={renderProps.values.terms}
                  name="terms"
                  checked={renderProps.values.terms}
                  required
                >
                  By signing up I agree with <span>Terms and Conditions</span>
                </Checkbox>
              </Col>
              <Col sm={12}>
                <div className="mb-20">
                  <ReCAPTCHA
                    sitekey="6LeM77QUAAAAADOth10v7zcoDY2Qo8syPEp7Yp6F"
                    render="explicit"
                    onChange={response => {
                      renderProps.setFieldValue("recaptcha", response);
                    }}
                  />
                </div>
              </Col>
              <Col sm={12}>
                <div   className="mb-20">
                  <button
                    type="submit"
                    className="btn btn2 fnt-button3 bgc-darkOrange bgch-lightOrange fgc-white mr-30 mb-20  display-inline"
                  >
                    Sign Up
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </form>
      )}
    />
  );
}

SignUp.defaultProps = {
  className: undefined
};

SignUp.propTypes = {
  className: PropTypes.string
};
