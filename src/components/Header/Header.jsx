/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import SlideMenu from "../SlideMenu";
import { slide as Menu } from "react-burger-menu";
import { logout, setCity, setSport } from "../../redux/modules/userInfo";
import { handleSportModal, handleCityModal, setSelectedCity, setSelectedSport, setGeneralSiteInfo, handleBookAndPlay } from "../../redux/modules/siteInfo";
import Modal from "../Modal";
import SelectCity from "../SelectCity";
import SelectSport from "../SelectSport";
import SiteLogo from "../../assets/images/logo.png";
import OfficeIcon from "../../assets/images/office-building.svg";
import Polygon1 from "../../assets/images/Polygon.svg";
import Polygon2 from "../../assets/images/Polygon-2.svg";
import ShootBallIcon from "../../assets/images/shoot_ball.svg";
import Hamburger from "../../assets/images/hamburger.svg";
import OffersIcon from "../../assets/images/vector-2.svg";
import Spinner from "../Spinner";
import CoinsPoints from "../CoinsPoints";
import HeaderUserMenu from "../HeaderUserMenu";
import PhoneEmail from "../PhoneEmail";
import SocialMedia from "../SocialMedia";
import HamburgerMenu from "../HamburgerMenu";
import "./Header.css";

const CartIcon = () => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="Header--cartIcon"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.56081 22.8864C7.03161 22.8864 5.78045 24.1376 5.78045 25.6668C5.78045 27.196 7.03161 28.4472 8.56081 28.4472C10.09 28.4472 11.3412 27.196 11.3412 25.6668C11.3412 24.1376 10.09 22.8864 8.56081 22.8864ZM0.219727 0.643555V3.42391H3.00009L8.00473 13.9893L6.05848 17.3257C5.91946 17.7428 5.78045 18.2988 5.78045 18.7159C5.78045 20.2451 7.03161 21.4963 8.56081 21.4963H25.243V18.7159H9.11688C8.97786 18.7159 8.83884 18.5769 8.83884 18.4379V18.2988L10.09 15.9355H20.3773C21.4895 15.9355 22.3236 15.3795 22.7406 14.5454L27.7453 5.50918C28.0233 5.23115 28.0233 5.09213 28.0233 4.81409C28.0233 3.97999 27.4673 3.42391 26.6331 3.42391H6.05848L4.80732 0.643555H0.219727ZM22.4626 22.8864C20.9334 22.8864 19.6822 24.1376 19.6822 25.6668C19.6822 27.196 20.9334 28.4472 22.4626 28.4472C23.9918 28.4472 25.243 27.196 25.243 25.6668C25.243 24.1376 23.9918 22.8864 22.4626 22.8864Z"
      fill="white"
    />
  </svg>
);

const mapStateToProps = state => ({
  email: state.siteState.email,
  phone: state.siteState.phone,
  socialMedia: state.siteState.socialMedia,
  cities: state.siteState.cities,
  sports: state.siteState.sports,
  sportModalOpen: state.siteState.sportModalOpen,
  cityModalOpen: state.siteState.cityModalOpen,
  selected_city: state.siteState.selected_city,
  selected_sport: state.siteState.selected_sport,
  userInfo: state.userState.id,
  username: state.userState.name,
  avatar: state.userState.avatar,
  points: state.userState.points,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError,
  userLoading: state.userState.userLoading,
  redirectAfterBookNPlay: state.siteState.redirectAfterBookNPlay
});

