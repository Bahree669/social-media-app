import React, { useState } from "react";
import PostSection from "../PostSection/PostSection";
import UserAside from "../UserAside/UserAside";

import "./home.css";

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <div className='home-post'>
                    <PostSection />
                </div>

                <div className='home-user'>
                    <UserAside />
                </div>
            </div>
        </div>
    );
}

export default Home;
