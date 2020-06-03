import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/Header.css'

const Header = () => {
    return (
        <div className="Header">
            <h1 className="Title">ReSHOE</h1> 
            <h4 className="Subtitle">Responsibly Show Hoo Owns the Environment</h4>
            <Link className="HeaderLink" to="/ReferralApp/about">About Us</Link>
            <Link className="HeaderLink" to="/ReferralApp/faq">FAQ</Link>
            <Link className="HeaderLink" to="/ReferralApp/dashboard">Dashboard</Link>
        </div>
    )
}

export default Header;