import React from "react";
import Slider from "react-slick";
import CarouselArrows from "../CarouselArrows";
import "./OffersCarousel.css";

export default function OffersCarousel({ offers }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: offers.length > 2,
    speed: 500,
    useCSS: true,
    useTransform: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <CarouselArrows type="next" />,
    prevArrow: <CarouselArrows type="prev" />,
    className: "OffersCarousel-carousel",
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          infinite: offers.length > 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="OffersCarousel--container">
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <div key={index} className="OffersCarousel--cardCotainer">
            <img src={offer} alt="offer" className="OffersCarousel--image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
