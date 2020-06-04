import React from 'react'

const NextReward = ({ rewards, nextAchievement, numReferrals }) => {

    const nextReward = (rewards, nextAchievement) => {
        let nextreward = { name: "You have all the possible rewards" };
        rewards.map(reward => {
            if (reward.numRequired === nextAchievement) {
                nextreward = reward;
            }
        })
        return nextreward;
    }

    if (nextAchievement) {
        let num = nextAchievement - numReferrals;
        let referrals = "referrals";
        if (num === 1)
            referrals = "referral";
        return (
            <div>
                Just {num} more {referrals} until you get {nextReward(rewards, nextAchievement).name}!
            </div>
        )
    }
    return <div></div>
}

export default NextReward