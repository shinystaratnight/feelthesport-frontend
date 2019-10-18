/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import BookingDates from "../../components/BookingDates";
import TimeSlotsBox from "../../components/TimeSlotsBox";
import MembershipBox from "../../components/MembershipBox";
import Spinner from "../../components/Spinner";
import {
  initBooking,
  setActiveDate,
  setSlots,
  setPlayers,
  addToCart
} from "../../redux/modules/bookingInfo";
import "./BookingPage.css";

const mapStateToProps = state => ({
  type: state.bookingState.type,
  bookingInfo: state.bookingState.bookingInfo,
  activeDate: state.bookingState.activeDate,
  activeTab: state.bookingState.activeTab,
  slots: state.bookingState.slots,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError
});

const mapDispatchToProps = {
  initBooking,
  setActiveDate,
  setSlots,
  setPlayers,
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function BookingPage({
  match,
  location,
  type,
  bookingInfo,
  activeDate,
  activeTab,
  slots,
  apiLoading,
  apiError,
  initBooking: initBookingDispatcher,
  setActiveDate: setActiveDateDispatcher,
  setSlots: setSlotsDispatcher,
  setPlayers: setPlayersDispatcher,
  addToCart: addToCartDispatcher
}) {
  const [badPage, setBadPage] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isNaN(match.params.arenaId) || isNaN(match.params.bookaslotId)) {
      setBadPage(true);
    } else {
      initBookingDispatcher(
        Number(match.params.arenaId),
        Number(match.params.bookaslotId),
        match.params.type
      );
    }
  }, []);

  if (apiLoading || !bookingInfo)
    return <div className="BookingPage--container" />;

  if (apiError || badPage) return <Redirect to="/404" />;

  return (
    <div className="BookingPage--container">
      <main>
        <div>
          <Breadcrumbs />
          <h1 className="fnt-title1 fgc-darkOrange">
            {type === "bookaslot"
              ? "BOOK A SLOT"
              : type === "membership"
              ? "MEMBERSHIP"
              : type === "coaching"
              ? "COACHING"
              : ""}
          </h1>
        </div>
        <div className="BookingPage--info">
          <h2 className="fnt-subtitle1 fgc-black fnt-bold">
            {bookingInfo.arenaName}
          </h2>
          <p className="fnt-subtitle2 fgc-gray fnt-bold">{bookingInfo.sport}</p>
          <p className="fnt-subtitle2 fgc-gray fnt-bold">{`Rs ${
            bookingInfo.costPerHour
          } / hour`}</p>
          <Link
            to={`/arena/${bookingInfo.arenaId}/${bookingInfo.sport}`}
            className="fnt-subtitle2 fgc-gray fnt-bold fnt-noline"
          >
            Info
          </Link>
        </div>
        {/* //////////////// */}
        {type === "membership" && (
          <div>
            <div className="BookingPage--nav">
              <div />
              <p
                className={`fnt-button2 fgc-black${
                  activeTab === "membership" ? " BookingPage--activeTab" : ""
                }`}

              >
                Membership
              </p>
              <p
                className={`fnt-button2 fgc-black${
                  activeTab === "booking" ? " BookingPage--activeTab" : ""
                }`}

              >
                Member slot booking
              </p>
              <div />
            </div>
            <div className="BookingPage--membership">
              <MembershipBox />
              <MembershipBox />
              <MembershipBox />
            </div>
          </div>
        )}
        {/* //////////////// */}
        {(!activeTab || activeTab === "slots") && (
          <BookingDates
            dates={Object.keys(slots)}
            activeDate={activeDate}
            dateHandler={setActiveDateDispatcher}
          />
        )}

        {(!activeTab || activeTab === "slots") &&
          Object.entries(bookingInfo.courts).map(([courtId, court], index) => (
            <TimeSlotsBox
              key={index}
              courtIndex={index}
              courtId={courtId}
              courtType={court.type}
              minPlayers={court.minPlayers}
              maxPlayers={court.maxPlayers}
              slotTimes={bookingInfo.slotTimes[courtId]}
              currentCourt={slots[activeDate][courtId]}
              price={bookingInfo.price}
              chargePerPlayer={bookingInfo.chargePerPlayer}
              activeDate={activeDate}
              slotHandler={setSlotsDispatcher}
              playerHandler={setPlayersDispatcher}
            />
          ))}

        <div className="BookingPage--totalCost">
          <p className="fnt-subtitle2 fgc-lightOrange fnt-bold">Back</p>
          <div>
            <p className="fnt-subtitle2 fgc-black">
              Total Cost:{" "}
              <span className="fgc-darkOrange fnt-bold">{`Rs ${Object.values(
                slots
              ).reduce(
                (dateTotal, dateValue) =>
                  dateTotal +
                  Object.values(dateValue).reduce(
                    (courtTotal, courtValue) =>
                      courtTotal + (Object.values(courtValue.slots).reduce(
                        (slotTotal, slotValue) =>
                          slotTotal + (slotValue === "selected" ? 1 : 0),
                        0
                      ) *
                      (bookingInfo.chargePerPlayer ? courtValue.players : 1)),
                    0
                  ),
                0
              ) * bookingInfo.price}`}</span>
            </p>
            <button
              type="button"
              className="btn btn2 fnt-button2 fnt-bold bgc-white fgc-lightOrange brdc-lightOrange"
              onClick={() => addToCartDispatcher()}
            >
              Proceed
            </button>
          </div>
          <div />
        </div>
      </main>
    </div>
  );
});
