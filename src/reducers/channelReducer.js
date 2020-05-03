import { SET_CURRENT_CHANNEL } from "../actions/types";

const channelInitState = {
  currentChannel: null,
  data: "",
};

const channel_reducer = (state = channelInitState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: payload,
      };
    default:
      return state;
  }
};

export default channel_reducer;
