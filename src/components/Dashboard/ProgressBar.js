import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './styling/ProgressBar.css';

const ProgressComponent = ({ numReferrals, nextAchievement }) => {
    let pct = (numReferrals / nextAchievement) * 100;
    let variant = "info";
    let message = "";
    if (pct >= 80) {
        variant = "success";
        message = "Almost there! ";

    } else if (pct <= 20) {
        variant = "danger"
    }
    console.log(nextAchievement);
    return (
        <div>
            <div className="labels">
                <a className="left-label">0</a>
                <a className="center-label">{message}</a>
                <a className="right-label">{nextAchievement}</a>
            </div>
            <ProgressBar style={{ height: "30px", width: "250px" }} variant={variant} now={pct} srOnly label={numReferrals} />
        </div>
    );
}
export default ProgressComponent;