const mapDispatchToProps = {
  logout,
  setCity,
  setSport,
  handleSportModal,
  handleCityModal,
  setGeneralSiteInfo,
  setSelectedCity,
  setSelectedSport,
  handleBookAndPlay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Header({
  email,
  phone,
  socialMedia,
  cities,
  sports,
  sportModalOpen,
  cityModalOpen,
  userInfo,
  username,
  avatar,
  points,
  apiLoading,
  apiError,
  userLoading,
  selected_city,
  selected_sport,
  redirectAfterBookNPlay,
  logout: logoutDispatcher,
  setCity: setCityDispatcher,
  setSport: setSportDispatcher,
  handleSportModal: handleSportModalDispatcher,
  handleCityModal: handleCityModalDispatcher,
  setGeneralSiteInfo: setGeneralSiteInfoDispatcher,
  setSelectedCity: setSelectedCityDispatcher,
  setSelectedSport: setSelectedSportDispatcher,
  handleBookAndPlay: handleBookAndPlayDispatcher
}) {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const logoutHandler = () => {
    logoutDispatcher();
  };
  const setUserCity = city => {
    if (!city) return;
    localStorage.setItem("userCity", city);
    setGeneralSiteInfoDispatcher();
    setCityDispatcher(city);
  };

  const setUserSport = sport => {
    if (!sport) return;
    localStorage.setItem("userSport", sport);
    setGeneralSiteInfoDispatcher();
    setSportDispatcher(sport);
    if(redirectAfterBookNPlay){
      handleBookAndPlayDispatcher();
    }
  };

  return (
    <div className="Header--container">
      <img src={Polygon1} className="header-shape-1" />
      <img src={Polygon2} className="header-shape-2" />
      <HamburgerMenu
        isOpen={hamburgerMenuOpen}
        handleClose={() => setHamburgerMenuOpen(false)}
      >
        {userLoading ? (
          <Spinner />
        ) : userInfo === null ? (
          <>
            <button
              type="button"
              className="btn btn4 fnt-text1 bgc-black fgc-lightOrange brdc-lightOrange"
            >
              <Link to="/login">Log In</Link>
            </button>
            <button
              type="button"
              className="btn btn4 fnt-text1 bgc-lightOrange fgc-black"
            >
              <Link to="/register">Sign Up</Link>
            </button>
          </>
        ) : (
          <>
            <Link to="/cart">
              <CartIcon />
            </Link>
            <CoinsPoints points={points} />
            <HeaderUserMenu
              username={username}
              avatar={avatar}
              logoutHandler={logoutHandler}
            />
          </>
        )}
      </HamburgerMenu>
      {/* <SlideMenu
        isOpen={slideMenuOpen}
        handleClose={() => setSlideMenuOpen(false)}
      >
        <div className="Header--right">
          {userLoading ? (
            <Spinner />
          ) : userInfo === null ? (
            <>
              <button
                type="button"
                className="btn btn4 fnt-text1 bgc-black fgc-lightOrange brdc-lightOrange"
              >
                <Link to="/login">Log In</Link>
              </button>
              <button
                type="button"
                className="btn btn4 fnt-text1 bgc-lightOrange fgc-black"
              >
                <Link to="/register">Sign Up</Link>
              </button>
            </>
          ) : (
            <>
              <Link to="/cart">
                <CartIcon />
              </Link>
              <CoinsPoints points={points} />
              <HeaderUserMenu
                username={username}
                avatar={avatar}
                logoutHandler={logoutHandler}
              />
            </>
          )}
        </div>
      </SlideMenu> */}
      <Modal
        isOpen={cityModalOpen}
        closeHandler={() => handleCityModalDispatcher(false)}
        overflow="visible"
      >
        <SelectCity
          cities={cities || []}
          setUserCity={setUserCity}
          loading={cities ? apiLoading : true}
          userSelectedCity={selected_city}
          error={apiError}
        />
      </Modal>
      <Modal
        isOpen={sportModalOpen}
        closeHandler={() => handleSportModalDispatcher(false)}
        overflow="visible"
      >
        <SelectSport
          sportCategories={sports || []}
          setUserSport={setUserSport}
          loading={sports ? apiLoading : true}
          userSelectedSport={selected_sport}
          error={apiError}
        />
      </Modal>
      <div className="Header--top">
        <div className="Header--left">
          <Link to="/">
            <img src={SiteLogo} alt="site logo" className="Header--siteLogo" />
          </Link>
          <button
            type="button"
            className="btn btn4 fnt-text1 bgc-lightOrange fgc-white btn-icon"
            onClick={() => handleCityModalDispatcher(true)}
          >
            <img src={OfficeIcon} alt="select city" />
            <span> {selected_city ? selected_city : "Select City"}</span>
          </button>
          <button
            type="button"
            className="btn btn4 fnt-text1 bgc-lightOrange fgc-white btn-icon"
            onClick={() => handleSportModalDispatcher(true)}
          >
            <img src={ShootBallIcon} alt="select sport" />
            <span> {selected_sport ? selected_sport : "Select Sport"}</span>
          </button>
        </div>
        <div className="Header--right">
          <div className="Header--contact">
            <div className="Header--contact--top">
              {socialMedia && (
                <SocialMedia socialMedia={socialMedia} color="black" />
              )}
            </div>
            <div className="Header--contact--bottom">
              {phone && (
                <PhoneEmail type="phone" color="black">
                  {phone}
                </PhoneEmail>
              )}
              {email && (
                <PhoneEmail type="email" color="black">
                  {email}
                </PhoneEmail>
              )}
            </div>
          </div>
          <img
            src={Hamburger}
            alt="hamburger icon"
            onClick={() => setHamburgerMenuOpen(true)}
            className="Header--hamburger"
          />
        </div>
      </div>
      <div className="Header--bottom">
        <div className="Header--left">
          <a className="Header--offersIcon" href="/#offers">
            <img src={OffersIcon} alt="offers icon" />
            <p className="fnt-text1 fgc-black fgch-white ">Offers</p>
          </a>
          <a
            href="/#partner"
            className="btn btn6 fnt-text1 fnt-bold bgc-black fgc-white brdc-white btn-skewed brdch-lightOrange fgch-lightOrange"
          >
            <span>Partner With Us</span>
          </a>
          {/* <button
            type="button"
            className="btn btn6 fnt-text1 fnt-bold bgc-black fgc-lightOrange brdc-lightOrange btn-rounded"
          >
            CLUBS
          </button> */}
          <Link
            to="/clubs"
            className="btn btn6 fnt-text1 fnt-bold bgc-black fgc-lightOrange brdc-lightOrange btn-rounded fnt-noline fgch-white brdch-white"
          >
            CLUBS
          </Link>
        </div>
        <div className="Header--right">
          {userLoading ? (
            <Spinner />
          ) : userInfo === null ? (
            <>
              <button
                type="button"
                className="btn btn4 fnt-text1 bgc-black fgc-lightOrange brdc-lightOrange bgch-lightOrange fgch-black"
              >
                <Link to="/login">Log In</Link>
              </button>
              <button
                type="button"
                className="btn btn4 fnt-text1 bgc-lightOrange brdc-lightOrange fgc-black bgch-black fgch-lightOrange"
              >
                <Link to="/register">Sign Up</Link>
              </button>
            </>
          ) : (
            <>
              <Link to="/cart">
                <CartIcon />
              </Link>
              <CoinsPoints points={points} />
              <HeaderUserMenu
                username={username}
                avatar={avatar}
                logoutHandler={logoutHandler}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
});
