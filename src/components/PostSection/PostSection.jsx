import React, { useEffect, useState } from "react";
import { loadPosts, deletePost } from "../../store/postReducer";
import { useDispatch, useSelector } from "react-redux";
import configureStore from "../../store/configureStore";

import Post from "../Post/Post";
import ModalPopup from "../ModalPopup/ModalPopup";
import { PostLoader } from "../Loadings";
import "./postsection.css";

function PostSection() {
    const [posts, setPosts] = useState(null);
    const dispatch = useDispatch();
    const store = configureStore();
    const postsState = useSelector((state) => state.entities.posts);

    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    if (postsState.loading)
        return (
            <div className='post-section'>
                <PostLoader />
            </div>
        );

    return (
        <section className='post-section'>
            {postsState.list.length ? (
                postsState?.list.map((post) => <Post post={post} key={post._id} />)
            ) : (
                <PostLoader />
            )}
        </section>
    );
}

export default PostSection;
