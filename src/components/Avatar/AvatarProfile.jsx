import React from "react";

import "./avatar.css";

function BigAvatar({ imageUrl }) {
    return (
        <div className='profile-avatar'>
            {imageUrl ? (
                <div className='profile-avatar-img'>
                    <img src={imageUrl} />
                </div>
            ) : (
                <div className='profile-avatar-placeholder'>
                    <i className='ri-user-3-fill'></i>
                </div>
            )}
        </div>
    );
}

export default BigAvatar;
