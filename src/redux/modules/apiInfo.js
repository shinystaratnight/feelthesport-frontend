const SET_API_STATUS = "apiInfo/SET_API_STATUS";

const initialState = {
  apiLoading: false,
  apiError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_API_STATUS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export const apiLoading = () => ({
  type: SET_API_STATUS,
  payload: {
    apiLoading: true
  }
});

export const apiSuccess = () => ({
  type: SET_API_STATUS,
  payload: {
    apiLoading: false,
    apiError: false
  }
});

export const apiError = () => ({
  type: SET_API_STATUS,
  payload: {
    apiLoading: false,
    apiError: true
  }
});
