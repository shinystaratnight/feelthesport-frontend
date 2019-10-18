import { apiLoading, apiSuccess, apiError } from "./apiInfo";
import * as api from "../../api";
import { useState } from "react";
import { push } from "connected-react-router";

const SET_SITE_INFO = "siteInfo/SET_SITE_INFO";
const HANDLE_SPORT_MODAL = "siteInfo/HANDLE_SPORT_MODAL";
const HANDLE_CITY_MODAL = "siteInfo/HANDLE_CITY_MODAL";
const SET_SELECTED_CITY = "siteInfo/SET_SELECTED_CITY";
const SET_SELECTED_SPORT = "siteInfo/SET_SELECTED_SPORT";
const SET_REDIRECT_AFTER_LOGIN = "siteInfo/SET_REDIRECT_AFTER_LOGIN";
const SET_REDIRECT_AFTER_BOOKNPLAY = "siteInfo/SET_REDIRECT_AFTER_BOOKNPLAY";

const initialState = {
  siteInfo: false,
  banners: null,
  quote: null,
  phone: null,
  email: null,
  socialMedia: null,
  termsAndConditions: null,
  cities: null,
  sports: null,
  offers: null,
  events: null,
  sportModalOpen: false,
  cityModalOpen: false,
  selected_city: null,
  selected_sport: null,
  redirectAfterLogin: null,
  redirectAfterBookNPlay: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SITE_INFO:
      return {
        ...state,
        siteInfo: true,
        banners: payload.banners,
        quote: payload.quote,
        phone: payload.phone,
        email: payload.email,
        socialMedia: payload.socialMedia,
        termsAndConditions: payload.termsAndConditions,
        cities: payload.cities,
        sports: payload.sports,
        offers: payload.offers,
        events: payload.events
      };

    case HANDLE_SPORT_MODAL:
      return {
        ...state,
        sportModalOpen: payload.open
      };
    case HANDLE_CITY_MODAL:
      return {
        ...state,
        cityModalOpen: payload.open
      };
    case SET_SELECTED_CITY:
      return {
        ...state,
        selected_city: payload.selected_city
      };
    case SET_SELECTED_SPORT:
      return {
        ...state,
        selected_sport: payload.selected_sport
      };
    case SET_REDIRECT_AFTER_LOGIN:
      return {
        ...state,
        redirectAfterLogin: payload.redirectAfterLogin
      };
    case SET_REDIRECT_AFTER_BOOKNPLAY:
      return {
        ...state,
        redirectAfterBookNPlay: payload.redirectAfterBookNPlay
      };
    default:
      return state;
  }
};

export const setRedirectAfterLogin = redirectAfterLogin => ({
  type: SET_REDIRECT_AFTER_LOGIN,
  payload: { redirectAfterLogin }
});

export const handleSportModal = open => ({
  type: HANDLE_SPORT_MODAL,
  payload: { open }
});

export const handleCityModal = open => ({
  type: HANDLE_CITY_MODAL,
  payload: { open }
});

export const setSelectedCity = selected_city => ({
  type: SET_SELECTED_CITY,
  payload: { selected_city }
});

export const setSelectedSport = selected_sport => ({
  type: SET_SELECTED_SPORT,
  payload: { selected_sport }
});

export const setRedirectAfterBookNPlay = redirectAfterBookNPlay => ({
  type: SET_REDIRECT_AFTER_BOOKNPLAY,
  payload: { redirectAfterBookNPlay }
});


export const handleBookAndPlay = () => {
  return async (dispatch, getState) => {
    dispatch(push("/booknplay"));
  };
};


export const setGeneralSiteInfo = () => {
  return async (dispatch, getState) => {
    try {
      let sportValue = localStorage.getItem("userSport");
      let cityValue = localStorage.getItem("userCity");
      if(getState().userState.selected_city){
        cityValue = getState().userState.selected_city;
      }
      if(getState().userState.selected_sport){
        sportValue = getState().userState.selected_sport;
      }
      if (cityValue) {
        dispatch({
          type: SET_SELECTED_CITY,
          payload: { selected_city: cityValue }
        });
        dispatch({
          type: HANDLE_CITY_MODAL,
          payload: { open: false }
        });
      } else if (getState().siteState.sportModalOpen === false && getState().siteState.selected_city === null) {
        dispatch({
          type: HANDLE_CITY_MODAL,
          payload: { open: true }
        });
      }
      if (sportValue) {
        dispatch({
          type: SET_SELECTED_SPORT,
          payload: { selected_sport: sportValue }
        });
        dispatch({
          type: HANDLE_SPORT_MODAL,
          payload: { open: false }
        });
      }
      dispatch(apiLoading());
      const response = await api.siteInfo(cityValue, sportValue);
      dispatch({
        type: SET_SITE_INFO,
        payload: response.data
      });
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};
