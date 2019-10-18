import React from "react";
import TransactionBoxRow from "../TransactionBoxRow";
import "./TransactionBox.css";
import CartBoxItem from "../CartBoxItem";

const CheckIcon = () => (
  <svg
    width="62"
    height="47"
    viewBox="0 0 62 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M55.4313 0.8863C54.6935 0.132952 53.4925 0.132952 52.7598 0.8863L24.6073 29.3067C23.8696 30.0651 22.6661 30.0651 21.9334 29.3067L9.59824 16.5661C9.23315 16.1882 8.75475 16.0018 8.27384 15.9992C7.78788 15.9967 7.29438 16.1831 6.92425 16.5661L1.47303 21.5357C1.11046 21.9136 0.914062 22.3861 0.914062 22.8789C0.914062 23.3744 1.11046 23.8928 1.47555 24.2682L13.9139 37.5066C14.6491 38.2625 15.8552 39.4883 16.5879 40.2391L21.9359 45.7066C22.6711 46.4549 23.8721 46.4549 24.6099 45.7066L60.7818 9.0863C61.5195 8.3355 61.5195 7.10205 60.7818 6.35126L55.4313 0.8863Z"
      fill="#B5E237"
    />
  </svg>
);

export default function TransactionBox({ type, data }) {
  console.log("TRa type", type);
  if(data)
  {
    if (type === "bookaslots") {
      const [bookaslotId, { arenaName, address, dates }] = data;
      return (
        <div className="TransactionBox--container TransactionBox--bookaslot" >
          <div className="TransactionBox--header">
            <CheckIcon />
            <h1 className="fnt-title1 fgc-green">Your booking is confirmed!</h1>
          </div>
          <div>
            <div className="TransactionBox--address">
              <p className="fnt-subtitle2 fgc-black">{arenaName}</p>
              <p className="fnt-subtitle4 fgc-gray">{address}</p>
            </div>
            {Object.entries(dates).map((date, index) => (
              <TransactionBoxRow
                type="bookaslots"
                key={index}
                data={date}
              />
            ))}
          </div>
        </div>
      );
    }
  }

  return false
}
