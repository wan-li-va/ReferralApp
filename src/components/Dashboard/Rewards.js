import React from 'react'

function calculateRewards(rewards, referralAmt) {
    console.log(rewards)
     
    let achieved = [];
    for (let i = 1; i <= referralAmt; i++){
            if(i = 10){
                achieved.push(rewards[0]);
            }
            if(i = 25){
                achieved.push(rewards[1]);
            }
            if(i = 50){
                achieved.push(rewards[2]);
            }
            if(i = 100){
                achieved.push(rewards[3]);
            }
    }

    return achieved;   
}



function Rewards(props) {
    
    if (props.rewards){
    return (
        calculateRewards(props.rewards, props.numReferrals).map(reward => {
            return <div>{reward}</div> 
        })
    )
    }
    return <div></div>
}

export default Rewards