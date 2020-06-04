import React from 'react';
import Card from 'react-bootstrap/Card';

const Rewards = ({ rewards, userRewards }) => {

    const rewardKeys = Object.keys(rewards);
    let ct = -1;

    const display = (currentKey) => {
        if (userRewards.includes(currentKey))
            return "#18B84E";
        return "#E85A55"
    }

    let output = Object.values(rewards).map(reward => {
        ct++;
        const color = display(rewardKeys[ct]);
        return (
            <Card style={{ backgroundColor: color, margin: "8px 0 8px 0" }} className="Card" >
                <div>You can get {reward.name}</div>
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