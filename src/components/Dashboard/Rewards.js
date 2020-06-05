import React from 'react';
import Card from 'react-bootstrap/Card';

const Rewards = ({ rewards, userRewards }) => {

    const rewardKeys = Object.keys(rewards);
    let ct = -1;

    const display = (currentKey) => {
        if (userRewards.includes(currentKey))
            return "rgb(24, 184, 78, 0.9)";
        return "rgb(232, 90, 85, 0.9)"
    }

    let output = Object.values(rewards).map(reward => {
        ct++;
        const color = display(rewardKeys[ct]);
        return (
            <Card style={{ backgroundColor: color}} className="Card" >
                <div>You can {reward.name}</div>
                <div>Complete {reward.numRequired} referrals to receive this reward!</div>
                {color === "#18B84E" && <div>{"Reward Received!"}</div>}
            </Card >
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