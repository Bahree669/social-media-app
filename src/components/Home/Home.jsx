import React from "react";
import PostSection from "../PostSection/PostSection";
import "./home.css";

function Home() {
    return (
        <div className='home'>
            <div className='home-post'>
                <PostSection />
            </div>
        </div>
    );
}

export default Home;
