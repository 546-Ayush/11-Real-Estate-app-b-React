import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav>
                <h1>DownTown<span>..</span></h1>
                <div className={showMenu ? "menu mobile_menu" : 'menu'}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Agents</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>

                    <div className="btn">
                        <a href="#">Add Property</a>
                    </div>
                </div>

                <FaBars className='bars' onClick={() => setShowMenu(!showMenu)} />
            </nav>


        </>
    )
}

export default Navbar