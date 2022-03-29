import React from "react";

function Navbar() {
    return (
        <header className='header'>
            <nav className='header-navigation'>
                <Avatar />

                <button className='header-action-btn'>
                    <p>new post</p>

                    <div aria-hidden='true'></div>
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
