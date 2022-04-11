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

        postDeleted: (posts, action) => {
            const id = posts.list.findIndex(({ _id }) => _id === action.payload);
            posts.list.splice(id, 1);
        },
    },
});

const { postAdded, postReceived, postRequested, postRequestFailed, postDeleted } = postSlice.actions;

const url = "/posts";

export const loadPosts = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.posts;

    // const difInMinutes = moment().diff(moment(lastFetch), "minutes");

    // if (difInMinutes < 5) return

    return dispatch(
        apiCallBegan({
            url,
            onStart: postRequested.type,
            onSuccess: postReceived.type,
            onError: postRequestFailed.type,
        })
    );
};

export const deletePost = (postId) => async (dispatch, getState) => {
    dispatch(postDeleted(postId));

    return dispatch(
        apiCallBegan({
            url: `${url}/${postId}`,
            method: "DELETE",
            onError: postRequestFailed.type,
        })
    );
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

export default postSlice.reducer;
