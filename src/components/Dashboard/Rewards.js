import React from 'react';
import Card from 'react-bootstrap/Card'

function calculateRewards(rewards, referralAmt) {

    let achieved = [];
    for (let i = 1; i <= referralAmt; i++) {
        achieved.push(rewards[i].name)
        // if (i = 10) {
        //     achieved.push(rewards[0].name);
        // }
        // if (i = 25) {
        //     achieved.push(rewards[1].name);
        // }
        // if (i = 50) {
        //     achieved.push(rewards[2].name);
        // }
        // if (i = 100) {
        //     achieved.push(rewards[3].name);
        // }
    }

    return achieved;
}



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
            <Card bg={display(rewardKeys[ct])}>
                <div>{reward.name}</div>
                <div>{reward.numRequired}</div>
            </Card>
        )
    })

    return (
        <div>
            {output}
        </div>
    )

    // if (rewards) {
    //     console.log(rewards)
    //     return (
    //         // calculateRewards(rewards, numReferrals).map(reward => {
    //         {}
    //     )
    // }
    // return <div></div>
}

export default Rewards