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
    const [deleteModal, setDeleteModal] = useState(false);
    const [postId, setPostId] = useState(null);
    const postsState = useSelector((state) => state.entities.posts);
    const dispatch = useDispatch();
    const store = configureStore();

    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    function handleDeleteModal() {
        setDeleteModal((prev) => !prev);
    }

    function getPostId(id) {
        setPostId(id);
    }

    if (postsState.loading)
        return (
            <div className='post-section'>
                <PostLoader />
            </div>
        );

    return (
        <section className='post-section'>
            {deleteModal && <ModalPopup deleteModal={handleDeleteModal} postId={postId} />}

            {postsState.list.length ? (
                postsState?.list.map((post) => (
                    <Post post={post} key={post._id} deleteModal={handleDeleteModal} getPostId={getPostId} />
                ))
            ) : (
                <PostLoader />
            )}
        </section>
    );
}

export default PostSection;
