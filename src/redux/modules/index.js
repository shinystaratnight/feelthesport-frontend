import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import siteInfoReducer from "./siteInfo";
import userInfoReducer from "./userInfo";
import arenaInfoReducer from "./arenaInfo";
import eventInfoReducer from "./eventInfo";
import bookingInfoReducer from "./bookingInfo";
import cartInfoReducer from "./cartInfo";
import hubInfoReducer from "./hubInfo";
import apiInfoReducer from "./apiInfo";
import modalInfoReducer from "./modalInfo";

export default history =>
  combineReducers({
    router: connectRouter(history),
    userState: userInfoReducer,
    siteState: siteInfoReducer,
    arenaState: arenaInfoReducer,
    eventState: eventInfoReducer,
    bookingState: bookingInfoReducer,
    cartState: cartInfoReducer,
    hubState: hubInfoReducer,
    apiState: apiInfoReducer,
    modalState: modalInfoReducer
  });
