import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProgressBar.css';

const ProgressComponent = ({ numReferrals, nextAchievement }) => {
    let pct = (numReferrals / nextAchievement) * 100;
    let variant = "info";
    let message = (nextAchievement - numReferrals) + " ";
    let left = "points left!"
    if (nextAchievement - numReferrals === 1) {
        left = "point left!";
    }
    message += left;
    if (pct >= 80) {
        variant = "success";
        message = "Almost there! " + message;

    } else if (pct <= 20) {
        variant = "danger"
    }
    return (
        <div>
            <div className="labels">
                <a className="left-label">0</a>
                <a className="center-label">{message}</a>
                <a className="right-label">{nextAchievement}</a>
            </div>
            <ProgressBar style={{ height: "30px" }} variant={variant} now={pct} srOnly label={numReferrals} />
        </div>
    );
}
export default ProgressComponent;