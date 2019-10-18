import React from "react";
import ReactModal from "react-modal";
import CloseIcon from "../../assets/images/icons/close-icon.png";
import "./Modal.css";

ReactModal.setAppElement("#root");

export default function Modal({ isOpen, closeHandler, overflow, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeHandler}
      closeTimeoutMS={250}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)"
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          overflow,
          padding: "0",
          maxHeight: "90%",
          maxWidth: "90%"
        }
      }}
    >
      <div className="Modal--closeBar">
        <img src={CloseIcon} alt="close" onClick={closeHandler} />
      </div>
      {children}
    </ReactModal>
  );
}
