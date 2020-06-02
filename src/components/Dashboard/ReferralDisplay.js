import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

export default class ReferralDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "CODE"
        }
    }

    copyToClipboard = (e) => {
        this.state.code.select();
        document.execCommand('copy');
        
    }

    render() {
        return (
            <div className="ReferralDisplay">
                <h3>{this.state.code}</h3>
                <Button onClick={() => {navigator.clipboard.writeText(this.state.code)}}>Copy</Button>
            </div>
        )
    }
}