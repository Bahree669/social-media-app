import React, { useState } from "react";
import Post from "../Post/Post";

import "./postsection.css";

import ModalPopup from "../ModalPopup/ModalPopup";

function PostSection() {
    const [showPopup, setShowPopup] = useState(false);

    function handleOpenPopup() {
        setShowPopup((prev) => !prev);
    }

    return (
        <section className='post-section'>
            {showPopup && <ModalPopup deletePopup={handleOpenPopup} />}

            <Post
                image={
                    "https://images.unsplash.com/photo-1620104493388-8747c90fcc2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                }
                deletePopup={handleOpenPopup}
            />

            <Post
                image={
                    "https://images.unsplash.com/photo-1575819719798-83d97dd6949c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                }
                deletePopup={handleOpenPopup}
            />

            <Post
                image={
                    "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                }
                deletePopup={handleOpenPopup}
            />

            <Post
                image={
                    "https://images.unsplash.com/photo-1646582750553-2c72b67e360c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                }
                deletePopup={handleOpenPopup}
            />

            <Post
                image={
                    "https://images.unsplash.com/photo-1646610666254-9b12006dbfd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                }
                deletePopup={handleOpenPopup}
            />
        </section>
    );
}

export default PostSection;
