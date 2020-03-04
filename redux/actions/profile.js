import { firebase } from "../../firebase"
import { LOADING, PROFILE, ERROR } from "../type"

export const fetchProfile = () => dispatch => {
    dispatch({
        type: LOADING
    })

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user)
            dispatch({
                type: PROFILE,
                payload: user
            })
        }
        else {
            console.log("Something is wrong")
            dispatch({
                type: ERROR
            })
        }
    })
}