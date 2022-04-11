import React from "react";

import "./postaction.css";

function PostAction({ user, likes, comments }) {
    return (
        <div className='post-action-container'>
            <div className='post-action'>
                <button disabled={!user} className='post-action-button'>
                    <i className='ri-heart-line'></i>
                </button>
                <button disabled={!user} className='post-action-button'>
                    <i className='ri-chat-1-line'></i>
                </button>
                <button disabled={!user} className='post-action-button'>
                    <i className='ri-bookmark-line'></i>
                </button>
            </div>

            <button disabled={!user} className='post-action-button'>
                <i className='ri-share-line'></i>
            </button>
        </div>
    );
}

export default PostAction;
