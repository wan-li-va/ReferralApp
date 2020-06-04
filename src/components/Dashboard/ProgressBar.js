import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';

import '../../styling/ProgressBar.css';

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
    return (
        <div>
            <div className="labels">
                <p className="left-label">0</p>
                <p className="center-label">{message}</p>
                <p className="right-label">{nextAchievement}</p>
            </div>
            <ProgressBar style={{ height: "30px", width: "250px" }} variant={variant} now={pct} srOnly label={numReferrals} />
        </div>
    );
}
export default ProgressComponent;