import React, { useState, useEffect } from "react";
import decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import BigAvatar from "../Avatar/BigAvatar";

import "./useraside.css";

function UserAside() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logOut();
            }
        }

        const profile = JSON.parse(localStorage.getItem("profile"));
        setUser(profile);
    }, [location]);

    function logOut() {
        setUser(null);
        navigate("/auth");
    }

    return (
        <aside className='user-aside'>
            <div className='user-aside-avatar'>
                <BigAvatar imageUrl={""} />
            </div>

            <div className='user-aside-menu'>
                <div className='user-aside-action'>
                    <div>
                        <i className='ri-user-3-fill'></i>
                        <p>profile</p>
                    </div>
                    <div>
                        <i className='ri-bookmark-line'></i>
                        <p>saved posts</p>
                    </div>
                </div>

                <button className='user-aside-btn' onClick={logOut}>
                    {user ? "Log Out" : "Log In"} {user && <strong>{user.userName}</strong>}
                </button>
            </div>
        </aside>
    );
}

export default UserAside;
