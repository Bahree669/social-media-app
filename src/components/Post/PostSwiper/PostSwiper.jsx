import React from "react";
import { nanoid } from "nanoid";
import { SwiperSlide, Swiper } from "swiper/react";
import { A11y, Pagination } from "swiper";

// Import all the styles
import "./postswiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PostSwiper({ image }) {
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={false}
                modules={[A11y, Pagination]}
                className='mySwiper'
            >
                {image.map((file) => (
                    <SwiperSlide key={nanoid()}>
                        <div className='swiper-img'>
                            <img src={file.img} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default PostSwiper;
