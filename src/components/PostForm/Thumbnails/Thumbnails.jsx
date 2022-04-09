import React from "react";
import "./thumbnails.css";

function Thumbnails({ imgThumb, removeImageFromState }) {
    return imgThumb.length ? (
        <div className='post-thumbnails '>
            {imgThumb?.map((thumb) => (
                <div key={thumb.id} className='post-thumb'>
                    <img
                        src={thumb.img}
                        onLoad={function (e) {
                            URL.revokeObjectURL(e.target.src);
                        }}
                    />

                    <button type='button' onClick={(e) => removeImageFromState(thumb)} className='post-thumbnails-btn'>
                        <i className='ri-close-fill'></i>
                    </button>
                </div>
            ))}
        </div>
    ) : (
        <div className='post-thumbnails-caption'>
            <p>Add some images (jpeg. jpg. png.)</p>
        </div>
    );
}

export default Thumbnails;
