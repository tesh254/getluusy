import { LOADING, PROFILE, ERROR } from "../type";

const initialState = {
  user: {},
  isLoading: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    case PROFILE:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
        return state
  }
};

export default userReducer;
