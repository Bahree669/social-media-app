import React from "react";

import "./postaction.css";

function PostAction({ withImage, likes, comments }) {
    return withImage ? (
        <div className='post-action-container with-picture'>
            <div className='post-action'>
                <button className='post-action-button'>
                    <i className='ri-heart-line'></i>&nbsp; <p>{likes.length}</p>
                </button>
                <button className='post-action-button'>
                    <i className='ri-chat-1-line'></i>&nbsp; <p>{comments.length}</p>
                </button>
                <button className='post-action-button'>
                    <i className='ri-bookmark-line'></i>
                </button>
            </div>
        </div>
    ) : (
        <div className='post-action-container'>
            <div className='post-action'>
                <button className='post-action-button'>
                    <i className='ri-heart-line'></i>&nbsp; <p>{likes.length}</p>
                </button>
                <button className='post-action-button'>
                    <i className='ri-chat-1-line'></i>&nbsp; <p>{comments.length}</p>
                </button>
                <button className='post-action-button'>
                    <i className='ri-bookmark-line'></i>
                </button>
            </div>
        </div>
    );
}

export default PostAction;
