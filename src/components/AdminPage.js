import React, { useState, useEffect } from 'react';
import '../styling/AdminPage.css';
import { withFirebase } from './Firebase';
import Form from 'react-bootstrap/Form'

const AdminPage = (props) => {
    const [isGlobalAdmin, setGlobalAdmin] = useState(false);
    const [users, setUsers] = useState({});
    const [admins, setAdmins] = useState({});
    const [user, setUser] = useState({});
    const [selectedUser, setSelectedUser] = useState(null);
    const [editedObject, setEditedObject] = useState({});

    useEffect(() => {
        const { user, admins } = props;
        if (user) {
            if (admins[0] === user.id) {
                setGlobalAdmin(true);
            } else {
                setGlobalAdmin(false);
            }
        }
    }, [props.user])

    useEffect(() => {
        props.firebase.users().on('value', snap => {
            console.log(snap.val())
            setUsers(snap.val());
        })
    }, [])

    const handleUserChange = (user) => {
        const person = user.target.value;
        setSelectedUser(person);
        setEditedObject(users[person]);
    }

    const changeInputHandler = (e, key) => {
        console.log("change input");
        console.log(e.target.value);
        const newObj = editedObject;
        newObj[key] = e.target.value;
        console.log(newObj[key]);
        console.log(editedObject);
        console.log(newObj);
        setEditedObject(newObj);
        console.log(editedObject);
    }

    return (
        <div className="page">
            Global Admin: {isGlobalAdmin ? "true" : "false"}
            <Form.Control as="select" multiple onChange={handleUserChange}>
                {users &&
                    Object.values(users).map(obj => {
                        return (
                            <option style={{ height: "3vh" }} value={obj.id}
                            >
                                {obj.email}
                            </option>
                        );
                    })}
            </Form.Control>
            <div>
                {selectedUser && users && Object.keys(users[selectedUser]).map(key => {
                    console.log(editedObject[key]);
                    if (key !== 'id')
                        return (
                            <div>
                                <label>{key}</label>
                                <input value={editedObject[key]}
                                    onChange={(e) => changeInputHandler(e, key)}>

                                </input>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}
export default withFirebase(AdminPage);