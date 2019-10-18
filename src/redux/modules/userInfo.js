import { push } from "connected-react-router";
import { apiLoading, apiSuccess, apiError } from "./apiInfo";
import { setRedirectAfterLogin } from "./siteInfo";
import { addToCart } from "./bookingInfo";
import * as api from "../../api";
import { setCards } from "./hubInfo";
const SET_USER_INFO = "userInfo/SET_USER_INFO";
const SET_USER_LOADING = "userInfo/SET_USER_LOADING";
const SET_MOBILE_VERIFY = "userInfo/SET_MOBILE_VERIFY";
const SET_EMAIL_VERIFY = "userInfo/SET_EMAIL_VERIFY";

const initialState = {
  id: null,
  name: null,
  avatar: null,
  email: null,
  email_verify: null,
  phone: null,
  phone_verify: null,
  gender: null,
  dateOfBirth: null,
  dateOfJoin: null,
  points: null,
  selected_city: null,
  selected_sport: null,
  userLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        avatar: payload.avatar,
        email: payload.email,
        email_verify: payload.email_verify,
        phone: payload.phone,
        phone_verify: payload.phone_verify,
        gender: payload.gender,
        dateOfBirth: payload.dateOfBirth,
        dateOfJoin: payload.dateOfJoin,
        points: payload.points,
        selected_city: payload.selected_city,
        selected_sport: payload.selected_sport,
        userLoading: false
      };
    case SET_USER_LOADING:
      return { ...state, userLoading: payload.userLoading };
    case SET_MOBILE_VERIFY:
      return {
        ...state,
        phone: payload.phone,
        phone_verify: payload.phone_verify
      };
    case SET_EMAIL_VERIFY:
      return {
        ...state,
        phone: payload.phone,
        phone_verify: payload.phone_verify,
        email: payload.email,
        email_verify: payload.email_verify
      };

    default:
      return state;
  }
};

function updateUserInfo(dispatch, getState, response, apiType = "") {
  const deStructure = { ...(response.data) };
  let updateType = SET_USER_INFO;
  localStorage.setItem("userInfo", JSON.stringify(deStructure));
  if (apiType === "verify_mobile_otp") {
    updateType = SET_MOBILE_VERIFY;
  }
  if (apiType === "verify_email_otp") {
    updateType = SET_EMAIL_VERIFY;
  }
  if (deStructure.phone == "" || deStructure.phone_verify !== true) {
    updateType = SET_MOBILE_VERIFY;
  } else if (deStructure.email != "" && deStructure.email_verify !== true) {
    updateType = SET_EMAIL_VERIFY;
  }
  dispatch({ type: updateType, payload: deStructure });
  const { redirectAfterLogin } = getState().siteState;
  if (updateType === SET_USER_INFO) {
    if (redirectAfterLogin !== null && redirectAfterLogin != "") {
      dispatch(addToCart());
      dispatch(push(redirectAfterLogin));
      dispatch(setRedirectAfterLogin(null));
    }
  }
  dispatch({ type: SET_USER_LOADING, payload: { userLoading: false } });
}

export const register = registerInfo => {
  return async (dispatch, getState) => {
    try {
      dispatch(apiLoading());
      const response = await api.register(registerInfo);
      updateUserInfo(dispatch, getState, response);
      dispatch(push("/login"));
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const loginUsingFacebook = facebookResponse => {
  return async (dispatch, getState) => {
    try {
      dispatch(apiLoading());
      const response = await api.facebookLogin(facebookResponse);
      updateUserInfo(dispatch, getState, response);
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};
export const loginUsingGoogle = googleResponse => {
  return async (dispatch, getState) => {
    try {
      if (getState().userState.id) return;
      dispatch(apiLoading());
      const response = await api.googleLogin(googleResponse);
      updateUserInfo(dispatch, getState, response);
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const login = (username, password) => {
  return async (dispatch, getState) => {
    try {
      if (getState().userState.id) return;
      dispatch(apiLoading());
      const response = await api.login(username, password);
      updateUserInfo(dispatch, getState, response);
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const sendMobileVerifyOTP = phoneNumber => {
  return async (dispatch, getState) => {
    try {
      dispatch(apiLoading());
      const response = await api.sendMobileVerifyOTP(phoneNumber);
      updateUserInfo(dispatch, getState, response);
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const sendOTP = mobile_email => {
  return async (dispatch) => {
    try {
      dispatch(apiLoading());
      const response = await api.sendOTP(mobile_email);
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};
export const verifyOTP = (mobile_email, otp) => {
  return async (dispatch, getState) => {
    try {
      dispatch(apiLoading());
      const response = await api.verifyOTP(mobile_email, otp);
      updateUserInfo(dispatch, getState, response);
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};


export const submitVerifyMobileOTP = (phoneNumber, otp) => {
  return async (dispatch, getState) => {
    try {
      dispatch(apiLoading());
      const response = await api.submitVerifyMobileOTP(phoneNumber, otp);
      updateUserInfo(dispatch, getState, response, "verify_mobile_otp");
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const sendEmailVerifyOTP = email => {
  return async (dispatch, getState) => {
    try {
      dispatch(apiLoading());
      const response = await api.sendEmailVerifyOTP(email);
      updateUserInfo(dispatch, getState, response);
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const submitVerifyEmailOTP = (email, otp) => {
  return async (dispatch, getState) => {
    try {
      dispatch(apiLoading());
      const response = await api.submitVerifyEmailOTP(email, otp);
      updateUserInfo(dispatch, getState, response, "verify_email_otp");
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const validateSession = () => {
  return async (dispatch, getState) => {
    try {
      const cachedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (cachedUserInfo) {
        dispatch({
          type: SET_USER_LOADING,
          payload: { userLoading: true }
        });
        const response = await api.validateSession();
        updateUserInfo(dispatch, getState, response);
        dispatch(apiSuccess());
      }
    } catch (error) {
      dispatch({
        type: SET_USER_LOADING,
        payload: {
          userLoading: false
        }
      });
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      dispatch({
        type: SET_USER_INFO,
        payload: {
          id: null,
          name: null,
          avatar: null,
          email: null,
          phone: null,
          gender: null,
          dateOfBirth: null,
          dateOfJoin: null,
          points: null,
          selected_city: null,
          selected_sport: null
        }
      });
      await api.logout();
      localStorage.removeItem("userInfo");
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const setCity = city => {
  return async (dispatch, getState) => {
    if (getState().userState.id) {
      try {
        if (getState().userState.selected_city === city) return;
        dispatch(apiLoading());
        const response = await api.setCity(city);
        updateUserInfo(dispatch, getState, response);
        if (getState().hubState.cards) {
          dispatch(setCards());
        } else {
          dispatch(apiSuccess());
        }
      } catch (error) {
        dispatch(apiError());
      }
    }
  }
};

export const setSport = sport => {
  return async (dispatch, getState) => {
    if (getState().userState.id) {
      try {
        if (getState().userState.selected_sport === sport) return;
        dispatch(apiLoading());
        const response = await api.setSport(sport);
        updateUserInfo(dispatch, getState, response);
        if (getState().hubState.cards) {
          dispatch(setCards());
        } else {
          dispatch(apiSuccess());
        }
      } catch (error) {
        dispatch(apiError());
      }
    }
  }
};
