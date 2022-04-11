import React from "react";
import "./postloader.css";

function PostLoader() {
    function Loader() {
        return (
            <div className='post-loader'>
                <div className='post-loader-top'>
                    <div className='loader-top-left shimmer'></div>
                    <div className='loader-top-right'>
                        <div className='shimmer'></div>
                        <div className='shimmer'></div>
                    </div>
                </div>

                <div className='post-loader-content'>
                    <div className='caption-loader shimmer'></div>
                    <div className='caption-loader two shimmer'></div>
                    <div className='caption-loader three shimmer'></div>

                    <div className='image-loader shimmer'></div>
                </div>

                <div className='post-loader-bottom'>
                    <div className='shimmer'></div>
                    <div className='shimmer'></div>
                    <div className='shimmer'></div>
                </div>
            </div>
        );
    }

    return (
        <div className='post-loader-container'>
            <Loader />
            <Loader />
        </div>
    );
}

export default PostLoader;
