import { combineReducers } from "redux";
import AuthStore from "./authStore";

export default combineReducers({
    auth: AuthStore,
});
