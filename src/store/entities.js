import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
    posts: postReducer,
    users: userReducer,
});
