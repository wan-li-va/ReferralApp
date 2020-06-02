import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/Header.css'

const Header = () => {
    return (
        <div>
            <h1>ReSHOE</h1> 
            <h3>Responsibly Show Hoo Owns the Environment</h3>
            <Link to="/ReSHOE/about">About Us</Link>
            <Link to="/ReSHOE/faq">FAQ</Link>
        </div>
    )
}

export default Header;