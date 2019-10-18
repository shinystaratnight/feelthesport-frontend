import React, { useState } from "react";
import Input from "../Input";
import OffersModal from "../OffersModal";
import "./CartCoupon.css";

const GarbageCan = ({ ...props }) => (
  <svg
    width="29"
    height="34"
    viewBox="0 0 29 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="CartCoupon--garbage"
    {...props}
  >
    <path
      d="M26.2339 4.62985H21.3965V1.76666C21.3965 1.19034 20.8861 0.744141 20.2534 0.744141C20.192 0.744141 20.1511 0.762809 20.1311 0.781434C20.1106 0.762809 20.0696 0.744141 20.0492 0.744141H8.68003H8.5986H8.51672C7.88403 0.744141 7.39415 1.19034 7.39415 1.76666V4.62989H2.53628C1.14807 4.62989 0.0664062 5.61512 0.0664062 6.87955V8.51565V10.5606H2.20967V31.5131C2.20967 32.7776 3.27089 33.7441 4.6591 33.7441H24.1111C25.4993 33.7441 26.5809 32.7776 26.5809 31.5131V10.5606H28.7038V8.51565V6.87955C28.7038 5.61512 27.6217 4.62985 26.2339 4.62985ZM9.63933 2.78914H19.1308V4.62985H9.63933V2.78914ZM24.3153 31.5131C24.3153 31.6436 24.2539 31.6991 24.1111 31.6991H4.6591C4.51628 31.6991 4.45489 31.6436 4.45489 31.5131V10.5606H24.3153V31.5131ZM26.4381 8.5156H2.33203V6.87951C2.33203 6.74939 2.39342 6.67485 2.53624 6.67485H26.2339C26.3767 6.67485 26.4381 6.74939 26.4381 6.87951V8.5156Z"
      fill="#F05327"
    />
    <path
      d="M20.9919 12.7441H18.7891V29.7441H20.9919V12.7441Z"
      fill="#F05327"
    />
    <path
      d="M15.4841 12.7441H13.2812V29.7441H15.4841V12.7441Z"
      fill="#F05327"
    />
    <path
      d="M11.0817 12.7441H7.77734V29.7441H11.0817V12.7441Z"
      fill="#F05327"
    />
  </svg>
);

