import React, { useState } from "react";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";
import AvatarProfile from "../Avatar/AvatarProfile";
import { useNavigate } from "react-router-dom";

import "./profilepage.css";

function ProfilePage() {
    const user = JSON.parse(localStorage.getItem("profile"));
    const [content, setContent] = useState("mypost");
    const navigate = useNavigate();

    function backToHome() {
        navigate("/");
    }

    return (
        <section className='profile-page'>
            {/* expect 'title' string and 'backButton' fn */}
            <SecondaryNavbar title={"Profile"} backButton={backToHome} />

            <div className='profile'>
                <AvatarProfile imageUrl={""} />

                <p className='profile-name'>{user?.name}</p>
                <p className='profile-username'>{user?.userName}</p>

                <div className='profile-bio'>
                    <p>✨Lorem ipsum dolor✨</p>
                </div>
            </div>

            <div className='profile-content-control'>
                <button className='content-button active'>My Post</button>
                <button className='content-button'>Saved Post</button>
            </div>
        </section>
    );
}

export default ProfilePage;
