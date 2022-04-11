import React, { useState } from "react";
import moment from "moment";
import PostSwiper from "./PostSwiper/PostSwiper";
import PostAction from "./PostAction/PostAction";
import BigAvatar from "../Avatar/BigAvatar";

import "./post.css";

function Post({ post, deleteModal, getPostId }) {
    const [openPanel, setOpenPanel] = useState(false);
    const user = JSON.parse(localStorage.getItem("profile"));

    function handlePanel() {
        setOpenPanel((prev) => !prev);
    }

    function openModal(id) {
        deleteModal();
        handlePanel();
        getPostId(id);
    }

    return (
        <div className='post-container'>
            <div className='post-container-top'>
                <figure className='post-user'>
                    <BigAvatar imageUrl={""} />

                    <div className='post-username'>
                        <figcaption>
                            <p className='post-name'>{post?.creator.user}</p>
                            <small>{post?.creator.userName}</small>
                        </figcaption>

                        <div aria-hidden='true' className='post-hour'>
                            <small>{moment(post.createdAt).fromNow()}</small>
                        </div>
                    </div>
                </figure>

                {user?.id === post?.creator.id ? (
                    <button className='post-option' onClick={handlePanel}>
                        <i className='ri-more-2-fill'></i>
                    </button>
                ) : null}

                {openPanel && (
                    <div className='post-panel'>
                        <button>Edit Post</button>
                        <button onClick={() => openModal(post._id)}>Delete Post</button>
                    </div>
                )}
            </div>

            <div>
                <div className='post-content'>
                    <div className='post-caption'>
                        <pre>{post?.caption}</pre>
                    </div>

                    {post?.selectedFiles.length ? <PostSwiper image={post?.selectedFiles} /> : null}

                    <PostAction user={user} comments={post?.comments} likes={post?.likes} withImage={false} />
                </div>
            </div>
        </div>
    );
}

export default Post;
