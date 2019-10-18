import axios from "axios";
import AuthorizationHeader from "./helpers/authorizationHeaderJwt";

export const siteInfo = (city, sport) => {
  let params = { params: {} };
  if (city) params.params.city = city;
  if (sport) params.params.sport = sport;
  return axios.get("/api/siteInfo", params);
};

export const validateSession = () => {
  return axios.get("/api/users/validateSession", AuthorizationHeader());
};

export const register = registerInfo => {
  return axios.post("/api/users/register", registerInfo);
};

export const facebookLogin = facebookResponse => {
  return axios.post("/api/users/login/facebook", facebookResponse);
};

export const googleLogin = googleResponse => {
  return axios.post("/api/users/login/google", googleResponse);
};


export const login = (username, password) => {
  return axios.post("/api/users/login", {
    username,
    password
  });
};

export const sendMobileVerifyOTP = (phone) => {
  return axios.post("/api/users/sendMobileVerifyOTP", { phone }, AuthorizationHeader());
};

export const submitVerifyMobileOTP = (phone, otp) => {
  return axios.post("/api/verifyOTPMobile", { phone, otp });
};

export const sendEmailVerifyOTP = (email) => {
  return axios.post("/api/users/sendEmailVerifyOTP", { email }, AuthorizationHeader());
};

export const submitVerifyEmailOTP = (email, otp) => {
  return axios.post("/api/verifyOTPEmail", { email, otp });
};

export const sendOTP = (mobile_email) => {
  return axios.post("/api/sendOTP", { mobile_email });
};

export const verifyOTP = (mobile_email, otp) => {
  return axios.post("/api/verifyOTP", { mobile_email, otp });
};


export const logout = () => {
  return axios.post("/api/users/logout", null, AuthorizationHeader());
};

export const setCity = city => {
  return axios.put(
    "/api/userSelectedCities",
    { city },
    AuthorizationHeader(true)
  );
};

export const setSport = sport => {
  return axios.put(
    "/api/userSelectedSports",
    { sport },
    AuthorizationHeader(true)
  );
};

export const initArena = arenaId => {
  return axios.get(`/api/arena/${arenaId}`);
};

export const getReviews = (arenaId, reviewsPage) => {
  return axios.get(`/api/reviews/${arenaId}/${reviewsPage}`);
};

export const submitReview = (arenaId, rating, body) => {
  return axios.post(
    "/api/reviews",
    { arenaId, rating, body },
    { headers: { "Content-Type": "application/json" } }
  );
};

export const initEvent = eventId => {
  return axios.get(`/api/event/${eventId}`);
};

export const initBooknplay = (city, sport) => {
  let params = { params: {} };
  if (city) params.params.city = city;
  if (sport) params.params.sport = sport;
  return axios.get("/api/initBooknplay",params);
};

export const initClubs = () => {
  return axios.get("/api/initClubs");
};

export const initAcademies = () => {
  return axios.get("/api/initAcademies");
};

export const initEvents = () => {
  return axios.get("/api/initEvents");
};

export const getBooknplayCards = filters => {
  return axios.post("/api/booknplays", filters, {
    headers: { "Content-Type": "application/json" }
  });
};

export const getClubsCards = filters => {
  return axios.post("/api/clubs", filters, {
    headers: { "Content-Type": "application/json" }
  });
};

export const getAcademiesCards = filters => {
  return axios.post("/api/academies", filters, {
    headers: { "Content-Type": "application/json" }
  });
};

export const getEventsCards = filters => {
  return axios.post("/api/getEvents", filters, {
    headers: { "Content-Type": "application/json" }
  });
};

export const initBooking = bookaslotId => {
  return axios.get(`/api/bookaslot/${bookaslotId}`);
};

export const addToCart = cartItems => {
  return axios.post(
    "/api/carts",
    { cartItems },
    AuthorizationHeader(true)
  );
};

export const initCart = () => {
  return axios.get("/api/carts/", AuthorizationHeader());
};

export const getOrder = () => {
  return axios.get("/api/cartOrders", AuthorizationHeader());
};

export const completeTransaction = () => {
  return axios.post("/api/transactions",{ }, AuthorizationHeader());
};

export const getTransaction = transactionId => {
  return axios.get(`/api/transactions/${transactionId}`, AuthorizationHeader());
};

export const deleteItem = itemId => {
  return axios.delete(`/api/carts/${itemId}`, AuthorizationHeader());
};

export const setUsedPoints = points => {
  return axios.put("/api/cartPoints", { points }, AuthorizationHeader(true));
};

export const setUsedOfferBySelect = offerId => {
  return axios.put("/api/cartOffer", { offerId }, AuthorizationHeader(true));
};
