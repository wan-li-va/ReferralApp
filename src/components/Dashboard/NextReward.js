import React from 'react'

const NextReward = ({ rewards, nextAchievement, numReferrals }) => {
    // if (!rewards)
    //     return <div></div>
    let hasAllRewards = true;

    // const sortedAchievements = Object.values(rewards).sort(compareAwards = (a, b) => {
    //     if (a.numRequired < b.numRequired)
    //         return -1;
    //     else if (a.numRequired > b.numRequired)
    //         return 1;
    //     else
    //         return 0;
    // });

    // const calcNextAchievement = () => {
    //     let prevAwards = 0;
    //     sortedAchievements.map(reward => {
    //         if (numReferrals > reward.numRequired)
    //             prevAwards++;
    //     })
    //     return sortedAchievements[prevAwards]
    // }

    // const nextAchievement = calcNextAchievement();

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