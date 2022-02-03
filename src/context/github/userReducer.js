//initial state
export const initialState = {
  users: [],
  loading: false,
  user: {},
  isNoUser: false,
};

//action types
export const GET_USERS = "GET_USERS";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const CLEAR_USERS = "CLEAR_USERS";
export const GET_USER = "GET_USER";
export const IS_NO_USER = "IS_NO_USER";
export const isNoUser = () => {
  return { type: IS_NO_USER };
};

export const clearUsers = () => {
  return {
    type: CLEAR_USERS,
  };
};

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING,
  };
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    case CLEAR_USERS:
      return { ...state, users: [] };
    case GET_USER:
      return { ...state, user: action.payload };

    case IS_NO_USER:
      return { ...state, isNoUser: !state.isNoUser };
    default:
      return state;
  }
};
