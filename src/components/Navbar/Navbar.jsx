import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import { useLocation, useNavigate, Link } from "react-router-dom";
import decode from "jwt-decode";

import "./navbar.css";

function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    function handleMenu() {
        setOpenMenu((prev) => !prev);
    }

    function logOut() {
        // dispatch({ type: "LOGOUT" });
        setUser(null);

        handleMenu();
        navigate("/auth");
    }

    return (
        <header className='header'>
            <nav className='header-navigation'>
                <div onClick={handleMenu}>
                    <Avatar imageUrl={""} />
                </div>

                <button className='header-action-btn'>
                    <i className='ri-settings-5-line'></i>
                </button>

                {openMenu && (
                    <div className='header-menu'>
                        <button className='header-menu-button danger' onClick={logOut}>
                            {user ? "Log Out" : "Log In"} {user && <strong>{user.userName}</strong>}
                        </button>
                    </div>
                )}

                <Link to={"/makepost"} className='navbar-add-post'>
                    <button>
                        <i className='ri-edit-2-line'></i>
                    </button>
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
