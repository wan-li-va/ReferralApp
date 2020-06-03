import React from 'react'

const nextReward = (rewards, nextAchievement) => {
    let reward;
    for (let i = 0; i < rewards.length; i++){
        if(rewards[i].numRequired === nextAchievement){
            reward = rewards[i].name;
        }
    }
    return reward;
}


const NextReward = (props) => {
    if (props.rewards && props.nextAchievement){
        return (
            nextReward(props.rewards, props.nextAchievement)
        )
    }
        return <div></div>
}

export default NextReward
