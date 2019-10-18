import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { handleSportModal, handleCityModal, handleBookAndPlay, setRedirectAfterBookNPlay} from "../../redux/modules/siteInfo";
import Wedge from "../../components/Wedge";
import WorkImage from "../../assets/images/work.png";
import ShootBallIcon from "../../assets/images/shoot_ball.svg";
import PartnerImg from "../../assets/images/partner_with_us.svg";
import partimg from "../../assets/images/partimg_crop.png";
import EventsCarousel from "../../components/EventsCarousel";
import OffersCarousel from "../../components/OffersCarousel";
import BannersCarousel from "../../components/BannersCarousel";
import Modal from "../../components/Modal";
import OffersModal2 from "../../components/OffersModal2";

import HomeFts from "../../components/HomeFts";
import "./HomePage.css";

const mapStateToProps = state => ({
  siteInfo: state.siteState.siteInfo,
  banners: state.siteState.banners,
  quote: state.siteState.quote,
  offers: state.siteState.offers,
  events: state.siteState.events,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError,
  selected_city: state.siteState.selected_city,
  selected_sport: state.siteState.selected_sport
});

const mapDispatchToProps = { handleSportModal, handleCityModal, handleBookAndPlay, setRedirectAfterBookNPlay };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function HomePage({
  siteInfo,
  banners,
  quote,
  offers,
  events,
  apiLoading,
  apiError,
  selected_city,
  selected_sport,
  handleSportModal: handleSportModalDispatcher,
  handleCityModal: handleCityModalDispatcher,
  handleBookAndPlay: handleBookAndPlayDispatcher,
  setRedirectAfterBookNPlay: setRedirectAfterBookNPlayDispatcher
}) {
  const [offerModalOpen, setOfferModalOpen] = useState(false);
  //const [sportValue, setSportValue] = useState(localStorage.getItem("userSport"));
  if (apiLoading || !siteInfo) return <div className="ArenaPage--container" />;

  //if (apiError) return <Redirect to="/404" />;
  return (
    <div className="HomePage--container">
      <Modal
        isOpen={offerModalOpen}
        closeHandler={() => setOfferModalOpen(false)}
        overflow="auto"
      >
        <OffersModal2 offers={offers} />
      </Modal>
      <BannersCarousel banners={banners} />
      <div className="HomePage--works">
        <h3 className="fnt-title2 fgc-black">HOW IT WORKS?</h3>
        <img src={WorkImage} alt="how it works" />
        <div>
          <div>
            <p className="fnt-subtitle2 fgc-black fnt-bold">Want to play a sport?</p>
            <div
              onClick={() => {
                setRedirectAfterBookNPlayDispatcher(true);
                if (selected_city === null) {
                  handleCityModalDispatcher(true);
                } else if (selected_sport === null) {
                  handleSportModalDispatcher(true);
                } else {
                  handleBookAndPlayDispatcher();
                }
              }}
              className="btn btn1 fnt-button1 fgc-white bgc-lightOrange btn-skewed fnt-noline"
            >
              <span>BOOK N PLAY</span>
            </div>
            {/* <button
              type="button"
              className="btn btn1 fnt-button1 fgc-white bgc-lightOrange btn-skewed"
            >
              <span>BOOK N PLAY</span>
            </button> */}
          </div>
          <div>
            <p className="fnt-subtitle2 fgc-black fnt-bold">
              Looking for a sports trainer?
            </p>
            <button
              type="button"
              className="btn btn1 fnt-button1 fgc-white bgc-darkOrange btn-skewed"
            >
              <span>LEARN A SPORT</span>
            </button>
          </div>
        </div>
      </div>
      <div className="HomePage--events">
        <div>
          <div>
            <p className="fnt-title1 fgc-lightOrange">EVENTS</p>
          </div>
          <p className="fnt-subtitle4 fgc-white">
            Look for the coming events to choose the best for you
          </p>
        </div>
        <EventsCarousel events={events} />
        <Link
          to="/events/"
          className="btn btn3 fnt-button3 bgc-black brdc-white fgc-white btn-skewed fnt-noline"
        >
          <span>View all</span>
        </Link>
      </div>
      <div className="HomePage--offers" id="offers">
        <h3 className="fnt-title1 fgc-lightOrange">BEST OFFERS</h3>
        <OffersCarousel offers={offers.map(offer => offer.image)} />
        <button
          type="button"
          className="btn btn3 fnt-button3 bgc-white brdc-black fgc-black btn-skewed"
          onClick={() => setOfferModalOpen(true)}
        >
          <span>View all</span>
        </button>
      </div>
      <HomeFts />
      <div id="partner" className="HomePage--partner" style={{ backgroundImage: `url('${partimg}')` }}>
        <img src={PartnerImg} alt="partner with us" />
        <div>
          <h3 className="fnt-title2 fgc-black">WHY PARTNER WITH US?</h3>
          <p className="fnt-text1 fgc-black">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing
          </p>
          <button
            type="button"
            className="btn btn1 fnt-button1 fgc-white bgc-darkOrange btn-skewed"
          >
            <span>PARTNER WITH US</span>
          </button>
        </div>
      </div>
      <div className="HomePage--quote">
        <p>“</p>
        <h3 className="fnt-title1 fgc-white">{quote}</h3>
      </div>
      {/* <Wedge type={1} top="white" bottom="black" />
      <Wedge type={1} top="black" bottom="white" />
      <Wedge type={2} top="white" bottom="black" />
      <Wedge type={2} top="black" bottom="white" /> */}
    </div>
  );
});

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Banners from "../../components/Banners";
// import Banner1 from "../../assets/images/learn-a-sport-banner-3.jpg";
// import Banner2 from "../../assets/images/book-and-play-banner-3.jpg";
// import Banner3 from "../../assets/images/111.jpg";
// import Banner4 from "../../assets/images/222.jpg";
// import Quote from "../../components/Quote";
// import HowWorks from "../../components/HowWorks";
// import EventsHome from "../../components/EventsHome";
// import PlayPoints from "../../components/PlayPoints";
// import ClubsCard from "../../components/ClubsCard";
// import EventCard from "../../components/EventCard";
// import BookNPlayCard from "../../components/BookNPlayCard";
// import SportsCard from "../../components/SportsCard";
// import BestOffers from "../../components/BestOffers";
// import Partner from "../../components/Partner";
// import SkewedRectangle from "../../components/SkewedRectangle";
// import "./HomePage.css";

// export default function HomePage() {
//   return (
//     <div className="HomePage--container">
//       <Banners images={[Banner1, Banner2, Banner3, Banner4]} />
//       <Quote />
//       <HowWorks />
//       <SkewedRectangle top="white" bottom="black" />
//       {/* <EventsHome /> */}
//       <SkewedRectangle top="black" bottom="white" />
//       {/* <BestOffers /> */}
//       <SkewedRectangle top="white" bottom="black" />
//       <PlayPoints />
//       <SkewedRectangle top="black" bottom="white" />
//       <Partner />
//     </div>
//   );
// }
