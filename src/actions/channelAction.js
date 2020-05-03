import { SET_CURRENT_CHANNEL } from "./types";

export const setCurrentChannel = (currentChannel) => {
  return {
    type: SET_CURRENT_CHANNEL,
    payload: currentChannel,
  };
};
