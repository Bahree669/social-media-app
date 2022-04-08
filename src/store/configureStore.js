import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./midleware/loggerMiddleware";
import api from "./midleware/apiCallMidldeware";
import toast from "./midleware/toastMiddleware";

export default function () {
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(), toast, api],
    });
}
