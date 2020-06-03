import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import '../styling/Header.css'

const Header = props => {
    const [redirect, setRedirect] = useState(false);
    const buttonStyle = { backgroundColor: "#FFE521", border: "0px", color: "#01236F" };

    useEffect(() => {
        if (redirect === true) {
            setRedirect(false);
        }
    }, [redirect])

    return (
        <div className="Header">
            <h1 className="Title"><img className="Logo" src={require('../assets/images/assembled.png')}></img></h1>
            <h1 className="SmallTitle"><img className="Logo" src={require('../assets/images/assembled-small.png')}></img></h1>
            <Link className="HeaderLink" to="/ReferralApp/about">About Us</Link>
            <Link className="HeaderLink" to="/ReferralApp/faq">FAQ</Link>
            {props.signedIn ? <Link className="HeaderLink" to="/ReferralApp/dashboard">Dashboard</Link> : ""}
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
            {redirect ? <Redirect to='/ReferralApp/' /> : ""}
        </div>
    )
};


export default Header;