import store from "./store";

export default (type, payload) => store.dispatch({ type, payload });
