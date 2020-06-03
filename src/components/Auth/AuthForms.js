import React, { useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/ToolTip';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RenderNewUserForm = props => {
    const target = useRef(null);

    return (
        <Form onSubmit={event => props.handleSubmit(event)}>
            <Form.Group controlId='formEmail' >
                <Form.Label>Enter your email address!</Form.Label>
                <Form.Control type='email' placeholder='Enter email' defaultValue={props.email} />
            </Form.Group>
            <Form.Group controlId='formReferral'>
                <Form.Label>Enter a referral code if applicable</Form.Label>
                <Form.Control type='text' placeholder='Enter Referral Code' ref={target} />
                <Overlay target={target.current} show={props.show} placement='bottom'>
                    {props => (<Tooltip id='overlay-error' {...props}>
                        Please put in a correct referral code
                    </Tooltip>)}
                </Overlay>
            </Form.Group>
            <Button variant='secondary' type='submit'>Submit!</Button>
        </Form>
    );
}

const RenderNormalForm = props => (
    <Form onSubmit={event => props.handleSubmit(event)}>
        <Form.Group controlId='formEmail' >
            <Form.Label>Enter your email address!</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Button variant='secondary' type='submit'>Submit!</Button>
    </Form>
);
export { RenderNewUserForm, RenderNormalForm };