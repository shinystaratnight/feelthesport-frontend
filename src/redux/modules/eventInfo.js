import { push } from "connected-react-router";
import * as api from "../../api";
import { apiLoading, apiSuccess, apiError } from "./apiInfo";

const INIT_EVENT = "eventInfo/INIT_EVENT";
const SET_ACTIVE_TAB = "eventInfo/SET_ACTIVE_TAB";

const initialState = {
  activeTab: null,
  eventInfo: null,
  apiLoading: false,
  apiError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_EVENT:
      return { ...state, ...payload };

    case SET_ACTIVE_TAB: {
      return { ...state, activeTab: payload.tab };
    }

    default:
      return state;
  }
};

export const setActiveTab = tab => ({
  type: SET_ACTIVE_TAB,
  payload: {
    tab
  }
});

export const iniEvent = eventId => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      const response = await api.initEvent(eventId);

      dispatch({
        type: INIT_EVENT,
        payload: {
          eventInfo: response.data,
          activeTab: "eventDetails"
        }
      });

      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const addToCart = (eventCategoryId, submissions) => {
  return async dispatch => {
    try {
      const cartItems = [];
      submissions.forEach(submission => {
        cartItems.push({
          eventCategoryId,
          formSubmission: submission
        });
      });

      dispatch(apiLoading());
      await api.addToCart(cartItems);
      dispatch(apiSuccess());
      dispatch(push("/cart"));
    } catch (error) {
      dispatch(apiError());
    }
  };
};
