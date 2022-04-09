import React from "react";

import "./avatar.css";

function BigAvatar({ imageUrl }) {
    return (
        <div className='big-avatar'>
            {imageUrl ? (
                <div className='big-avatar-img'>
                    <img src={imageUrl} alt='john doe profile picture' />
                </div>
            ) : (
                <div className='big-avatar-placeholder'>
                    <i className='ri-user-3-fill'></i>
                </div>
            )}
        </div>
    );
}

export default BigAvatar;
