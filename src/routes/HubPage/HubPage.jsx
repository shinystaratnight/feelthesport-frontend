/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {
  initHub,
  setFilters,
  setActiveSportTab
} from "../../redux/modules/hubInfo";
import SlideMenu from "../../components/SlideMenu";
import BookNPlayCard from "../../components/BookNPlayCard";
import ClubsCard from "../../components/ClubsCard";
import EventsCard from "../../components/EventCard";
import SportsCard from "../../components/SportsCard";
import FiltersButton from "../../components/FiltersButton";
import Breadcrumbs from "../../components/Breadcrumbs";
import SortBy from "../../components/SortBy";
import Filters from "../../components/Filters";
import Spinner from "../../components/Spinner";
import SportNav from "../../components/SportNav";
import "./HubPage.css";

const mapStateToProps = state => ({
  type: state.hubState.type,
  activeSportTab: state.hubState.activeSportTab,
  filters: state.hubState.filters,
  cards: state.hubState.cards,
  trainers: state.hubState.trainers,
  cardsLoading: state.hubState.cardsLoading,
  trainersLoading: state.hubState.trainersLoading,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError,
  selected_city: state.siteState.selected_city,
  selected_sport: state.siteState.selected_sport
});

const mapDispatchToProps = { initHub, setFilters, setActiveSportTab };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function HubPage({
  selected_city,
  selected_sport,
  type,
  activeSportTab,
  filters,
  cards,
  trainers,
  cardsLoading,
  trainersLoading,
  apiLoading,
  apiError,
  initHub: initHubDispatcher,
  setFilters: setFiltersDispatcher,
  setActiveSportTab: setActiveSportTabDispatcher,
  location
}) {
  const [slideMenuOpen, setSlideMenuOpen] = useState(false);
  const [badPage, setBadPage] = useState(false);
  const [oldPage, setOldPage] = useState(null);

  useEffect(() => {
    if (location.pathname.split("/")[1] === oldPage) {
      //return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (location.pathname.startsWith("/booknplay")) {
      initHubDispatcher("booknplay");
      setOldPage("booknplay");
    } else if (location.pathname.startsWith("/clubs")) {
      initHubDispatcher("clubs");
      setOldPage("clubs");
    } else if (location.pathname.startsWith("/learnasport")) {
      initHubDispatcher("learnasport");
      setOldPage("learnasport");
    } else if (location.pathname.startsWith("/events")) {
      initHubDispatcher("events");
      setOldPage("events");
    } else {
      setBadPage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, selected_city, selected_sport]);

  const slideMenuHandler = () => {
    setSlideMenuOpen(!slideMenuOpen);
  };

  if (apiError || badPage) return <Redirect to="/404" />;

  if (apiLoading || !filters) return <div className="HubPage--container" />;

  const HubSpinner = () => (
    <div className="HubPage--spinner">
      <Spinner />
    </div>
  );

  let Cards;

  if (!type) {
    Cards = <HubSpinner />;
  } else if (type === "booknplay") {
    if (cardsLoading) {
      Cards = <HubSpinner />;
    } else if (!cards) {
      Cards = <HubSpinner />;
    } else if (cards.length !== 0) {
      Cards = cards.map((card, index) => (
        <BookNPlayCard data={card} key={index} />
      ));
    } else {
      Cards = <h1 className="fgc-darkOrange">FOUND NO ARENAS</h1>;
    }
  } else if (type === "clubs") {
    if (cardsLoading) {
      Cards = <HubSpinner />;
    } else if (!cards) {
      Cards = <HubSpinner />;
    } else if (cards.length !== 0) {
      Cards = cards.map((card, index) => <ClubsCard data={card} key={index} />);
    } else {
      Cards = <h1 className="fgc-darkOrange">FOUND NO ARENAS</h1>;
    }
  } else if (type === "events") {
    if (cardsLoading) {
      Cards = <HubSpinner />;
    } else if (!cards) {
      Cards = <HubSpinner />;
    } else if (cards.length !== 0) {
      Cards = cards.map((card, index) => (
        <EventsCard type={2} data={card} key={index} />
      ));
    } else {
      Cards = <h1 className="fgc-darkOrange">FOUND NO ARENAS</h1>;
    }
  } else if (type === "learnasport") {
    if (activeSportTab === "academy") {
      if (cardsLoading) {
        Cards = <HubSpinner />;
      } else if (!cards) {
        Cards = <HubSpinner />;
      } else if (cards.length !== 0) {
        Cards = cards.map((card, index) => (
          <SportsCard data={card} key={index} />
        ));
      } else {
        Cards = <h1 className="fgc-darkOrange">FOUND NO ARENAS</h1>;
      }
    } else if (activeSportTab === "trainer") {
      if (trainersLoading) {
        Cards = <HubSpinner />;
      } else if (!trainers) {
        Cards = <HubSpinner />;
      } else if (trainers.length !== 0) {
        Cards = trainers.map((trainer, index) => (
          <SportsCard data={trainer} key={index} />
        ));
      } else {
        Cards = <h1 className="fgc-darkOrange">FOUND NO TRAINERS</h1>;
      }
    }
  }
console.log(filters)
  return (
    <div className="HubPage--container">
      <div>
        <div className="HubPage--top">
          <Breadcrumbs />
          <h1 className="fgc-darkOrange">
            {type === "booknplay"
              ? "BOOK N PLAY"
              : type === "clubs"
              ? "CLUBS"
              : type === "learnasport"
              ? "LEARN A SPORT"
              : type === "events"
              ? "EVENTS"
              : ""}
          </h1>
        </div>
        <div className="HubPage--bottom">
          <div className="HubPage--left">
            <FiltersButton className="HubPage--left-FiltersButton" />
            <Filters
              filters={filters}
              filtersHandler={setFiltersDispatcher}
              className="HubPage--left-Filters"
            />
          </div>
          <div className="HubPage--right">
            <SortBy
              filtersHandler={setFiltersDispatcher}
              filters={filters}
              className="HubPage--sortBy"
            />
            {type === "learnasport" && (
              <SportNav
                activeTab={activeSportTab}
                tabHandler={setActiveSportTabDispatcher}
              />
            )}
            <div className="HubPage--right-FiltersButton">
              <FiltersButton onClick={slideMenuHandler} />
            </div>
            {Cards}
          </div>
        </div>
        <SlideMenu isOpen={slideMenuOpen} handleClose={slideMenuHandler}>
          <Filters filters={filters} filtersHandler={setFiltersDispatcher} />
        </SlideMenu>
      </div>
    </div>
  );
});
