import * as api from "../../api";
import { apiLoading, apiSuccess, apiError } from "./apiInfo";

const INIT_ARENA = "arenaInfo/INIT_ARENA";
const SET_ARENA_INFO = "arenaInfo/SET_ARENA_INFO";
const SET_REVIEW_INFO = "arenaInfo/SET_REVIEW_INFO";
const SET_ACTIVE_TAB = "arenaInfo/SET_ACTIVE_TAB";
const SET_ACTIVE_SPORT = "arenaInfo/SET_ACTIVE_SPORT";
const SET_REVIEWS_PAGE = "arenaInfo/SET_REVIEWS_PAGE";
const REVIEWS_LOADING = "arenaInfo/REVIEWS_LOADING";

const initialState = {
  activeTab: null,
  activeSport: null,
  arenaInfo: null,
  reviewsInfo: null,
  reviewsPage: 1,
  reviewsLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_ARENA:
      return {
        ...state,
        arenaInfo: payload.arenaInfo,
        activeTab: payload.activeTab,
        activeSport: payload.activeSport,
        reviewsInfo: {
          rating: payload.arenaInfo.rating,
          ratingCount: payload.arenaInfo.ratingCount,
          reviewCount: payload.arenaInfo.reviewCount,
          reviews: payload.arenaInfo.reviews,
          canReview: payload.arenaInfo.canReview
        }
      };

    case SET_ARENA_INFO:
      return { ...state, ...payload };

    case SET_ACTIVE_TAB: {
      return { ...state, activeTab: payload.tab };
    }

    case SET_ACTIVE_SPORT: {
      return { ...state, activeSport: payload.sport };
    }

    case SET_REVIEW_INFO:
      return {
        ...state,
        reviewsLoading: false,
        ...(payload.reviewsPage && { reviewsPage: 1 }),
        reviewsInfo: {
          ...state.reviewsInfo,
          rating: payload.rating,
          ratingCount: payload.ratingCount,
          reviewCount: payload.reviewCount,
          reviews: payload.reviews,
          ...(payload.canReview !== undefined && {
            canReview: payload.canReview
          })
        }
      };

    case REVIEWS_LOADING:
      return { ...state, reviewsLoading: true };

    case SET_REVIEWS_PAGE:
      return { ...state, reviewsPage: payload.reviewsPage };

    default:
      return state;
  }
};

export const initArena = (arenaId, activeSport) => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      const response = await api.initArena(arenaId);

      if (!response.data.sports.includes(activeSport)) {
        throw new Error("sport not in arena");
      }

      console.log(response.data);

      dispatch({
        type: INIT_ARENA,
        payload: {
          arenaInfo: response.data,
          activeTab: "about",
          activeSport
        }
      });

      dispatch(apiSuccess());
    } catch {
      dispatch(apiError());
    }
  };
};

export const setActiveTab = tab => ({
  type: SET_ACTIVE_TAB,
  payload: { tab }
});

export const setActiveSport = sport => ({
  type: SET_ACTIVE_SPORT,
  payload: { sport }
});

export const submitReview = review => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: REVIEWS_LOADING });

      const response = await api.submitReview(
        getState().arenaState.arenaInfo.arenaId,
        review.rating,
        review.body
      );

      dispatch({
        type: SET_REVIEW_INFO,
        payload: {
          rating: response.data.rating,
          ratingCount: response.data.ratingCount,
          reviewCount: response.data.reviewCount,
          reviews: response.data.reviews,
          canReview: response.data.canReview,
          reviewsPage: 1
        }
      });
    } catch {
      dispatch(apiError());
    }
  };
};

export const getReviews = page => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SET_REVIEWS_PAGE,
        payload: { reviewsPage: page }
      });

      dispatch({ type: REVIEWS_LOADING });

      const response = await api.getReviews(
        getState().arenaState.arenaInfo.arenaId,
        page
      );

      dispatch({
        type: SET_REVIEW_INFO,
        payload: {
          rating: response.data.rating,
          ratingCount: response.data.ratingCount,
          reviewCount: response.data.reviewCount,
          reviews: response.data.reviews
        }
      });

      // eslint-disable-next-line no-empty
    } catch {}
  };
};
