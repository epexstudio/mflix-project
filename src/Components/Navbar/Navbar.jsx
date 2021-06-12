import React from 'react';
import './Navbar.css'
import logo from './images/logo.png'
import avatar from './images/avatar.png';

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Mflix-logo" className="logo" />
            <ul className="menu">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
            </ul>
            <i class="far fa-bell"></i>
            <img src={avatar} alt="user" className="avatar" />
        </div>
    )
}

export default Navbar
