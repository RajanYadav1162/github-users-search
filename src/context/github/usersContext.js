import { createContext, useReducer } from "react";
import {
  GET_USER,
  GET_USERS,
  initialState,
  isNoUser,
  toggleLoading,
} from "./userReducer";

import { userReducer } from "./userReducer";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const fetchUsers = async (user) => {
    dispatch(toggleLoading());
    const res = await fetch("https://api.github.com/search/users?q=" + user);

    const data = await res.json();
    if (data.total_count === 0) {
      dispatch(isNoUser());

      setTimeout(() => {
        dispatch(isNoUser());
      }, 3000);

      dispatch(toggleLoading());

      return;
    }
    dispatch({ type: GET_USERS, payload: data });
    dispatch(toggleLoading());
  };

  const fetchUser = async (username) => {
    dispatch(toggleLoading());
    const res = await fetch("https://api.github.com/users/" + username);

    const data = await res.json();
    dispatch({ type: GET_USER, payload: data });
    dispatch(toggleLoading());
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        fetchUsers,
        isLoading: state.loading,
        dispatch,
        fetchUser,
        user: state.user,
        isNoUser: state.isNoUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
