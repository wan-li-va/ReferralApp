import React from 'react';
import Card from 'react-bootstrap/Card'

const Rewards = ({ rewards, userRewards }) => {

    const rewardKeys = Object.keys(rewards);
    let ct = -1;

    const display = (currentKey) => {
        if (userRewards.includes(currentKey))
            return "success";
        return "danger"
    }

    let output = Object.values(rewards).map(reward => {
        ct++;
        return (
            <Card bg={display(rewardKeys[ct])} className="Card">
                <div>You can get {reward.name}</div>
                <div>Complete {reward.numRequired} referrals to receive this reward!</div>
            </Card>
        )
    })

    return (
        <div className="Rewards">
            <h2 className="PossibleRewards">Possible Rewards</h2>
            <div className="rewardList">{output} </div>
        </div>
    )

}

export default Rewards