import React, { useState, useEffect } from 'react';
import ProgressBar from './Dashboard/ProgressBar.js';
import ReferralDisplay from './Dashboard/ReferralDisplay.js';
import Rewards from './Dashboard/Rewards.js';
import Social from './Dashboard/Social.js';
import NextReward from './Dashboard/NextReward.js';
import '../styling/Dashboard.css';

const Dashboard = ({ userID, firebase }) => {
    const [numReferrals, setNumReferrals] = useState(24);
    const [nextAchievement, setNextAchievement] = useState(10);
    const [referralCode, setReferralCode] = useState("CODE");
    const [rewards, setRewards] = useState(
        {
            "-Masidibe": {
                name: "added to our exclusive Facebook Group!",
                numRequired: 10
            },
            "-Masifbe": {
                name: "our brand stickers!",
                numRequired: 25
            },
            "-Masidasdbe": {
                name: "you get a free t-shirt!",
                numRequired: 50
            },
            "-Masiasefibe": {
                name: "you get a free pair of shoes, on the house!",
                numRequired: 100
            },
        }
    );
    const [userRewards, setUserRewards] = useState(["-Masidibe", "-Masifbe"])
    const [hasShared, setHasShared] = useState(false);

    const sortedAchievements = Object.values(rewards).sort(function (a, b) {
        if (a.numRequired < b.numRequired)
            return -1;
        else if (a.numRequired > b.numRequired)
            return 1;
        else
            return 0;
    });

    const calcNextAchievement = () => {
        let prevAwards = 0;
        sortedAchievements.map(reward => {
            if (numReferrals > reward.numRequired)
                prevAwards++;
        })
        return sortedAchievements[prevAwards].numRequired
    }

    useEffect(() => {
        setNextAchievement(calcNextAchievement)
    }, [])

    const handleSocialShare = () => {
        if (!hasShared) {
            setNumReferrals(numReferrals + 1);
            setHasShared(true);
        }
    }

    return (
        <div className="Dashboard">
            <Rewards classname="Rewards" rewards={rewards} userRewards={userRewards} />
            <div className="displayMainPanel">
                <ReferralDisplay className="ReferralDisplay" code={referralCode} />
                <Social
                    handleSocialShare={handleSocialShare}
                    referralCode={referralCode}
                    hasShared={hasShared} />
                <div className="displayProgress">
                    <ProgressBar
                        numReferrals={numReferrals}
                        nextAchievement={nextAchievement} />
                    <NextReward
                        numReferrals={numReferrals}
                        nextAchievement={nextAchievement}
                        rewards={rewards}
                    />
                </div>
            </div>
        </div>
    );
}
export default Dashboard;