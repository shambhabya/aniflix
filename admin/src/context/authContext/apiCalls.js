import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, user);
    console.log(res);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("failure")
    dispatch(loginFailure());
  }
};