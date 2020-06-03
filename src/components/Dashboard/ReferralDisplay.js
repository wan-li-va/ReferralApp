import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ReferralDisplay = ({ code }) => {

    const copyToClipboard = (e) => {
        code.select();
        document.execCommand('copy');

    }

    return (
        <div className="ReferralDisplay">
            <h3>{code}</h3>
            <Button onClick={() => { navigator.clipboard.writeText(code) }}>Copy</Button>
        </div>
    );
}

export default ReferralDisplay;