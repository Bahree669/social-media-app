import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postReducer";

export default combineReducers({
    posts: postReducer,
});
