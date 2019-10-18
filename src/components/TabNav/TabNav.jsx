import React from "react";
import "./TabNav.css";

export default function TabNav({ tabs, activeTab, tabHandler }) {
  return (
    <div className="TabNav--container">
      {tabs.about && (
        <p
          onClick={
            activeTab !== "about" ? () => tabHandler("about") : undefined
          }
          className={`fnt-subtitle2 fgc-black${
            activeTab === "about" ? " TabNav--activeTab" : ""
          }`}
        >
          About
        </p>
      )}
      {tabs.news && (
        <p
          onClick={activeTab !== "news" ? () => tabHandler("news") : undefined}
          className={`fnt-subtitle2 fgc-black${
            activeTab === "news" ? " TabNav--activeTab" : ""
          }`}
        >
          News
        </p>
      )}
      {tabs.players && (
        <p
          onClick={
            activeTab !== "players" ? () => tabHandler("players") : undefined
          }
          className={`fnt-subtitle2 fgc-black${
            activeTab === "players" ? " TabNav--activeTab" : ""
          }`}
        >
          Players
        </p>
      )}
      {tabs.events && (
        <p
          onClick={
            activeTab !== "events" ? () => tabHandler("events") : undefined
          }
          className={`fnt-subtitle2 fgc-black${
            activeTab === "events" ? " TabNav--activeTab" : ""
          }`}
        >
          Events
        </p>
      )}
      {tabs.reviews && (
        <p
          onClick={
            activeTab !== "reviews" ? () => tabHandler("reviews") : undefined
          }
          className={`fnt-subtitle2 fgc-black${
            activeTab === "reviews" ? " TabNav--activeTab" : ""
          }`}
        >
          Reviews
        </p>
      )}
      {tabs.eventDetails && (
        <p
          onClick={
            activeTab !== "eventDetails"
              ? () => tabHandler("eventDetails")
              : undefined
          }
          className={`fnt-subtitle2 fgc-black${
            activeTab === "eventDetails" ? " TabNav--activeTab" : ""
          }`}
        >
          Event Details
        </p>
      )}
      {tabs.previousEvent && (
        <p
          onClick={
            activeTab !== "previousEvent"
              ? () => tabHandler("previousEvent")
              : undefined
          }
          className={`fnt-subtitle2 fgc-black${
            activeTab === "previousEvent" ? " TabNav--activeTab" : ""
          }`}
        >
          Previous Event
        </p>
      )}
      {tabs.contactUs && (
        <p
          onClick={
            activeTab !== "contactUs"
              ? () => tabHandler("contactUs")
              : undefined
          }
          className={`fnt-subtitle2 fgc-black${
            activeTab === "contactUs" ? " TabNav--activeTab" : ""
          }`}
        >
          Contact Us
        </p>
      )}
      {tabs.termsAndConditions && (
        <p
          onClick={
            activeTab !== "termsAndConditions"
              ? () => tabHandler("termsAndConditions")
              : undefined
          }
          className={`fnt-subtitle2 fgc-black${
            activeTab === "termsAndConditions" ? " TabNav--activeTab" : ""
          }`}
        >
          Terms and Conditions
        </p>
      )}
    </div>
  );
}