export default function CartCoupon({
  points,
  offers,
  usedPoints,
  usedOffer,
  setUsedPoints,
  setUsedOfferBySelectDispatcher
}) {
  const [pointsInput, setPointsInput] = useState("");
  const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [couponCodeInput, setCouponCodeInput] = useState("");
  const [selectedOffer, setSelectedOffer] = useState({
    id: null,
    name: null,
    type: null,
    discountType: null,
    discount: null,
    couponCode: null
  });
  const [modalOpen, setModalOpen] = useState(false);

  console.log("POINTS", points);

  return (
    <div className="CartCoupon--container">
      <OffersModal
        isOpen={modalOpen}
        closeHandler={() => setModalOpen(false)}
        offers={offers}
        selectedOffer={selectedOffer}
        setSelectedOffer={setSelectedOffer}
        setUsedOfferBySelectDispatcher={setUsedOfferBySelectDispatcher}
      />
      {usedOffer ? (
        <div>
          <p className="fnt-subtitle2 fgc-black">Have a coupon code?</p>
          <div className="CartCoupon--used">
            <div className="CartCoupon--used--top">
              <div className="CartCoupon--used--top--left">
                <p className="fnt-text1 fgc-black fnt-bold">
                  {usedOffer.name} is applied
                </p>
                <GarbageCan
                  onClick={() => setUsedOfferBySelectDispatcher(0)}
                />
              </div>
              <div className="CartCoupon--used--top--right">
                <p className="fnt-subtitle4 fgc-gray">Coupon code</p>
                <p className="fnt-subtitle4 fgc-gray CartCoupon--seperator">
                  -
                </p>
                <p className="fnt-subtitle4 fgc-gray fnt-bold">₹{usedOffer.totalDiscount}</p>
              </div>
            </div>
            <p className="fnt-text1 fgc-red CartCoupon--congrats">
              Congratulations! You have saved ₹{usedOffer.totalDiscount}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <p className="fnt-subtitle2 fgc-black">Have a coupon code?</p>
          <div className="CartCoupon--offers">
            <p
              className="fnt-text1 fgc-lightOrange CartCoupon--selectCoupon CartCoupon--selectCoupon--tablet"
              onClick={() => setModalOpen(true)}
            >
              Select coupon:
            </p>
            <Input
              placeholder="Coupon code"
              value={couponCodeInput}
              onChange={(e) => {
                setCouponCodeInput(e.target.value)
                setInvalidCoupon(false);
              }}
            />
            <button
              type="button"
              className="btn btn3 bgc-lightOrange fgc-white fnt-button2"
              onClick={()=>{
                if(couponCodeInput != ""){
                  let getCouponID = null;
                  offers.forEach(function(offerSingle) {
                    console.log(offerSingle);
                    if(offerSingle.couponCode == couponCodeInput){
                      getCouponID = offerSingle.id;
                    }
                  });
                  if(getCouponID != null){
                    setUsedOfferBySelectDispatcher(getCouponID);
                  }else{
                    setInvalidCoupon(true);
                  }
                }
              }}
            >
              Apply
            </button>
          </div>
          {invalidCoupon && (<p
            className="fnt-text1 fgc-red "
          >
           Invalid Coupon Code, Please enter valid coupon code.
          </p>)}
          <p
            className="fnt-text1 fgc-lightOrange CartCoupon--selectCoupon CartCoupon--selectCoupon--desktop"
            onClick={() => setModalOpen(true)}
          >
            Select coupon
          </p>
        </div>
      )}

      {Boolean(points) && (
        <div>
          <p className="fnt-subtitle2 fgc-black">Use reward points</p>
          <p className="fnt-subtitle4 fgc-gray">
            You have{" "}
            <span className="fgc-red fnt-bold">{points - usedPoints}</span>{" "}
            reward points
          </p>
          {usedPoints ? (
            <div className="CartCoupon--used">
              <div className="CartCoupon--used--top">
                <div className="CartCoupon--used--top--left">
                  <p className="fnt-text1 fgc-black fnt-bold">
                    You have used {usedPoints} for this transaction
                  </p>
                  <GarbageCan onClick={() => setUsedPoints(0)} />
                </div>
                <div className="CartCoupon--used--top--right">
                  <p className="fnt-subtitle4 fgc-gray">Reward points</p>
                  <p className="fnt-subtitle4 fgc-gray CartCoupon--seperator">
                    -
                  </p>
                  <p className="fnt-subtitle4 fgc-gray fnt-bold">
                    ₹{usedPoints}
                  </p>
                </div>
              </div>
              <p className="fnt-text1 fgc-red CartCoupon--congrats">
                Congratulations! You have saved ₹{usedPoints}
              </p>
            </div>
          ) : (
            <div className="CartCoupon--points">
              <p className="fnt-text1 fgc-lightOrange">
                How much you want to use?
              </p>
              <Input
                value={pointsInput}
                onChange={e =>
                  e.target.value.length > 4 ||
                  isNaN(e.target.value) ||
                  e.target.value.includes(".") ||
                  Number(e.target.value) > points
                    ? undefined
                    : setPointsInput(e.target.value)
                }
              />
              <button
                type="button"
                className="btn btn3 bgc-lightOrange fgc-white fnt-button2"
                onClick={
                  pointsInput.length === 0 ||
                  pointsInput.length > 4 ||
                  isNaN(pointsInput) ||
                  pointsInput.includes(".") ||
                  Number(pointsInput) > points
                    ? undefined
                    : () => setUsedPoints(pointsInput)
                }
              >
                Use
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
