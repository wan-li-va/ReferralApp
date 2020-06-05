import React from 'react';
import Button from 'react-bootstrap/Button';

const ReferralDisplay = ({ code }) => {

    return (
        <div className="ReferralDisplay">
            <h1 className="Code">{code}</h1>
            <Button className="copyButton" style={{ backgroundColor: "#FFE521" }}
                variant="warning"
                onClick={() => { navigator.clipboard.writeText(code) }}>
                Copy Code
            </Button>
        </div>
    );
}

export default ReferralDisplay;