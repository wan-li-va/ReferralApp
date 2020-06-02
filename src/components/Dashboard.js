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

        }
    }

    render() {
        return (
            <div>
                Dashboard
                <ProgressBar />
                <ReferralDisplay />
                <Rewards />
                <Social />
                <NextReward />
            </div>
        )
    }
}