import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Banners.css";
import Slider from "react-slick";

export default function Banners({ images, className }) {
  const classes = classNames({
    "Banners--container": true,
    [className]: className
  });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    useCSS: true,
    useTransform: false,
    slidesToShow: 1,
    dotsClass: "Banners--dots",
    customPaging() {
      return <div />;
    },
    className: "Banners--slide"
  };
  return (
    <div className={classes}>
      <Slider {...settings}>
        {images.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt="banner"
            className="Banner--image"
          />
        ))}
      </Slider>
    </div>
  );
}

Banners.defaultProps = {
  className: undefined
};

Banners.propTypes = {
  className: PropTypes.string
};
