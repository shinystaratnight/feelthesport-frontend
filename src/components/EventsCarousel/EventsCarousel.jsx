import React from "react";
import Slider from "react-slick";
import EventCard from "../EventCard";
import CarouselArrows from "../CarouselArrows";
import "./EventsCarousel.css";

export default function EventsCarousel({ events }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: events.length > 3,
    speed: 500,
    useCSS: true,
    useTransform: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CarouselArrows type="next" />,
    prevArrow: <CarouselArrows type="prev" />,
    className: "EventsCarousel-carousel",
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: events.length > 2
        }
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: events.length > 1
        }
      }
    ]
  };
  return (
    <div className="EventsCarousel--container">
      <Slider {...settings}>
        {events.map((event, index) => (
          <div className="EventsCarousel--cardCotainer" key={index}>
            <EventCard data={event} type={1} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
