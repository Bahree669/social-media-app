import React from "react";

import "./avatar.css";

function Avatar({ imageUrl }) {
    return (
        <div className='avatar'>
            {imageUrl ? (
                <div className='avatar-img'>
                    <img src={imageUrl} alt='john doe profile picture' />
                </div>
            ) : (
                <div className='avatar-placeholder'>
                    <i className='ri-user-3-fill'></i>
                </div>
            )}
        </div>
    );
}

export default Avatar;
