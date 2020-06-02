import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { withFirebase } from './Firebase';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';

const Auth = props => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        const { firebase } = props;
        e.preventDefault();
        let email = e.target.elements.formEmail.value;
        setEmail(email);
        firebase.user(1).once('value')
            .then(snapshot => {
                let userArr = snapshot.val();
                let user = userArr.filter(userObj => {
                    if (userObj.email === email) {
                        return userObj
                    } else {
                        return null;
                    }
                })
                if (user[0]) {
                    handleOldUser(user);
                } else {
                    handleNewUser(email);
                }
            })

    }

    const handleOldUser = (user) => {
        props.setUser(user.id);
        return <Redirect to='/Dashboard' />
    }

    const handleNewUser = (email) => {
        const { firebase } = props;
        let postRef = firebase.users().push({
            email: email
        })
        let userObj = { email: email, id: postRef.key };
        firebase.user(postRef.key)
            .push(userObj)
        firebase.user(1).once('value')
            .then(snapshot => {
                let users = snapshot.val();
                let userArr = [];
                for (let key in users) {
                    userArr.push(users[key])
                }
                userArr = [...userArr, userObj];
                firebase.user(1).update(userArr);
            })
        props.setUser(postRef.key);
        return <Redirect to='/Dashboard' />
    }

    return (
        <div>
            <Form onSubmit={event => (handleSubmit(event))}>
                <Form.Group controlId='formEmail' >
                    <Form.Label>Enter your email address!</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
                <Button variant='primary' type='submit'>Submit!</Button>
            </Form>
        </div>
    );
}
export default withFirebase(Auth);