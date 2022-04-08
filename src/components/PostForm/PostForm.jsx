import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";

import "./postform.css";

function PostForm() {
    const [postData, setPostData] = useState({
        caption: "",
        selectedFiles: [],
    });

    const [imgThumb, setImgThumb] = useState([]);

    const [cptIndicator, setCptIndicator] = useState(postData.caption.length);
    const [uploadProcess, setUploadProcess] = useState({ state: false, text: "" });

    useEffect(() => {
        setCptIndicator(postData.caption.length);
    }, [postData.caption.length]);

    // navigation
    const navigate = useNavigate();

    function backButton() {
        navigate("/");
    }

    // handling submit
    let data;
    async function handleSubmit(e) {
        e.preventDefault();

        // setUploadProcess({ ...uploadProcess, state: true, text: "Uploading..." });
        // if (postData.caption.length || postData.selectedFiles.length) {
        //     // data = await dispatch(uploadPost(postData));
        // }

        // if (typeof data === "object") {
        //     setUploadProcess({ ...uploadProcess, state: true, text: "Uploaded!" });

        //     setTimeout(() => {
        //         setUploadProcess({ ...uploadProcess, state: false, text: "" });
        //     }, 1000);
        // }

        console.log(postData.selectedFiles);
    }

    function handleFileUpload(e) {
        let filesArray = [];
        for (let i = 0; i < e.target.files.length; i++) {
            filesArray.push(e.target.files[i]);
        }

        const thumbs = filesArray.map((file, i) => URL.createObjectURL(file));
        setImgThumb(thumbs);

        let data = [];
        filesArray.forEach(async (file) => {
            const base64 = await convertToBase64(file);
            console.log(base64);
            data.push(base64);
        });

        // setPostData({ ...postData, selectedFiles: data });
    }

    // Convert the image file to base64
    function convertToBase64(files) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    // form notif compponent
    function PostFromNotif() {
        return (
            <div className='post-form-notif'>
                <p>{uploadProcess.text}</p>
            </div>
        );
    }

    // Picture input field
    const fileElem = useRef();
    function imgInputField() {
        if (fileElem.current) {
            fileElem.current.click();
        }
    }

    return (
        <div className='post-form-container'>
            <SecondaryNavbar title={"Write Post"} backButton={backButton} />

            <div className='post-form'>
                {uploadProcess.state && <PostFromNotif />}

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
                                onChange={handleFileUpload}
                            />
                            <button type='button' className='post-form-image-button' onClick={imgInputField}>
                                <i className='ri-image-fill'></i>
                            </button>
                        </div>

                        <div className='post-image-thumb'>
                            {imgThumb.map((thumb) => (
                                <div className='image-thumb'>
                                    <img
                                        src={thumb}
                                        onLoad={function (e) {
                                            URL.revokeObjectURL(e.target.src);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
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
