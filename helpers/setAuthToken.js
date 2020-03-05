import { auth } from "../firebase";
import Axios from "axios";

export default async func => {
  auth()
    .currentUser.getIdToken(true)
    .then(idToken => {
      Axios.defaults.headers.common["Authorization"] = idToken;
      func(idToken);
    });
};
