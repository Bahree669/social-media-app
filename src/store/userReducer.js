import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "./apiActions";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        loading: false,
        redirect: false,
        error: {
            state: false,
            message: "",
        },
    },
    reducers: {
        userLoggedIn: (user, action) => {
            user.data = action.payload;
            localStorage.setItem("profile", JSON.stringify(user.data));
        },

        userLogedOut: (user, action) => {
            user.data = null;
            localStorage.removeItem("profile");
        },

        authRequested: (user, action) => {
            user.loading = true;
        },

        authSuccess: (user, action) => {
            user.loading = false;
            user.data = action.payload;
            user.redirect = true;
            localStorage.setItem("profile", JSON.stringify(user.data));
        },

        authError: (user, action) => {
            user.error.message = action.payload;
            user.error.state = true;
            user.loading = false;
        },

        errorCleared: (user, action) => {
            user.error.message = "";
            user.error.state = false;
        },

        redirected: (user, action) => {
            user.redirect = false;
        },
    },
});

const { userLoggedIn, redirected, userLogedOut, authRequested, authError, authSuccess, errorCleared } =
    userSlice.actions;

const url = "/users";

export const logInUser = (formData) => (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url: `${url}/signin`,
            method: "POST",
            data: formData,
            onStart: authRequested.type,
            onSuccess: authSuccess.type,
            onError: authError.type,
        })
    );
};

export const signUpUser = (formData) => (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url: `${url}/signup`,
            method: "POST",
            data: formData,
            onStart: authRequested.type,
            onSuccess: authSuccess.type,
            onError: authError.type,
        })
    );
};

export const logOutUser = () => (dispatch, getState) => {
    dispatch(userLogedOut());
};

export const clearError = () => (dispatch, getState) => {
    dispatch(errorCleared());
};

export const stopRedirect = () => (dispatch, getState) => {
    dispatch(redirected());
};

export default userSlice.reducer;
