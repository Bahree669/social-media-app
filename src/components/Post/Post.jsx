import React, { useState } from "react";
import PostSwiper from "./PostSwiper/PostSwiper";
import PostAction from "./PostAction/PostAction";

import "./post.css";

function Post({ post, deleteModal, getPostId }) {
    const [openPanel, setOpenPanel] = useState(false);

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
                    <div className='post-avatar'>
                        <img src={"https://randomuser.me/api/portraits/men/61.jpg"} alt='' />
                    </div>

                    <div>
                        <figcaption className='post-username'>
                            <p>John Doe</p>
                            <small>@bigdaddy669</small>
                        </figcaption>
                    </div>
                </figure>

                <button className='post-option' onClick={handlePanel}>
                    <i className='ri-more-2-fill'></i>
                </button>

                {openPanel && (
                    <div className='post-panel'>
                        <button>Edit Post</button>
                        <button onClick={() => openModal(post._id)}>Delete Post</button>
                    </div>
                )}
            </div>

            <div>
                {post?.selectedFiles?.length ? (
                    <div className='post-content'>
                        <div className='post-caption'>
                            <p>{post?.caption}</p>
                        </div>

                        <PostSwiper image={post?.selectedFiles} />
                        <PostAction comments={post?.comments} likes={post?.likes} caption={post?.caption} />
                    </div>
                ) : (
                    <div className='post-content'>
                        <div className='post-caption'>
                            <p>{post?.caption}</p>
                        </div>

                        <PostAction comments={post?.comments} likes={post?.likes} withImage={false} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Post;
