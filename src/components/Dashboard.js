import React, { Component } from 'react';
import ProgressBar from './Dashboard/ProgressBar.js';
import ReferralDisplay from './Dashboard/ReferralDisplay.js';
import Rewards from './Dashboard/Rewards.js';
import Social from './Dashboard/Social.js';
import NextReward from './Dashboard/NextReward.js';




export default class Dashboard extends Component {
    
    
    
    constructor(props) {
        super(props);
        this.state = {
            numReferrals: 26,
            nextAchievement: 10,
            referralCode: "",
            hasShared: false,
        }
        
    }

 
 
    /*  Person info
        "id": {
            referralCode,
            numReferrals,
            hasShared,
            email,
            name
            //stretch: address, referrals
        }
    */

    componentDidMount = () => {
        /*
        from firebase:
        get current user
            id
        get data we need
        */

       const rewards = [
        "You've reached " + this.state.numReferrals + "points! You've been added to our exclusive Facebook Group!" ,
        "You've reached " + this.state.numReferrals + "points! We're sending our brand stickers!",
        "You've reached " + this.state.numReferrals + "points! You win a free t-shirt!",
        "You've reached " + this.state.numReferrals + "points! Free pair of shoes on the house!" 
    ]

    this.setState({
        rewards: rewards 
    })
    
    }

    render() {
        const {
            userID
        } = this.props;

        return (
            <div>
                Dashboard
                <ProgressBar
                    numReferrals={this.state.numReferrals}
                    nextAchievement={this.state.nextAchievement} />
                <ReferralDisplay code={this.state.referralCode} />
                <Rewards rewards={this.state.rewards} numReferrals={this.state.numReferrals} nextAchievement={this.state.nextAchievement}/>
                <Social
                    referralCode={this.state.referralCode}
                    hasShared={this.state.hasShared} />
                <NextReward
                    nextAchievement={this.state.nextAchievement}
                    rewards={this.state.rewards} />
            </div>
        )
    }
}