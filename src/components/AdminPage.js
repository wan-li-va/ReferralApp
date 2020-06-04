import React, { useState, useEffect } from 'react';
import '../styling/AdminPage.css';
import { withFirebase } from './Firebase';
import Form from 'react-bootstrap/Form'

const AdminPage = (props) => {
    const [isGlobalAdmin, setGlobalAdmin] = useState(false);
    const [users, setUsers] = useState({});
    const [admins, setAdmins] = useState({});
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
            setUsers(snap.val());
        })
    }, [])

    const handleUserChange = (user) => {
        const person = user.target.value;
        setSelectedUser(person);
        setEditedObject(users[person]);
    }

    const changeInputHandler = (e, key) => {
        const val = e.target.value;
        setEditedObject({ ...editedObject, [key]: val });
    }

    const handleEditUser = () => {
        props.firebase.user(selectedUser).update(editedObject);
    }

    const handleClearSelectedUser = () => {
        setSelectedUser(null);
    }

    const handleDeleteUser = () => {
        props.firebase.user(selectedUser).remove();
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
                {selectedUser && users && Object.keys(editedObject).map(key => {
                    console.log(editedObject);
                    console.log(editedObject[key]);
                    if (key !== 'id')
                        return (
                            <div>
                                <label>{key}</label>
                                <input type="text" value={editedObject[key]}
                                    onChange={(e) => changeInputHandler(e, key)} />
                            </div>
                        )
                })}
            </div>
            {/* {!selectedUser && <button onClick={handleCreateUser}>Create New User</button>} */}
            {selectedUser && <button onClick={handleEditUser}>Save Edit</button>}
            <button onClick={handleDeleteUser}>Delete User</button>
            <button onClick={handleClearSelectedUser}>Clear Selected User</button>
        </div>
    )
}
export default withFirebase(AdminPage);