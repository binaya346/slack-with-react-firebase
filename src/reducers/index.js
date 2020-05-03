import { combineReducers } from "redux";
import user_reducer from "./userReducer";
import channel_reducer from "./channelReducer";

const rootReducer = combineReducers({
  user: user_reducer,
  channel: channel_reducer,
});

export default rootReducer;
