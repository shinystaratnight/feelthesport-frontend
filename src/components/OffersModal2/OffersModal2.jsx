import React from "react";
import "./OffersModal2.css";

export default function OffersModal2({ offers }) {
  return (
    <div className="OffersModal2--container">
      {offers.map(({ id, name, image, type, discountType, discount }) => (
        <div key={id}>
          <div>
            <p className="fnt-text1 fgc-darkOrange fnt-bold">{name}</p>
            <p className="fnt-text1 fgc-black">Type: {type}</p>
            <p className="fnt-text1 fgc-black">
              {discountType === "amount"
                ? `Amount: ₹${discount}`
                : `Percentage: ${discount}%`}
            </p>
          </div>
          <div>
            <img src={image} alt="offer" />
          </div>
        </div>
      ))}
    </div>
  );
}
