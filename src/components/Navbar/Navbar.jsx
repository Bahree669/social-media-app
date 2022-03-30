import React from "react";
import Avatar from "../Avatar/Avatar";

import "./navbar.css";

function Navbar() {
    return (
        <header className='header'>
            <nav className='header-navigation'>
                <Avatar imageUrl={"https://randomuser.me/api/portraits/men/79.jpg"} />

                <button className='header-action-btn'>
                    <p>new post</p>

                    <div aria-hidden='true'>
                        <i className='bx bx-plus'></i>
                    </div>
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
