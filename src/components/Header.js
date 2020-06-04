import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import { Redirect, Link } from 'react-router-dom';

import '../styling/Header.css'

const Header = props => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect === true) {
            setRedirect(false);
        }
    }, [redirect])

    return (
        <div className="Header">
            <h1 className="Title"><img alt="reshoe logo" className="Logo" src={require('../assets/images/assembled.png')}></img></h1>
            <h1 className="SmallTitle"><img alt="reshoe logo" className="Logo" src={require('../assets/images/assembled-small.png')}></img></h1>
            <Link className="HeaderLink" to="/about">About Us</Link>
            <Link className="HeaderLink" to="/faq">FAQ</Link>
            <Link className="HeaderLink" to="/admin">Admin Page</Link>
            {props.signedIn ? <Link className="HeaderLink" to="/dashboard">Dashboard</Link> : ""}
            {props.signedIn ?
                <Button style={{ backgroundColor: "#FFE521" }}
                    variant='warning' onClick={() => {
                        setRedirect(true);
                        props.handleSignOut()
                    }}>Sign Out
                    </Button>
                : <Button style={{ backgroundColor: "#FFE521" }}
                    variant='warning' onClick={() => {
                        setRedirect(true);
                    }}>Sign In</Button>}
            {redirect ? <Redirect to='/' /> : ""}
        </div>
    )
};


export default Header;