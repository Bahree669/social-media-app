import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/postReducer";

import SecondaryNavbar from "../Navbar/SecondaryNavbar";
import Thumbnails from "./Thumbnails/Thumbnails";

import "./postform.css";

function PostForm() {
    const [postData, setPostData] = useState({
        caption: "",
        selectedFiles: [],
    });
    const [cptIndicator, setCptIndicator] = useState(postData.caption.length);
    const { loading } = useSelector((state) => state.entities.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setCptIndicator(postData.caption.length);
    }, [postData.caption.length]);

    useEffect(() => {
        console.log(loading);
    }, [loading]);

    function backButton() {
        navigate("/");
    }

    // Submit post action
    function handleSubmit(e) {
        e.preventDefault();

        if (postData.caption.length || postData.selectedFiles.length) {
            dispatch(addPost(postData));
            setPostData({ ...postData, caption: "", selectedFiles: [] });
        }
    }

    function previewFiles(e) {
        let files = e.target.files;

        let data = [];
        function readAndPreview(file) {
            // Make sure `file.name` matches our extensions criteria
            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                let reader = new FileReader();

                reader.addEventListener(
                    "load",
                    function () {
                        data.push({ id: nanoid(), img: this.result });
                        setPostData({ ...postData, selectedFiles: data });
                    },
                    false
                );

                reader.readAsDataURL(file);
            }
        }

        if (files) {
            [].forEach.call(files, readAndPreview);
        }
    }

    // Upload process component
    function PostFromNotif() {
        return (
            <div className='post-form-notif'>
                <p>Uploading</p>
            </div>
        );
    }

    // Picture input field
    // No ugly image input
    const fileElem = useRef();
    function imgInputField() {
        if (fileElem.current) {
            fileElem.current.click();
        }
    }

    // We need the file id to remove it from the state
    function removeImageFromState(fileImg) {
        const state = postData.selectedFiles.slice();
        const newState = state.filter((state) => state !== fileImg);
        setPostData({ ...postData, selectedFiles: newState });
    }

    return (
        <div className='post-form-container'>
            <SecondaryNavbar title={"Write Post"} backButton={backButton} />

            <div className='post-form'>
                {loading && <PostFromNotif />}

                <div className='caption-indicator'>{cptIndicator} / 250</div>

                <form>
                    <textarea
                        name='caption'
                        id='caption'
                        placeholder='Write your moment...'
                        cols='30'
                        rows='7'
                        maxLength={250}
                        onChange={(e) => setPostData({ ...postData, caption: e.target.value })}
                    ></textarea>

                    <div className='post-form-content'>
                        <div>
                            <input
                                ref={fileElem}
                                className='post-form-image'
                                type='file'
                                label='image'
                                name='selectedFile'
                                multiple={true}
                                accept='image/*'
                                onChange={previewFiles}
                            />
                            <button type='button' className='post-form-image-button' onClick={imgInputField}>
                                <i className='ri-image-fill'></i>
                            </button>
                        </div>

                        <Thumbnails imgThumb={postData?.selectedFiles} removeImageFromState={removeImageFromState} />
                    </div>

                    <button className='post-form-submit' type='submit' onClick={handleSubmit}>
                        POST
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PostForm;
