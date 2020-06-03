import React from 'react'

const NextReward = ({ rewards, nextAchievement, numReferrals }) => {
    let hasAllRewards = true;

    const nextReward = (rewards, nextAchievement) => {
        let nextreward = { name: "You have all the possible rewards" };
        Object.values(rewards).map(reward => {
            if (reward.numRequired === nextAchievement) {
                nextreward = reward;
                hasAllRewards = false;
            }
        })
        return nextreward;
    }

    if (nextAchievement) {
        let num = nextAchievement - numReferrals;
        let referrals = "referrals";
        if (num === 1)
            referrals = "referral";
        let message = `Just ${num} more ${referrals} until you get ${nextReward(rewards, nextAchievement).name}`;
        return (
            <div>
                Just {num} more {referrals} until you get {nextReward(rewards, nextAchievement).name}
            </div>
        )
    }
    return <div></div>
}

export default NextReward