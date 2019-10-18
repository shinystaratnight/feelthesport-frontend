import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import { closeModal } from "../../redux/modules/modalInfo";

import "./GlobalModal.css";

const mapStateToProps = state => ({
  modalOpen: state.modalState.modalOpen,
  modalMessage: state.modalState.modalMessage
});

const mapDispatchToProps = {
  closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function GlobalModal({
  modalOpen,
  modalMessage,
  closeModal: closeModalDispatcher
}) {
  return (
    <Modal
      isOpen={modalOpen}
      closeHandler={() => closeModalDispatcher()}
      overflow="visible"
    >
      <div className="GlobalModal--container">{modalMessage}</div>
    </Modal>
  );
});
