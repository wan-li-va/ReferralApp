import React, { useState, useEffect } from 'react';
import ProgressBar from './Dashboard/ProgressBar.js';
import ReferralDisplay from './Dashboard/ReferralDisplay.js';
import Rewards from './Dashboard/Rewards.js';
import Social from './Dashboard/Social.js';
import NextReward from './Dashboard/NextReward.js';
import '../styling/Dashboard.css';

const Dashboard = ({ userID, firebase }) => {
    const [numReferrals, setNumReferrals] = useState(8);
    const [nextAchievement, setNextAchievement] = useState(10);
    const [referralCode, setReferralCode] = useState("");
    const [rewards, setRewards] = useState({});
    const [hasShared, setHasShared] = useState(false);

    // useEffect(
    //    firebase.user(userID) 
    // , [])

    const handleSocialShare = () => {
        if (!hasShared) {
            setNumReferrals(numReferrals + 1);
            setHasShared(true);
        }
    }

    const rewards = [
        {name: "You've been added to our exclusive Facebook Group!", numRequired: 10},
        {name: "We're sending our brand stickers!", numRequired: 25},
        {name: "You win a free t-shirt!", numRequired: 50},
        {name: "Free pair of shoes on the house!", numRequired: 100}  
    ]
    
    return (
        <div className="Dashboard">
            <Rewards classname="Rewards" rewards={rewards} />
            <div className="displayMainPanel">
                <ReferralDisplay className="ReferralDisplay" code={referralCode} />
                <Social
                    handleSocialShare={handleSocialShare()}
                    referralCode={referralCode}
                    hasShared={hasShared} />
                <div className="displayProgress">
                    <ProgressBar
                        numReferrals={numReferrals}
                        nextAchievement={nextAchievement} />
                    <NextReward
                        nextAchievement={nextAchievement}
                        rewards={rewards} />
                </div>
            </div>
        </div>
    );
}
export default Dashboard;