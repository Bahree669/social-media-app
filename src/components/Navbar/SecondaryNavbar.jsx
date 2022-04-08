import React from "react";
import "./navbar.css";

import "./secondarynavbar.css";

function SecondaryNavbar({ title, backButton }) {
    return (
        <header className='secondary-nav'>
            <nav className='secondary-nav-container'>
                <button onClick={backButton}>
                    <i className='ri-arrow-left-s-line'></i>
                </button>
                <h1>{title}</h1>
            </nav>
        </header>
    );
}

export default SecondaryNavbar;
