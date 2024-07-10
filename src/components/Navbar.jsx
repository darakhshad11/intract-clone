import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../logo/intract_text.svg';

import Popupfor from './Popupfor';

const Navbar = () => {
    const [isCompassHovered, setIsCompassHovered] = useState(false);
    const [isForProjectsHovered, setIsForProjectsHovered] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="intract logo" />
            </div>
            <ul className="navbar-nav">
                <li 
                    className="nav-item"
                    onMouseEnter={() => setIsCompassHovered(true)}
                    onMouseLeave={() => setIsCompassHovered(false)}
                >
                    <Link to="/compass">Compass</Link>
                    {/* <Popup isOpen={isCompassHovered} content="Compass popup content" /> */}
                </li>
                
                <li className="nav-item"><Link to="/explore">Explore</Link></li>
                <li className="nav-item"><Link to="/academy">Academy</Link></li>
                <li className="nav-item"><Link to="/nfts">NFTs</Link></li>
                <li 
                    className="nav-item"
                    onMouseEnter={() => setIsForProjectsHovered(true)}
                    onMouseLeave={() => setIsForProjectsHovered(false)}
                >
                    <Link to="/for-projects">For Projects</Link>
                    <Popupfor 
                        isOpen={isForProjectsHovered} 
                        content={
                            <div>
                                <h3>Launch your quest today!</h3>
                                <p>⚠️❗ Please note this is for projects only, not individual users ❗⚠️</p>
                                <button  className='button'>Launch Your Quest</button>
                            </div>
                        } 
                    />
                </li>
            </ul>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
