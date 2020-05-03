import { SET_USER, CLEAR_USER } from "../actions/types";

const initUserState = {
  isLoading: true,
  currentUser: null,
};

const user_reducer = (state = initUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        currentUser: payload.currentUser,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default user_reducer;
