import React, { useState } from "react";
import FacilitiesPanel from "../FacilitiesPanel";
import MapCard from "../MapCard";
import PeopleCarousel from "../PeopleCarousel";
import OffersCarousel from "../OffersCarousel";
import TermsAndConditions from "../TermsAndConditions";
import Partners from "../Partners";
import AboutStats from "../AboutStats";
import SubscriptionTable from "../SubscriptionTable";
import Modal from "../Modal";
import OffersModal2 from "../OffersModal2";
import "./AboutTab.css";

export default function AboutTab({
  facilities,
  arenaName,
  address,
  email,
  phone,
  socialMedia,
  bookaslots,
  memberships,
  coachings,
  boardMembers,
  coaches,
  offers,
  partners,
  termsAndConditions
}) {
  const [offerModalOpen, setOfferModalOpen] = useState(false);

  return (
    <div className="AboutTab--container">
      <Modal
        isOpen={offerModalOpen}
        closeHandler={() => setOfferModalOpen(false)}
        overflow="auto"
      >
        <OffersModal2 offers={offers} />
      </Modal>
      <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
        Facilities
      </h3>
      <FacilitiesPanel
        facilities={facilities}
        className="AboutTab--facilities"
      />
      <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
        Location
      </h3>
      <MapCard
        name={arenaName}
        address={address}
        email={email}
        phone={phone}
        socialMedia={socialMedia}
      />
      <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
        Our Service
      </h3>
      {memberships && (
        <SubscriptionTable type="membership" data={memberships} />
      )}
      {coachings && <SubscriptionTable type="coaching" data={coachings} />}
      {bookaslots && <SubscriptionTable type="bookaslot" data={bookaslots} />}
      {/* <AboutStats
        bookingCount={data.service.bookingCount}
        membershipCount={data.service.membershipCount}
        eventCount={data.service.eventCount}
      /> */}

      {boardMembers && (
        <>
          <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
            Our Board Members
          </h3>
          <PeopleCarousel people={boardMembers} />
        </>
      )}
      {coaches && (
        <>
          <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
            Our Coaches
          </h3>
          <PeopleCarousel people={coaches} />
        </>
      )}
      {offers && (
        <>
          <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
            Our Offers
          </h3>
          <OffersCarousel offers={offers.map(offer => offer.image)} />
          <button
            type="button"
            className="btn btn2 fnt-button2 bgc-white brdc-lightOrange fgc-lightOrange AboutTab--offersButton"
            onClick={() => setOfferModalOpen(true)}
          >
            SEE MORE
          </button>
        </>
      )}
      {partners && (
        <>
          <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
            Our Partners
          </h3>
          <Partners partners={partners} />
        </>
      )}
      {termsAndConditions && (
        <>
          <h3 className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader">
            Terms And Conditions
          </h3>
          <TermsAndConditions termsAndConditions={termsAndConditions} />
        </>
      )}
    </div>
  );
}
