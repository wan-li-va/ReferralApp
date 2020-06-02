import React from 'react';
import './Social.css';

const Social = (props) => {
    return (
        <div>
            <div className="share-label">
                Click to Share Your Referral!
            </div>
            <div className="platform-grid">
                <a onClick={props.handleSocialShare} className="instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com"><img src={require("./instagram.ico")}></img></a>
                <a onClick={props.handleSocialShare} className="facebook" target="_blank" rel="noopener noreferrer" href="https://facebook.com"><img src={require("./facebook.ico")}></img></a>
                <a onClick={props.handleSocialShare} className="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com"><img src={require("./twitter.svg")}></img></a>
            </div>
        </div >
    );
}

export default Social