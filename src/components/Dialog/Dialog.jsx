import React from "react";
import Modal from "../Modal";
import "./Dialog.css";

const Warn = () => (
  <svg
    width="138"
    height="105"
    viewBox="0 0 138 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="Dialog--warn"
  >
    <path
      d="M137.645 97.8731H0.480469L69.1755 0.692466L137.645 97.8731Z"
      fill="#F05327"
    />
    <path
      d="M65.4175 36.2143H73.5535L72.1855 70.7023H66.7135L65.4175 36.2143ZM69.5215 87.0463C68.1775 87.0463 67.0495 86.6143 66.1375 85.7503C65.2255 84.8383 64.7695 83.7343 64.7695 82.4383C64.7695 81.1423 65.2255 80.0623 66.1375 79.1983C67.0495 78.2863 68.1775 77.8303 69.5215 77.8303C70.8655 77.8303 71.9695 78.2863 72.8335 79.1983C73.6975 80.0623 74.1295 81.1423 74.1295 82.4383C74.1295 83.7343 73.6735 84.8383 72.7615 85.7503C71.8975 86.6143 70.8175 87.0463 69.5215 87.0463Z"
      fill="black"
    />
  </svg>
);

const Info = () => (
  <svg
    width="116"
    height="116"
    viewBox="0 0 116 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="Dialog--info"
  >
    <circle cx="58.0806" cy="57.5283" r="57.4927" fill="#FC9B04" />
    <path
      d="M53.3433 33.1283H61.4793L60.1113 67.6163H54.6393L53.3433 33.1283ZM57.4473 83.9603C56.1033 83.9603 54.9753 83.5283 54.0633 82.6643C53.1513 81.7523 52.6953 80.6483 52.6953 79.3523C52.6953 78.0563 53.1513 76.9763 54.0633 76.1123C54.9753 75.2003 56.1033 74.7443 57.4473 74.7443C58.7913 74.7443 59.8953 75.2003 60.7593 76.1123C61.6233 76.9763 62.0553 78.0563 62.0553 79.3523C62.0553 80.6483 61.5993 81.7523 60.6873 82.6643C59.8233 83.5283 58.7433 83.9603 57.4473 83.9603Z"
      fill="black"
    />
  </svg>
);

export default function Dialog({
  isOpen,
  closeHandler,
  type,
  children,
  yesHandler,
  noHandler
}) {
  return (
    <Modal isOpen={isOpen} closeHandler={closeHandler} overflow="visible">
      <div className="Dialog--container">
        {type === "warn" ? <Warn /> : <Info />}
        <h4 className="fnt-subtitle1 fgc-black">{children}</h4>
        <div>
          {type === "warn" && (
            <button
              type="button"
              className="btn btn3 fnt-button2 bgc-white brdc-red fgc-red"
              onClick={noHandler}
            >
              No
            </button>
          )}
          <button
            type="button"
            className="btn btn3 fnt-button2 bgc-white brdc-lightOrange fgc-lightOrange"
            onClick={yesHandler}
          >
            {type === "warn" ? "Yes" : "Ok"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
