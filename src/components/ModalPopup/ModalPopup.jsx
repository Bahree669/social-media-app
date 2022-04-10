import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/postReducer";
import "./modalpopup.css";

function ModalPopup({ deleteModal, postId }) {
    const dispatch = useDispatch();

    function removePost() {
        dispatch(deletePost(postId));
        deleteModal();
    }

    return (
        <div className='popup-backdrop'>
            <div className='popup-container'>
                <div className='popup-text'>
                    <h1>Delete Content</h1>
                    <p className='body-font'>You are about to delete this post, are you sure?</p>
                </div>

                <div className='popup-actions'>
                    <button onClick={deleteModal} className='popup-action'>
                        Cancel
                    </button>

                    <button onClick={removePost} className='popup-action popup-action-continue'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalPopup;
