import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactBnbGallery from "react-bnb-gallery";
import LocationIcon from "../../assets/images/icons/icon-location.svg";
import Stars from "../Stars";
import SocialMedia from "../SocialMedia";
import "./ArenaBox.css";

export default function ArenaBox({
  arenaId,
  name,
  address,
  rating,
  image,
  gallery,
  socialMedia,
  sports,
  courtTypes,
  bookaslotId,
  activeSport,
  sportHandler
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const openGallery = index => {
    setActivePhotoIndex(index);
    setGalleryOpen(!galleryOpen);
  };

  return (
    <div className="ArenaBox--container">
      <h2 className="fnt-title2 fgc-black ArenaBox--name">{name}</h2>
      <p className="fnt-subtitle4 fgc-gray ArenaBox--location">{address}</p>
      <div className="ArenaBox--direction">
        <img src={LocationIcon} alt="Location Icon" />
        <p className="fnt-text1 fgc-lightOrange">Get Directions</p>
      </div>

      <SocialMedia
        socialMedia={socialMedia}
        color="black"
        className="ArenaBox--social"
      />
      <div className="ArenaBox--sports">
        <p className="fnt-subtitle4 fgc-darkOrange">
          Sport: <span className="fnt-text1 fgc-gray">{activeSport}</span>
        </p>
      </div>
      <div className="ArenaBox--court">
        <p className="fnt-subtitle4 fgc-darkOrange">
          Court types:{" "}
          <span className="fnt-text1 fgc-gray">{courtTypes[activeSport]}</span>
        </p>
      </div>
      <div className="ArenaBox--other">
        {sports.length !== 1 && (
          <p className="fnt-subtitle4 fgc-darkOrange">
            Other sports:{" "}
            <span className="fnt-text1 fgc-blue">
              {sports
                .filter(sport => sport !== activeSport)
                .map((sport, index) => (
                  <span
                    key={index}
                    onClick={() => sportHandler(sport)}
                  >{`${sport}${index !== sports.length - 2 ? ", " : ""}`}</span>
                ))}
            </span>
          </p>
        )}
      </div>
      <button
        type="button"
        className="btn btn4 fnt-text1 bgc-darkOrange fgc-white ArenaBox--membership ArenaBox--mbce"
      >
        Membership
      </button>
      <Link
        to={`/arena/${arenaId}/bookaslot/${bookaslotId}`}
        className="ArenaBox--book ArenaBox--mbce btn btn4 fnt-text1 bgc-lightOrange fgc-white fnt-noline"
      >
        Book Now
      </Link>
      {/* <Link
        to={`/arena/${arenaId}/bookaslot/${bookaslotId}`}
        className="ArenaBox--book ArenaBox--mbce fnt-noline btn-link"
      >
        <button
          type="button"
          className="btn btn4 fnt-text1 bgc-lightOrange fgc-white"
        >
          Book Now
        </button>
      </Link> */}
      <button
        type="button"
        className="btn btn4 fnt-text1 bgc-white brdc-lightOrange fgc-lightOrange ArenaBox--coaching ArenaBox--mbce"
      >
        Coaching
      </button>
      <Link
        to={`/events/?organizers=${name.replace(/ /g, "+")}`}
        className="btn btn4 fnt-text1 bgc-white brdc-lightOrange fgc-lightOrange ArenaBox--events ArenaBox--mbce fnt-noline"
      >
        Events
      </Link>

      {/* <button
        type="button"
        className="btn btn4 fnt-text1 bgc-white brdc-lightOrange fgc-lightOrange ArenaBox--events ArenaBox--mbce"
      >
        Events
      </button> */}
      <Stars
        stars={rating}
        color="lightOrange"
        rating
        className="ArenaBox--rating"
      />
      <p className="fnt-subtitle4 fgc-gray ArenaBox--galleryHeader">Gallery</p>
      <img
        src={image}
        alt="gallery 1"
        className="ArenaBox--galleryImage1"
        onClick={gallery ? () => openGallery(0) : undefined}
      />
      {gallery[0] && (
        <img
          src={gallery[0]}
          alt="gallery 1"
          className="ArenaBox--galleryImage2 ArenaBox--desktop"
          onClick={() => openGallery(1)}
        />
      )}
      {gallery[1] && (
        <img
          src={gallery[1]}
          alt="gallery 1"
          className="ArenaBox--galleryImage3 ArenaBox--desktop"
          onClick={() => openGallery(2)}
        />
      )}
      {gallery[2] && (
        <img
          src={gallery[2]}
          alt="gallery 1"
          className="ArenaBox--galleryImage4 ArenaBox--desktop"
          onClick={() => openGallery(3)}
        />
      )}
      <div className="ArenaBox--galleryPreview--mobile">
        {gallery[0] && (
          <img
            src={gallery[0]}
            alt="gallery 1"
            className="ArenaBox--galleryImage2"
            onClick={() => openGallery(1)}
          />
        )}
        {gallery[1] && (
          <img
            src={gallery[1]}
            alt="gallery 1"
            className="ArenaBox--galleryImage3"
            onClick={() => openGallery(2)}
          />
        )}
        {gallery[2] && (
          <img
            src={gallery[2]}
            alt="gallery 1"
            className="ArenaBox--galleryImage4"
            onClick={() => openGallery(3)}
          />
        )}
      </div>
      {gallery[3] && (
        <p
          className="fnt-text1 fgc-lightOrange ArenaBox--view"
          onClick={() => openGallery(4)}
        >
          View more
        </p>
      )}
      {gallery && (
        <ReactBnbGallery
          show={galleryOpen}
          photos={[image, ...gallery]}
          activePhotoIndex={activePhotoIndex}
          onClose={() => setGalleryOpen(false)}
          backgroundColor="#313131"
        />
      )}
    </div>
  );
}
