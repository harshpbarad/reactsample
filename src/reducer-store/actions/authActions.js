import axios from "axios";
import { config } from "../../common-components/const";
import { ADMIN_LOGIN, ADMIN_REGISTER, CUSTOMER_REGISTER } from "../../common-components/api_endpoint";

export const AdminLogin = (userObj) => {
  return async (dispatch) => {
    return await axios
      .post(ADMIN_LOGIN, userObj, config)
      .then((res) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data
        });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAIL" });
        return error?.response?.data;
      });
  };
};

export const adminRegister = async (userObj) => {
  return await axios
    .post(ADMIN_REGISTER, userObj, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });
};

export const customerRegister = async (userObj) => {
  return await axios
    .post(CUSTOMER_REGISTER, userObj, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });
};