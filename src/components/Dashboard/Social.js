import React from 'react';
import './styling/Social.css';

const Social = ({ handleSocialShare }) => {
    return (
        <div>
            <div className="share-label">
                Click to Share Your Referral!
            </div>
            <div className="platform-grid">
                <a onClick={handleSocialShare} className="instagram" target="_blank" rel="noopener noreferrer"
                    href="https://instagram.com">
                    <img src={require("./icons/instagram.ico")} alt="instagram.com"></img>
                </a>
                <a onClick={handleSocialShare} className="facebook" target="_blank" rel="noopener noreferrer"
                    href="https://facebook.com">
                    <img src={require("./icons/facebook.ico")} alt="facebook.com"></img >
                </a>
                <a onClick={handleSocialShare} className="twitter" target="_blank" rel="noopener noreferrer"
                    href="https://twitter.com"><img src={require("./icons/twitter.svg")} alt="twitter.com"></img>
                </a>
            </div>
        </div >
    );
}

export default Social