import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";

import "./post.css";

function Post({ image, deletePopup }) {
    const [openPanel, setOpenPanel] = useState(false);

    function handlePanel() {
        setOpenPanel((prev) => !prev);
    }

    return (
        <div className='post-container'>
            <div className='post-container-top'>
                <div className='post-avatar'>
                    <Avatar imageUrl={"https://randomuser.me/api/portraits/men/79.jpg"} />

                    <div className='post-avatar-name'>
                        <p className='heading-font'>John Doe</p>
                        <small>johndoe123</small>
                    </div>
                </div>

                <button onClick={handlePanel} className='post-option' aria-label='open post menu option'>
                    <i className='bx bx-dots-vertical-rounded'></i>
                </button>

                {openPanel && (
                    <div className='post-option-panel'>
                        <button>Edit Post</button>
                        <hr style={{ border: "solid 1px #f2f2f2" }} />
                        <button
                            style={{ color: "red" }}
                            onClick={() => {
                                deletePopup();
                                handlePanel();
                            }}
                        >
                            Delete Post
                        </button>
                    </div>
                )}
            </div>

            <div className='post-container-media'>
                <img src={image} />
            </div>

            <div className='post-container-bottom'>
                <div className='post-action-container'>
                    <div className='post-action'>
                        <button className='post-action-btn'>
                            <i className='bx bx-heart'></i>
                        </button>

                        <p className='small-font'>1 Likes</p>
                    </div>
                </div>

                <div className='post-caption'>
                    <p className='body-font'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora facere tempore, facilis sunt
                        sapiente minima eum dolor recusandae praesentium dignissimos!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post;
