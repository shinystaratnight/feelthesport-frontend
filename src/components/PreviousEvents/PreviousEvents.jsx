import React from "react";
import Typography from "../Typography";
// import Carousel from "../Carousel";
import "./PreviousEvents.css";
import Pic1 from "../../assets/images/car-1.png";
import Pic2 from "../../assets/images/car-2.jpg";
import Pic3 from "../../assets/images/car-3.png";

const pics = [Pic1, Pic2, Pic3, Pic1, Pic2, Pic3, Pic1, Pic2, Pic3];

export default function PreviousEvents({ className, ...props }) {
  const cClassName = className !== undefined ? ` ${className}` : "";
  return (
    <div className={`PreviousEvents--container${cClassName}`} {...props}>
      <Typography type="subtitle1" color="black">
        Previous Events
      </Typography>
      <div className="PreviousEvents--top">
        <div className="PreviousEvents--stats">
          <Typography type="subtitle2" color="darkOrange">
            Name of the event
          </Typography>
          <Typography type="text1" color="darkOrange">
            17.02.18
          </Typography>
          <Typography type="subtitle4" color="gray">
            City
          </Typography>
          <Typography type="subtitle4" color="gray">
            Sport
          </Typography>
          <Typography type="subtitle4" color="gray">
            1234 registrations
          </Typography>
          <Typography type="subtitle4" color="gray">
            30234 views
          </Typography>
          <Typography type="subtitle4" color="gray">
            3456 shares
          </Typography>
        </div>
        <img src={Pic1} alt="event pic" className="PreviousEvents--image" />
      </div>
      <Typography
        type="text1"
        color="darkOrange"
        className="PreviousEvents--galleryHeader"
      >
        Gallery
      </Typography>
      {/* <Carousel hidePagination slidesToShow={4}>
        {pics.map((p, index) => (
          <img
            src={p}
            alt="event pic"
            key={index}
            className="PreviousEvents--carouselImage"
          />
        ))}
      </Carousel> */}
      <Typography type="subtitle1" color="black">
        Details
      </Typography>
      <Typography type="text1" color="gray">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.There
        are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </Typography>
    </div>
  );
}
