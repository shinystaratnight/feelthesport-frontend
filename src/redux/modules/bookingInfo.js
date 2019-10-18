import { push } from "connected-react-router";
import * as api from "../../api";
import { apiLoading, apiSuccess, apiError } from "./apiInfo";
import { initCart } from "./cartInfo";

const INIT_BOOKING = "bookingInfo/INIT_BOOKING";
const SET_ACTIVE_DATE = "bookingInfo/SET_ACTIVE_DATE";
const SET_SLOTS = "bookingInfo/SET_SLOTS";
const SET_PLAYERS = "bookingInfo/SET_PLAYERS";
const ADD_TO_CART = "bookingInfo/ADD_TO_CART";

const initialState = {
  type: null,
  bookingInfo: null,
  slots: null,
  activeDate: null,
  activeTab: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_BOOKING:
      return { ...state, ...payload };

    case SET_ACTIVE_DATE: {
      return { ...state, activeDate: payload.date };
    }

    case SET_SLOTS:
      return {
        ...state,
        slots: {
          ...state.slots,
          [payload.date]: {
            ...state.slots[payload.date],
            [payload.court]: {
              ...state.slots[payload.date][payload.court],
              slots: {
                ...state.slots[payload.date][payload.court].slots,
                [payload.slot]:
                  state.slots[payload.date][payload.court].slots[
                    payload.slot
                  ] === "available"
                    ? "selected"
                    : "available"
              }
            }
          }
        }
      };

    case SET_PLAYERS:
      return {
        ...state,
        slots: {
          ...state.slots,
          [payload.date]: {
            ...state.slots[payload.date],
            [payload.court]: {
              ...state.slots[payload.date][payload.court],
              players: payload.players
            }
          }
        }
      };

    default:
      return state;
  }
};

export const initBooking = (arenaId, bookaslotId, type) => {
  return async dispatch => {
    try {
      dispatch(apiLoading());
      let response;
      if (type === "bookaslot") {
        response = await api.initBooking(bookaslotId);
      } else if (type === "membership") {
        response = await api.initBooking(bookaslotId);
      } else {
        throw new Error("Page of unknown type");
      }

      //console.log("RES INIT", response);

      Object.entries(response.data.slots).forEach(([dateKey, dateValue]) => {
        Object.entries(dateValue).forEach(([courtKey, courtValue]) => {
          response.data.slots[dateKey][courtKey] = {
            players: response.data.courts[courtKey].minPlayers,
            slots: courtValue
          };
        });
      });

      dispatch({
        type: INIT_BOOKING,
        payload: {
          type,
          activeDate: Object.keys(response.data.slots)[0],
          bookingInfo: {
            arenaId: response.data.arenaId,
            bookaslotId,
            arenaName: response.data.arenaName,
            sport: response.data.sport,
            price: response.data.price,
            chargePerPlayer: response.data.chargePerPlayer,
            costPerHour: response.data.costPerHour,
            courts: response.data.courts,
            slotTimes: response.data.slotTimes
          },
          slots: response.data.slots
        }
      });

      dispatch(apiSuccess());
    } catch (error) {
      dispatch(apiError());
    }
  };
};

export const setActiveDate = date => ({
  type: SET_ACTIVE_DATE,
  payload: {
    date
  }
});

export const setSlots = (date, court, slot) => ({
  type: SET_SLOTS,
  payload: {
    date,
    court,
    slot
  }
});

export const setPlayers = (date, court, players) => ({
  type: SET_PLAYERS,
  payload: {
    date,
    court,
    players
  }
});

export const addToCart = () => {
  return async (dispatch, getState) => {
    try {
      const { slots } = getState().bookingState;
      const cartItems = [];
      if (slots) {
        dispatch(apiLoading());
        Object.entries(slots).forEach(([dateKey, dateValue]) => {
          Object.values(dateValue).forEach((slotValues) => {
            const { players, slots: slots2 } = slotValues;
            Object.entries(slots2)
              .reduce(
                (slotIdTotal, slotIdValue) =>
                  slotIdValue[1] === "selected"
                    ? [
                      ...slotIdTotal,
                      {
                        bookaslotSlotId: Number(slotIdValue[0]),
                        bookaslotDate: dateKey,
                        bookaslotPlayers: players
                      }
                    ]
                    : slotIdTotal,
                []
              )
              .forEach(selectedSlot => {
                cartItems.push(selectedSlot);
              });
          });
        });
        if (getState().bookingState.type === "bookaslot") {
          if (cartItems.length > 0 && Boolean(getState().userState.id)) {
            await api.addToCart(cartItems);
          }
        }
        dispatch(apiSuccess());
        dispatch(push("/cart"));
      }
    } catch (error) {
      console.log(error);
      dispatch(apiError());
    }
  };
};
