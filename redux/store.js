import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const bindMiddleware = middlware => {
  return applyMiddleware(...middlware);
};

const initStore = () => {
  return createStore(reducers, {}, applyMiddleware(thunk));
};

export default initStore;
