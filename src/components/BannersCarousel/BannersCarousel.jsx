import React, { useState } from "react";
import Slider from "react-slick";
import CarouselArrows from "../CarouselArrows";
import "./BannersCarousel.css";
import Polygon3 from "../../assets/images/Polygon-3.svg";

export default function BannersCarousel({ banners }) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    useCSS: true,
    useTransform: false,
    slidesToShow: 1,
    nextArrow: <CarouselArrows type="next" />,
    prevArrow: <CarouselArrows type="prev" />,
    className: "BannersCarousel-carousel",
    dotsClass: "Banners--dots",
    afterChange: i => {
      setCurrentBannerIndex(i);
    },
    customPaging: i => {
      // console.log("PAGE", i, j);
      if (i === currentBannerIndex) {
        return <div style={{ backgroundColor: "#FFFFFF" }} />;
      }
      return <div />;
    }
  };
  return (
    <div className="BannersCarousel--container">
      <img src={Polygon3} className="header-shape-3"/>
      <Slider {...settings}>
        {banners.map((offer, index) => (
          <div key={index} className="BannersCarousel--cardCotainer">
            <img src={offer} alt="offer" className="BannersCarousel--image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
