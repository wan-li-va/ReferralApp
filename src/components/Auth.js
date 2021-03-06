import React, { useState } from 'react';
import { withFirebase } from './Firebase';
import { Redirect } from 'react-router-dom';

import { RenderNewUserForm, RenderNormalForm } from './Auth/AuthForms';

const Auth = props => {
    const [email, setEmail] = useState("");
    const [isNewUser, setIsNewUser] = useState(false);
    const [show, setShow] = useState(false);

    /* HandleSubmit takes in a submit event from a form, handles both the sign up and sign in form, and determines whether it is a new user or not
        @param e event generated from submitting form
    */
    const handleSubmit = (e) => {
        const { firebase } = props;
        e.preventDefault();
        let email = e.target.elements.formEmail.value;
        if (email === '') {
            setShow(true);
            return;
        } else {
            setShow(false);
        }
        setEmail(email);
        if (!isNewUser)
            firebase.users().once('value')
                .then(snapshot => {
                    let userObjs = snapshot.val();
                    let userArr = [];
                    for (let key in userObjs) {
                        if (key !== 1)
                            userArr.push(userObjs[key])
                    }
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

    /*
    handleOldUser takes in a user ID and sets the User in parent App.js, allowing for it to find the currently signed in user
        @param uid User ID
    */
    const handleOldUser = (uid) => {
        props.setUser(uid);
    }

    /*
    checkRefCode takes in an email and the referral code the user put in, checks the database to see if the referral is from a valid user 
        @param email user email found earlier
        @param refCode The referral code that the user signing up used
    */
    const checkRefCode = (email, refCode) => {
        const { firebase } = props;
        if (refCode !== "")
            firebase.users().once('value')
                .then(snapshot => {
                    let userObjs = snapshot.val();
                    let userArr = [];
                    console.log(userObjs)
                    for (let key in userObjs) {
                        if (key !== "1")
                            userArr.push(userObjs[key])
                    }
                    console.log(userArr);
                    let user = userArr.filter(userObj => userObj.referralCode === refCode);
                    if (user[0]) {
                        let id = user[0].id
                        firebase.user(id).once('value')
                            .then(snapshot => {
                                let userObj = snapshot.val();
                                firebase.user(id).update({
                                    numReferrals: userObj.numReferrals + 1
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

    /*
    handleNewUser takes in email and a boolen to determine whether or not to go through with the submitted form
        @param email string that shows the user's email
        @param error boolean that give condition of whether or not to handle the submitted form
    */
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
            props.setUser(id);
        }
    }

    return (
        <div className='Login'>
            {props.signedIn ? (props.isAdmin ? <Redirect to='/admin' /> : <Redirect to='/dashboard' />)
                : isNewUser ? <RenderNewUserForm show={show} email={email} handleSubmit={e => handleSubmit(e)} />
                    : <RenderNormalForm handleSubmit={e => handleSubmit(e)} />}
        </div>
    );
}
export default withFirebase(Auth);