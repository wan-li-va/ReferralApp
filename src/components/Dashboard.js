import React, { useState, useEffect } from 'react';
import ProgressBar from './Dashboard/ProgressBar.js';
import ReferralDisplay from './Dashboard/ReferralDisplay.js';
import Rewards from './Dashboard/Rewards.js';
import Social from './Dashboard/Social.js';
import NextReward from './Dashboard/NextReward.js';
import '../styling/Dashboard.css';
import { withFirebase } from './Firebase';

const Dashboard = (props) => {
    const [numReferrals, setNumReferrals] = useState(24);
    const [nextAchievement, setNextAchievement] = useState(10);
    const [referralCode, setReferralCode] = useState("CODE");
    const [rewards, setRewards] = useState([]);
    const [rewardsJson, setRewardsJson] = useState({});
    const [userRewards, setUserRewards] = useState([])
    const [hasShared, setHasShared] = useState(false);

    useEffect(() => {
        const { firebase } = props;
        firebase.rewards().once('value')
            .then(snapshot => {
                setRewards(Object.values(snapshot.val()).sort(function (a, b) {
                    if (a.numRequired < b.numRequired)
                        return -1;
                    else if (a.numRequired > b.numRequired)
                        return 1;
                    else
                        return 0;
                }));
            })
    }, [props.user])

    const calcNextAchievement = () => {
        let prevAwards = 0;
        if (rewards.length > 0) {
            rewards.map(reward => {
                if (numReferrals >= reward.numRequired)
                    prevAwards++;
                return reward
            })
            return rewards[prevAwards].numRequired
        }
    }

    useEffect(() => {
        const { user } = props;
        if (user) {
            setNumReferrals(user.numReferrals);
            setReferralCode(user.referralCode);
            let rewardsArr = user.rewards.filter(reward => reward !== 'dummy')
            setUserRewards(rewardsArr);
            setHasShared(user.hasShared);
        }
    }, [props.user])

    useEffect(() => {
        setNextAchievement(calcNextAchievement());
    }, [props.user, rewards])

    useEffect(() => {
        const { user, firebase } = props;
        if (user) {
            firebase.rewards().once('value')
                .then(snapshot => {
                    let localRewards = snapshot.val();
                    console.log(localRewards);
                    const achievements = Object.values(localRewards);
                    const keys = Object.keys(localRewards);
                    console.log(achievements);
                    for (let i = 0; i < achievements.length; i++) {
                        console.log(keys[i]);
                        if (numReferrals === achievements[i].numRequired && !user.rewards.includes(keys[i])) {
                            console.log(keys[i]);
                            firebase.user(user.id).update({ rewards: [...user.rewards, keys[i]] })
                            break;
                        }
                    }
                })

        }
    }, [numReferrals])

    const handleSocialShare = () => {
        if (!hasShared) {
            const { firebase, user } = props;
            firebase.user(user.id).update({ numReferrals: user.numReferrals + 1, hasShared: true });
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
export default withFirebase(Dashboard);