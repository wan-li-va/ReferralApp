import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ReferralDisplay = ({ code }) => {

    const copyToClipboard = (e) => {
        code.select();
        document.execCommand('copy');

    }

    return (
        <div className="ReferralDisplay">
            <h1 className="Code">{code}</h1>
            <Button variant="warning" onClick={() => { navigator.clipboard.writeText(code) }}>Copy Code</Button>
        </div>
    );
}

export default ReferralDisplay;