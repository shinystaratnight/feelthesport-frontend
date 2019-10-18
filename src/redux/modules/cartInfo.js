import { push } from "connected-react-router";
import { apiLoading, apiSuccess, apiError } from "./apiInfo";
import * as api from "../../api";

const INIT_CART = "cartInfo/INIT_CART";
const SET_DIALOG_OPEN = "cartInfo/SET_DIALOG_OPEN";
const SET_ORDER = "cartInfo/SET_ORDER";
const REINIT_CART = "cartInfo/REINIT_CART";
const SET_USED_POINTS = "cartInfo/SET_USED_POINTS";
const SET_TRANSACTION = "cartInfo/SET_TRANSACTION";

const initialState = {
  cart: null,
  transaction:null,
  offers: null,
  usedOffer: null,
  usedPoints: null,
  razorKey: null,
  orderId: null,
  dialogOpen: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_CART:
      return {
        ...state,
        cart: payload.cart,
        offers: payload.offers,
        usedOffer: payload.usedOffer,
        usedPoints: payload.usedPoints,
      };

    case SET_DIALOG_OPEN: {
      return { ...state, dialogOpen: payload.open };
    }

    case REINIT_CART: {
      return {
        ...state,
        cart: payload.cart,
        offers: payload.offers,
        usedOffer: payload.usedOffer,
        usedPoints: payload.usedPoints,
        dialogOpen: true,
        razorKey: null,
        orderId: null
      };
    }

    case SET_ORDER: {
      return { ...state, razorKey: payload.razorKey, orderId: payload.orderId };
    }

    case SET_TRANSACTION: {
      return { ...state, transaction: payload.transaction};
    }
    default:
      return state;
  }
};

export const initCart = () => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      const response = await api.initCart();

      console.log(response.data);
      dispatch({
        type: INIT_CART,
        payload: {
          cart: response.data.cart,
          offers: response.data.offers,
          usedOffer: response.data.usedOffer,
          usedPoints: response.data.usedPoints,
        }
      });

      dispatch(apiSuccess());
    } catch (error) {
      // if (error.response && error.response.status === 404) {
      //   dispatch({
      //     type: INIT_CART,
      //     payload: {
      //       cart: []
      //     }
      //   });
      //   dispatch(apiSuccess());
      // } else {
      dispatch(apiError());
      // }
    }
  };
};

export const getOrder = () => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      const response = await api.getOrder();

      if (response.data.reInitCart) {
        const response2 = await api.initCart();

        dispatch({
          type: REINIT_CART,
          payload: {
            cart: response2.data.cart,
            offers: response2.data.offers,
            usedOffer: response2.data.usedOffer,
            usedPoints: response2.data.usedPoints
          }
        });
        dispatch(apiSuccess());
      } else {
        dispatch({
          type: SET_ORDER,
          payload: {
            razorKey: response.data.razorKey,
            orderId: response.data.orderId
          }
        });
        dispatch(apiSuccess());
      }
    } catch (error) {
      // if (error.response && error.response.status === 404) {
      //   dispatch({
      //     type: INIT_CART,
      //     payload: {
      //       cart: []
      //     }
      //   });
      //   dispatch(apiSuccess());
      // } else {
      dispatch(apiError());
      // }
    }
  };
};

export const deleteItem = itemId => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      await api.deleteItem(itemId);
      dispatch(initCart());
      // dispatch(apiSuccess());
    } catch (error) {
      // if (error.response && error.response.status === 404) {
      //   dispatch({
      //     type: REINIT_CART,
      //     payload: { cart: [] }
      //   });
      //   dispatch(apiSuccess());
      // } else {
      dispatch(apiError());
      // }
    }
  };
};

export const setDialogOpen = open => ({
  type: SET_DIALOG_OPEN,
  payload: {
    open
  }
});

export const setUsedPoints = points => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      await api.setUsedPoints(points);
      dispatch(initCart());
      // dispatch(apiSuccess());
    } catch (error) {
      // if (error.response && error.response.status === 404) {
      //   dispatch({
      //     type: REINIT_CART,
      //     payload: { cart: [] }
      //   });
      //   dispatch(apiSuccess());
      // } else {
      dispatch(apiError());
      // }
    }
  };
};

export const setUsedOfferBySelect = offerId => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      await api.setUsedOfferBySelect(offerId);
      dispatch(initCart());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const getTransaction = transactionId => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      const response =  await api.getTransaction(transactionId);
      dispatch({
        type: SET_TRANSACTION,
        payload: {
          transaction: response.data
        }
      });
      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const completeTransaction = () => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      const response = await api.completeTransaction();
      console.log(response);
      const { transactionId } = response.data;
      // dispatch(initCart());
      dispatch(apiSuccess());
      dispatch(push(`/transactions/${transactionId}`));
    } catch (error) {
      // if (error.response && error.response.status === 404) {
      //   dispatch({
      //     type: REINIT_CART,
      //     payload: { cart: [] }
      //   });
      //   dispatch(apiSuccess());
      // } else {
      dispatch(apiError());
      // }
    }
  };
};
