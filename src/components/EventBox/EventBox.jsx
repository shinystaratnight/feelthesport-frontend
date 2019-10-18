import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import EventTimePlace from "../EventTimePlace";
import EventCategories from "../EventCategories";
import GetDirections from "../GetDirections";
import "./EventBox.css";
import Pic1 from "../../assets/images/car-1.png";
import Pic2 from "../../assets/images/car-2.jpg";
import Pic3 from "../../assets/images/car-3.png";
import WhatsappIcon from "../../assets/images/icons/events-whatsapp.svg";
import FacebookIcon from "../../assets/images/icons/events-facebook.svg";
import Mail1Icon from "../../assets/images/icons/events-mail1.svg";
import Mail2Icon from "../../assets/images/icons/events-mail2.svg";

const pics = [Pic1, Pic2, Pic3, Pic1, Pic2, Pic3];
const icons = [
  WhatsappIcon,
  FacebookIcon,
  Mail1Icon,
  Mail2Icon,
  WhatsappIcon,
  FacebookIcon
];

export default function EventBox({
  eventName,
  image,
  gallery,
  sport,
  startDate,
  endDate,
  startTime,
  endTime,
  organizerName,
  complexName,
  complexAddress,
  complexCity,
  eventCategories,
  registrationHandler
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const openGallery = index => {
    setActivePhotoIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="EventBox--container">
      {gallery && (
        <ReactBnbGallery
          show={galleryOpen}
          photos={[image, ...gallery]}
          activePhotoIndex={activePhotoIndex}
          onClose={() => setGalleryOpen(false)}
          backgroundColor="#313131"
        />
      )}
      <div>
        <h1 className="fnt-title1 fgc-black">{eventName}</h1>
        <h3 className="fnt-subtitle2 fgc-black">{`Organized by ${organizerName}`}</h3>
      </div>
      <img
        src={image}
        alt="events pic"
        className="EventBox--image"
        onClick={gallery ? () => openGallery(0) : undefined}
      />
      {/* <h2 className="fnt-title2 fgc-lightOrange">
        Tell your friends about us in social media!
      </h2> */}
      {/* <div className="EventBox--stats">
        <p className="fnt-subtitle4 fgc-gray">26784 registrations</p>
        <p className="fnt-subtitle4 fgc-gray">26784 views</p>
        <p className="fnt-subtitle4 fgc-gray">26784 shares</p>
        <div>
          {icons.map((p, index) => (
            <img
              src={p}
              alt="events social icons"
              key={index}
              className="EventBox--socialIcons"
            />
          ))}
        </div>
      </div> */}
      {/* <div className="EventBox--invite">
        <p className="fnt-button1 fgc-lightOrange">Invite your friends!</p>
        <div>
          {icons.map((p, index) => (
            <img
              src={p}
              alt="events social icons"
              key={index}
              className="EventBox--socialIcons"
            />
          ))}
        </div>
      </div> */}
      <div className="EventBox--complex">
        <p className="fnt-subtitle2 fgc-black">{complexName}</p>
        <p className="fnt-text1 fgc-gray">{complexAddress}</p>
        <GetDirections />
      </div>
      <EventTimePlace
        city={complexCity}
        sport={sport}
        startDate={startDate}
        endDate={endDate}
        startTime={startTime}
        endTime={endTime}
      />
      <p className="fnt-subtitle1 fgc-black">Pricing Details</p>
      <EventCategories
        categories={eventCategories}
        registrationHandler={registrationHandler}
      />
    </div>
  );
}
