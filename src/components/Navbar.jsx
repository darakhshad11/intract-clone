import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../logo/intract_text.svg';
import Popup from './Popup';
import searchIcon from '../logo/search.png';
import Popupfor from './Popupfor';

const Navbar = () => {
    const [isCompassHovered, setIsCompassHovered] = useState(false);
    const [isForProjectsHovered, setIsForProjectsHovered] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={logo} alt="intract logo" />
                </Link>
            </div>
            <ul className="navbar-nav">
                <li 
                    className="nav-item"
                    onMouseEnter={() => setIsCompassHovered(true)}
                    onMouseLeave={() => setIsCompassHovered(false)}
                >
                    <Link to="/compass">Compass</Link>
                    <Popup isOpen={isCompassHovered} content="Compass popup content" />
                </li>
                
                <li className="nav-item"><Link to="/explore">Explore</Link></li>
                <li className="nav-item">
                    <Link to="/academy">Academy<button className='new'>new</button></Link>
                </li>
                
                <li className="nav-item"><Link to="/nafty">NFTs</Link></li>
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
                                <button className='button'>Launch Your Quest</button>
                            </div>
                        } 
                    />
                </li>
            </ul>
            <div className="search-container">
                <img src={searchIcon} alt="search" className="search-icon" />
                <input type="text" placeholder="Search for ecosystems, trending quests etc," />
                <button type="submit"><b>Sign in</b></button>
            </div>
        </nav>
    );
};

export default Navbar;
