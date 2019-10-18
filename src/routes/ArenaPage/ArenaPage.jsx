/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs";
import TabNav from "../../components/TabNav";
import ArenaBox from "../../components/ArenaBox";
import PriceTime from "../../components/PriceTime";
import AboutTab from "../../components/AboutTab";
import NewsTab from "../../components/NewsTab";
import PlayersTab from "../../components/PlayersTab";
import EventsTab from "../../components/EventsTab";
import ReviewsTab from "../../components/ReviewsTab";
import {
  initArena,
  setActiveTab,
  setActiveSport,
  submitReview,
  getReviews
} from "../../redux/modules/arenaInfo";
import "./ArenaPage.css";

const mapStateToProps = state => ({
  arenaInfo: state.arenaState.arenaInfo,
  reviewsInfo: state.arenaState.reviewsInfo,
  reviewsPage: state.arenaState.reviewsPage,
  activeTab: state.arenaState.activeTab,
  activeSport: state.arenaState.activeSport,
  reviewsLoading: state.arenaState.reviewsLoading,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError
});

const mapDispatchToProps = {
  initArena,
  setActiveTab,
  setActiveSport,
  getReviews,
  submitReview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ArenaPage({
  match,
  history,
  apiLoading,
  apiError,
  arenaInfo,
  reviewsInfo,
  reviewsPage,
  activeTab,
  activeSport,
  reviewsLoading,
  initArena: initArenaDispatcher,
  setActiveTab: setActiveTabDispatcher,
  setActiveSport: setActiveSportDispatcher,
  submitReview: submitReviewDispatcher,
  getReviews: getReviewsDispatcher
}) {
  const [badPage, setBadPage] = useState(false);
  useEffect(() => {
    console.log("Component Mounted");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isNaN(match.params.id)) {
      setBadPage(true);
    } else {
      initArenaDispatcher(Number(match.params.id), match.params.sport);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sportHandler = sport => {
    setActiveSportDispatcher(sport);
    history.push(`/arena/${arenaInfo.arenaId}/${sport}`);
  };

  if (apiLoading || !arenaInfo || !reviewsInfo)
    return <div className="ArenaPage--container" />;

  if (apiError || badPage) return <Redirect to="/404" />;

  console.log("ARENA INFO: ", arenaInfo);

  return (
    <div className="ArenaPage--container">
      <main>
        <div className="ArenaPage--header">
          <Breadcrumbs />
          <h1 className="fnt-title1 fgc-darkOrange">BOOKNPLAY</h1>
        </div>
        <ArenaBox
          arenaId={arenaInfo.arenaId}
          name={arenaInfo.arenaName}
          address={arenaInfo.address}
          rating={reviewsInfo.rating}
          image={arenaInfo.image}
          gallery={arenaInfo.gallery}
          socialMedia={arenaInfo.socialMedia}
          sports={arenaInfo.sports}
          courtTypes={arenaInfo.courtTypes}
          bookaslotId={arenaInfo.subscriptions[activeSport].bookaslots.id}
          activeSport={activeSport}
          sportHandler={sportHandler}
        />
        <PriceTime
          price={arenaInfo.costPerHour}
          openingTime={arenaInfo.openingTime}
          closingTime={arenaInfo.closingTime}
          workingDays={arenaInfo.workingDays}
        />
        <TabNav
          tabs={{
            about: true,
            news: arenaInfo.achievements || arenaInfo.news,
            players: arenaInfo.players,
            events:
              arenaInfo.pastEvents ||
              arenaInfo.presentEvents ||
              arenaInfo.futureEvents,
            reviews: arenaInfo.reviewCount !== 0 || reviewsInfo.canReview
          }}
          activeTab={activeTab}
          tabHandler={setActiveTabDispatcher}
        />
        <section>
          {activeTab === "about" && (
            <AboutTab
              facilities={arenaInfo.facilities}
              arenaName={arenaInfo.arenaName}
              address={arenaInfo.address}
              email={arenaInfo.email}
              phone={arenaInfo.phone}
              socialMedia={arenaInfo.socialMedia}
              bookaslots={arenaInfo.subscriptions[activeSport].bookaslots}
              memberships={arenaInfo.subscriptions[activeSport].memberships}
              coachings={arenaInfo.subscriptions[activeSport].coachings}
              boardMembers={arenaInfo.boardMembers}
              coaches={arenaInfo.coaches}
              offers={arenaInfo.offers}
              partners={arenaInfo.partners}
              termsAndConditions={arenaInfo.termsAndConditions}
            />
          )}

          {activeTab === "news" && (
            <NewsTab
              achievements={arenaInfo.achievements}
              news={arenaInfo.news}
            />
          )}
          {activeTab === "players" && (
            <PlayersTab players={arenaInfo.players} />
          )}
          {activeTab === "events" && (
            <EventsTab
              pastEvents={arenaInfo.pastEvents}
              presentEvents={arenaInfo.presentEvents}
              futureEvents={arenaInfo.futureEvents}
            />
          )}
          {activeTab === "reviews" && (
            <ReviewsTab
              rating={reviewsInfo.rating}
              ratingCount={reviewsInfo.ratingCount}
              reviewCount={reviewsInfo.reviewCount}
              reviews={reviewsInfo.reviews}
              canReview={reviewsInfo.canReview}
              reviewHandler={submitReviewDispatcher}
              reviewsPage={reviewsPage}
              getReviews={getReviewsDispatcher}
              loading={reviewsLoading}
            />
          )}
        </section>
      </main>
    </div>
  );
});
