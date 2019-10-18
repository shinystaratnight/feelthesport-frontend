import React from "react";
import "./Partners.css";

export default function Partners({ partners }) {
  return (
    <div className="Partners--container">
      {partners.map((partner, index) => (
        <img
          src={partner}
          alt="partner"
          key={index}
          className="Partners--partner"
        />
      ))}
    </div>
  );
}
