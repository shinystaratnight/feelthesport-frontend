import makeDebounce from "redux-debounce-thunk";

const OPEN_MODAL = "modalInfo/OPEN_MODAL";
const CLOSE_MODAL = "modalInfo/CLOSE_MODAL";
const CLEAR_MODAL_MESSAGE = "modalInfo/CLEAR_MODAL_MESSAGE";

const initialState = {
  modalOpen: false,
  modalMessage: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalMessage: payload.modalMessage
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      };

    case CLEAR_MODAL_MESSAGE:
      return {
        ...state,
        modalMessage: ""
      };

    default:
      return state;
  }
};

export const openModal = message => ({
  type: OPEN_MODAL,
  payload: {
    modalMessage: message
  }
});

export const clearModalMessage = () => ({
  type: CLEAR_MODAL_MESSAGE
});

const debouncedClearModalMessage = makeDebounce(clearModalMessage, 1000);

export const closeModal = () => {
  return async dispatch => {
    dispatch({
      type: CLOSE_MODAL
    });
    dispatch(debouncedClearModalMessage());
  };
};
