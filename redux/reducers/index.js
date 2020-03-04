import { combineReducers } from "redux";
import userReducer from "./profile";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
