import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styling/Header.css'

const Header = () => {
    const buttonStyle = { backgroundColor: "#FFE521", border: "0px", color: "#01236F" };
    return (
        <div className="Header">
            <h1 className="Title"><img className="Logo" src={require('../assembled.png')}></img></h1>
            <h1 className="SmallTitle"><img className="Logo" src={require('../assembled-small.png')}></img></h1>
            {/* <h4 className="Subtitle">Responsibly Show Hoo Owns the Environment</h4> */}
            <Link className="HeaderLink" to="/ReferralApp/about">About Us</Link>
            <Link className="HeaderLink" to="/ReferralApp/faq">FAQ</Link>
            <Link className="HeaderLink" to="/ReferralApp/dashboard">Dashboard</Link>
            {/* <Link className="HeaderLink" to="/ReferralApp/about"><Button style={buttonStyle}>About Us</Button></Link>
            <Link className="HeaderLink" to="/ReferralApp/faq"><Button style={buttonStyle}>FAQ</Button></Link>
            <Link className="HeaderLink" to="/ReferralApp/dashboard"><Button style={buttonStyle}>Dashboard</Button></Link> */}
        </div>
    )
};


export default Header;