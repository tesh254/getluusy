import { firebase } from "../../firebase";
import { LOADING, PROFILE, ERROR } from "../type";
import Axios from "axios";

const apiUrl = process.env.API_URL;

export const fetchProfile = () => dispatch => {
  dispatch({
    type: LOADING
  });

  Axios.get(`${apiUrl}/api/v1/get-own-zone`)
    .then(res =>
      dispatch({
        type: PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ERROR
      })
    );
};
