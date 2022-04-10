import { createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
import { apiCallBegan, apiCallFailed } from "./apiActions";

const postSlice = createSlice({
    name: "post",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        postAdded: (posts, action) => {
            posts.list.push(action.payload);
        },

        postReceived: (posts, action) => {
            posts.list = action.payload;
            posts.loading = false;
            posts.lastFetch = Date.now();
        },

        postRequested: (posts, action) => {
            posts.loading = true;
        },

        postRequestFailed: (posts, action) => {
            posts.loading = false;
        },
    },
});

const { postAdded, postReceived, postRequested, postRequestFailed } = postSlice.actions;

const url = "/posts";

export const loadPosts = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.posts;

    const difInMinutes = moment().diff(moment(lastFetch), "minutes");

    // if (difInMinutes < 1) return;

    return dispatch(
        apiCallBegan({
            url,
            onStart: postRequested.type,
            onSuccess: postReceived.type,
            onError: postRequestFailed.type,
        })
    );
};

export const deletePost = (postId) => (dispatch, getState) => {
    console.log(postId);
};

export const addPost = (postData) => async (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url,
            method: "POST",
            data: postData,
            onStart: postRequested.type,
            onSuccess: postReceived.type,
            onError: postRequestFailed.type,
        })
    );
};

// SELECTORS
export const getAllPosts = createSelector(
    (state) => state.entities.posts,
    (posts) => posts
);

export default postSlice.reducer;
