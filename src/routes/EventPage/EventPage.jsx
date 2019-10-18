/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import EventBox from "../../components/EventBox";
import MapCard from "../../components/MapCard";
import TermsAndConditions from "../../components/TermsAndConditions";
import PreviousEvents from "../../components/PreviousEvents";
import Breadcrumbs from "../../components/Breadcrumbs";
import TabNav from "../../components/TabNav";
import Spinner from "../../components/Spinner";
import RegistrationForm from "../../components/RegistrationForm";
import Modal from "../../components/Modal";
import {
  iniEvent,
  setActiveTab,
  addToCart
} from "../../redux/modules/eventInfo";
import "./EventPage.css";

const mapStateToProps = state => ({
  tabs: state.eventState.tabs,
  activeTab: state.eventState.activeTab,
  eventInfo: state.eventState.eventInfo,
  apiLoading: state.apiState.apiLoading,
  apiError: state.apiState.apiError
});

const mapDispatchToProps = { iniEvent, setActiveTab, addToCart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function EventPage({
  match,
  className,
  tabs,
  activeTab,
  eventInfo,
  apiLoading,
  apiError,
  iniEvent: iniEventDispatcher,
  setActiveTab: setActiveTabDispatcher,
  addToCart: addToCartDispatcher
}) {
  const [badPage, setBadPage] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategoryDetails, setSelectedCategoryDetails] = useState(null);

  useEffect(() => {
    console.log("Component Mounted");
    console.log("ZZZZ");
    // setTimeout(() => {
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // }, 500);

    if (isNaN(match.params.id)) {
      setBadPage(true);
    } else {
      iniEventDispatcher(Number(match.params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log("XXX");
  //   setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, 5);
  // }, [apiLoading]);

  useEffect(() => {
    if (!selectedCategoryDetails) return;
    setModalOpen(true);
  }, [selectedCategoryDetails]);

  const registrationHandler = (
    categoryId,
    categoryName,
    categoryPrice,
    categoryDescription
  ) => {
    setSelectedCategoryDetails({
      id: categoryId,
      name: categoryName,
      price: categoryPrice,
      description: categoryDescription
    });
  };

  const submitHandler = submission => {
    console.log("SUBMIT HANDLER");
    // console.log("SUBMISSION:", submission);
    // console.log("Category Id:", selectedCategoryDetails.id);
    setModalOpen(false);
    addToCartDispatcher(selectedCategoryDetails.id, submission);
    //
    // send server with submission
    // add to cart after submission successful
    // then redirect to cart
  };

  const modalCloseHandler = () => {
    setModalOpen(!modalOpen);
  };

  if (apiLoading || !eventInfo) return <div className="EventPage--container" />;

  if (apiError || badPage) return <Redirect to="/404" />;

  console.log("EVENT INFO: ", eventInfo);
  return (
    <div className="EventPage--container">
      <Modal
        isOpen={modalOpen}
        closeHandler={modalCloseHandler}
        overflow="auto"
      >
        <RegistrationForm
          header="Register For Event"
          details={selectedCategoryDetails}
          maxParticipants={eventInfo.maxParticipants}
          form={eventInfo.form}
          submitHandler={submitHandler}
        />
      </Modal>
      <main>
        <div className="EventPage--header">
          <Breadcrumbs />
          <h1 className="fnt-title1 fgc-darkOrange">EVENTS</h1>
        </div>
        <EventBox
          eventName={eventInfo.name}
          image={eventInfo.image}
          gallery={eventInfo.gallery}
          sport={eventInfo.sport}
          startDate={eventInfo.startDate}
          endDate={eventInfo.endDate}
          startTime={eventInfo.startTime}
          endTime={eventInfo.endTime}
          organizerName={eventInfo.organizer}
          complexName={eventInfo.complexName}
          complexAddress={eventInfo.complexAddress}
          complexCity={eventInfo.complexCity}
          eventCategories={eventInfo.eventCategories}
          registrationHandler={registrationHandler}
        />

        <TabNav
          tabs={{
            eventDetails: eventInfo.description,
            previousEvent: false,
            contactUs: true,
            termsAndConditions: eventInfo.termsAndConditions
          }}
          activeTab={activeTab}
          tabHandler={setActiveTabDispatcher}
        />
        <section>
          {activeTab === "eventDetails" && (
            <div>
              <h3 className="fnt-subtitle1 fgc-black ArenaPage--header">
                Event Details
              </h3>
              <p className="fnt-text1 fgc-gray">{eventInfo.description}</p>
            </div>
          )}
          {activeTab === "previous event" && <PreviousEvents />}
          {activeTab === "contactUs" && (
            <div>
              <h3 className="fnt-subtitle1 fgc-black ArenaPage--header">
                Contact Us
              </h3>
              <MapCard
                name={eventInfo.complexName}
                address={eventInfo.complexAddress}
                email={eventInfo.complexEmail}
                phone={eventInfo.complexPhone}
                socialMedia={eventInfo.complexSocialMedia}
              />
            </div>
          )}
          {activeTab === "termsAndConditions" && (
            <div>
              <h3 className="fnt-subtitle1 fgc-black ArenaPage--header">
                Terms And Conditions
              </h3>
              {eventInfo.termsAndConditions && (
                <TermsAndConditions
                  termsAndConditions={eventInfo.termsAndConditions}
                />
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
});
