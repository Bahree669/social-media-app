import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import { useLocation, useNavigate, Link } from "react-router-dom";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/userReducer";

import "./navbar.css";

function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

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

        console.log(user);
    }, []);

    function logOut() {
        dispatch(logOutUser());
        navigate("/auth");
    }

    function authAction() {
        if (user) {
            logOut();
        } else {
            navigate("/auth");
        }
    }

    return (
        <div className='header'>
            <nav aria-label='primary-navigation' className='primary-navigation'>
                <div className='navigation-icon'>
                    {location.pathname === "/" ? (
                        <i className='ri-home-fill' style={{ fontSize: "1.19em" }}></i>
                    ) : (
                        <i className='ri-home-line'></i>
                    )}
                </div>

                <div className='navigation-icon'>
                    <i className='ri-compass-3-line' style={{ fontSize: "1.19em" }}></i>
                </div>

                <Link to={"/makepost"}>
                    <div className='navigation-icon navigation-post'>
                        <i className='ri-add-line'></i>
                    </div>
                </Link>

                <div className='navigation-icon'>
                    <i className='ri-bookmark-line'></i>
                </div>

                <Link to={"/profile"}>
                    <Avatar imageUrl={user?.profile_image} />
                </Link>
            </nav>

            <div className='header-top'>
                <p className='header-logo'>Kilogram</p>

                <div className='header-logout'>
                    <p>{user ? "Log Out" : "Sign In"}</p>

                    <button onClick={authAction}>
                        <i className='ri-logout-circle-r-line'></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
