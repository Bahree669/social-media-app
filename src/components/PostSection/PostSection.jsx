import React, { useEffect, useState } from "react";
import { loadPosts } from "../../store/postReducer";
import configureStore from "../../store/configureStore";

import Post from "../Post/Post";
import ModalPopup from "../ModalPopup/ModalPopup";
import { PostLoader } from "../Loadings";
import "./postsection.css";

function PostSection() {
    const [showPopup, setShowPopup] = useState(false);
    const [posts, setPosts] = useState(null);

    const store = configureStore();
    store.dispatch(loadPosts());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const state = store.getState();

            setPosts(state.entities.posts.list);
        });
    }, []);

    function handleOpenPopup() {
        setShowPopup((prev) => !prev);
    }

    if (!posts)
        return (
            <div className='post-section'>
                <PostLoader />
            </div>
        );

    return (
        <section className='post-section'>
            {showPopup && <ModalPopup deletePopup={handleOpenPopup} />}

            {posts.length ? (
                posts?.map((post) => <Post post={post} key={post._id} deletePopup={handleOpenPopup} />)
            ) : (
                <PostLoader />
            )}
        </section>
    );
}

export default PostSection;
