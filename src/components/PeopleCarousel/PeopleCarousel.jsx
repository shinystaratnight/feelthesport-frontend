import React from "react";
import Slider from "react-slick";
import Player from "../Player";
import CarouselArrows from "../CarouselArrows";
import "./PeopleCarousel.css";

export default function PeopleCarousel({ people }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: people.length > 4,
    speed: 500,
    useCSS: true,
    useTransform: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CarouselArrows type="next" />,
    prevArrow: <CarouselArrows type="prev" />,
    className: "PeopleCarousel--carousel",
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          infinite: people.length > 3,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 860,
        settings: {
          infinite: people.length > 2,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: people.length > 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="PeopleCarousel--container">
      <Slider {...settings}>
        {people.map((person, index) => (
          <div className="PeopleCarousel--carouselItem" key={index}>
            <Player
              name={person.name}
              position={person.position}
              avatar={person.avatar}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
