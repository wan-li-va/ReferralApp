import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { withFirebase } from './Firebase';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/ToolTip';

const Auth = props => {
    const [email, setEmail] = useState("");
    const [isNewUser, setIsNewUser] = useState(false);
    const [show, setShow] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const target = useRef(null);

    const handleSubmit = (e) => {
        const { firebase } = props;
        e.preventDefault();
        let email = e.target.elements.formEmail.value;
        setEmail(email);
        if (!isNewUser)
            firebase.user(1).once('value')
                .then(snapshot => {
                    let userArr = snapshot.val();
                    let user = userArr.filter(userObj => userObj.email === email)
                    if (user[0]) {
                        handleOldUser(user[0].id);
                    } else {
                        setIsNewUser(true);
                    }
                })
        else {
            let refCode = e.target.elements.formReferral.value;
            checkRefCode(email, refCode);
        }

    }

    const handleOldUser = (uid) => {
        props.setUser(uid);
        setSignedIn(true);
    }

    const checkRefCode = (email, refCode) => {
        const { firebase } = props;
        if (refCode !== "")
            firebase.user(1).once('value')
                .then(snapshot => {
                    let userArr = snapshot.val();
                    let user = userArr.filter(userObj => userObj.id.substring(3) === refCode);
                    if (user[0]) {
                        let id = user[0].id
                        firebase.user(id).once('value')
                            .then(snapshot => {
                                let userObj = snapshot.val();
                                firebase.user(id).update({
                                    numReferrals: userObj.numReferrals + 1,
                                    hasShared: true
                                })
                            })
                        setShow(false);
                        handleNewUser(email, false);
                    } else {
                        setShow(true);
                    }
                })
        else {
            setShow(false);
            handleNewUser(email, false);
        }
    }

    const handleNewUser = (email, error) => {
        const { firebase } = props;
        if (!error) {
            let postRef = firebase.users().push({
                email: email
            })
            let id = postRef.key
            let userObj = { email: email, id: id, referralCode: id.substring(3), numReferrals: 0, hasShared: false, rewards: { 0: 'dummy' } };
            firebase.user(id)
                .set(userObj)
            firebase.user(1).once('value')
                .then(snapshot => {
                    let users = snapshot.val();
                    let userArr = [];
                    for (let key in users) {
                        userArr.push(users[key])
                    }
                    userArr = [...userArr, { email: email, id: id }];
                    firebase.user(1).update(userArr);
                })
            props.setUser(id);
            setSignedIn(true);
        }
    }

    const renderNewUserForm = () => (
        <Form onSubmit={event => (handleSubmit(event))}>
            <Form.Group controlId='formEmail' >
                <Form.Label>Enter your email address!</Form.Label>
                <Form.Control type='email' placeholder='Enter email' defaultValue={email} />
            </Form.Group>
            <Form.Group controlId='formReferral'>
                <Form.Label>Enter a referral code if applicable</Form.Label>
                <Form.Control type='text' placeholder='Enter Referral Code' ref={target} />
                <Overlay target={target.current} show={show} placement='bottom'>
                    {props => (<Tooltip id='overlay-error' {...props}>
                        Please put in a correct referral code
                    </Tooltip>)}
                </Overlay>
            </Form.Group>
            <Button variant='primary' type='submit'>Submit!</Button>
        </Form>
    );

    return (
        <div>
            {signedIn ? <Redirect to='/dashboard' />
                : isNewUser ? renderNewUserForm()
                    : <Form onSubmit={event => (handleSubmit(event))}>
                        <Form.Group controlId='formEmail' >
                            <Form.Label>Enter your email address!</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                        </Form.Group>
                        <Button variant='primary' type='submit'>Submit!</Button>
                    </Form>}
        </div>
    );
}
export default withFirebase(Auth);