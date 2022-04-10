import React from "react";
import configureStore from "../../store/configureStore";
import "./modalpopup.css";

function ModalPopup({ deletePopup, postId }) {
    const store = configureStore();

    function deletePost() {
        console.log(postId);
    }

    return (
        <div className='popup-backdrop'>
            <div className='popup-container'>
                <div className='popup-text'>
                    <h1>Delete Content</h1>
                    <p className='body-font'>You are about to delete this post, are you sure?</p>
                </div>

                <div className='popup-actions'>
                    <button onClick={deletePopup} className='popup-action'>
                        Cancel
                    </button>

                    <button onClick={deletePost} className='popup-action popup-action-continue'>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalPopup;
