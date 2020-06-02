import React, { Component } from 'react';
import ProgressBar from './Dashboard/ProgressBar.js';
import ReferralDisplay from './Dashboard/ReferralDisplay.js';
import Rewards from './Dashboard/Rewards.js';
import Social from './Dashboard/Social.js';
import NextReward from './Dashboard/NextReward.js';
import '../styling/Dashboard.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numReferrals: 8,
            nextAchievement: 10,
            referralCode: "",
            rewards: {},
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
    }

    render() {
        const {
            userID
        } = this.props;

        return (
            <div className="Dashboard">
                <Rewards classname="Rewards" rewards={this.state.rewards} />
                <div className="displayMainPanel">
                    <ReferralDisplay className="ReferralDisplay" code={this.state.referralCode} />
                    <Social
                        referralCode={this.state.referralCode}
                        hasShared={this.state.hasShared} />
                    <div className="displayProgress">
                        <ProgressBar
                            numReferrals={this.state.numReferrals}
                            nextAchievement={this.state.nextAchievement} />
                        <NextReward
                            nextAchievement={this.state.nextAchievement}
                            rewards={this.state.rewards} />
                    </div>
                </div>
            </div>
        )
    }
}