import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { withFirebase } from './Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/AdminPage.css'

const AdminPage = (props) => {
    const [isGlobalAdmin, setGlobalAdmin] = useState(false);
    const [users, setUsers] = useState({});
    // const [admins, setAdmins] = useState({});
    const [selectedUser, setSelectedUser] = useState(null);
    const [editedObject, setEditedObject] = useState({});
    const [rewards, setRewards] = useState(null);

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
        const { firebase } = props;
        firebase.users().on('value', snap => {
            setUsers(snap.val());
        })
    }, [])

    useEffect(() => {
        const { firebase } = props;
        firebase.rewards().once('value')
            .then(snapshot => {
                setRewards(snapshot.val());
            })
    }, [props])

    const handleUserChange = (id) => {
        const person = id;
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

    const handleMakeAdmin = () => {
        const newAdmins = [...props.admins, selectedUser];
        props.firebase.admins().set(newAdmins);
    }

    const handleRemoveAdmin = () => {
        const newAdmins = props.admins.filter(id => selectedUser !== id);
        props.firebase.admins().set(newAdmins);
    }

    const handleDeleteUser = () => {
        if (props.admins.includes(selectedUser)) {
            if (!isGlobalAdmin) {
                alert("You do not have permission to delete another admin");
                return;
            } else if (selectedUser === props.admins[0]) {
                alert("You cannot delete the global admin.\nPlease contact the develpment team if you need to do this.");
                return;
            } else {
                const ad = props.admins.filter(id => id !== selectedUser);
                props.firebase.admins().set(ad);
            }
        }
        props.firebase.user(selectedUser).remove();
    }

    return (
        <div className="page" >
            <h2 style={{ textAlign: "center" }}>Admin Page</h2>
            Permissions: {isGlobalAdmin ? "Global Admin" : "General Admin"}
            {/* <br />Click on user to see information
            <br />Click 'Edit User' to edit the user */}
            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }} >
                <div style={{ flex: 1, overflow: "scroll", maxHeight: "70vh" }}>
                    {/* <Form.Control as="select" htmlSize={10} onChange={handleUserChange}> */}
                    {users &&
                        Object.values(users).map(obj => {
                            return (
                                <ExpansionPanel  >
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header">
                                        <Typography className="heading">
                                            {obj.email}
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="panel">
                                        <Typography>
                                            {Object.keys(obj).map(key => {
                                                let fieldName = key.charAt(0).toUpperCase() + key.slice(1);
                                                let display = obj[key];
                                                if (key === "hasShared") {
                                                    fieldName = "Has shared on social";
                                                    display = obj[key] ? "yes" : "no";
                                                } else if (key === "rewards") {
                                                    console.log(obj[key]);
                                                    console.log(rewards);
                                                    return <div>
                                                        <b>Rewards: </b>
                                                        {rewards && obj[key][1] ?
                                                            obj[key].map(reward => {
                                                                if (reward !== "dummy" && rewards[reward])
                                                                    return (
                                                                        <div>{rewards[reward].name}</div>
                                                                    )
                                                            })
                                                            :
                                                            "none"}
                                                    </div>
                                                }
                                                if (key !== 'id')
                                                    return (
                                                        <div>
                                                            <b>{fieldName}:</b> {display}
                                                        </div>
                                                    )
                                            })}
                                            <div>
                                                <b>Permissions:</b> {props.admins.includes(obj.id) ? " Admin" : " User"}
                                            </div>
                                            <button onClick={() => handleUserChange(obj.id)}>Edit User</button>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            );
                        })}
                </div>
                {/* </Form.Control> */}
                {selectedUser &&
                    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <div>
                            {selectedUser && users && Object.keys(editedObject).map(key => {
                                console.log(editedObject);
                                console.log(editedObject[key]);
                                if (key === 'hasShared') {
                                    return <HasSharedDisplay hasShared={editedObject[key]}
                                        changeInputHandler={changeInputHandler} />
                                } else if (key === 'rewards') {
                                    return <RewardsDisplay />
                                } else if (key !== 'id')
                                    return (
                                        <div>
                                            <label>{key}</label>
                                            <input type="text" value={editedObject[key]}
                                                onChange={(e) => changeInputHandler(e, key)} />
                                        </div>
                                    )
                            })}
                            <div>
                                {selectedUser && <button onClick={handleEditUser}>Save Edit</button>}
                                <button style={{ backgroundColor: "red" }} onClick={handleDeleteUser}>Delete User</button>
                                <button onClick={handleClearSelectedUser}>Clear Selected User</button>
                                {isGlobalAdmin && !props.admins.includes(selectedUser) &&
                                    <button onClick={handleMakeAdmin}>Make General Admin</button>}
                                {isGlobalAdmin && props.admins.includes(selectedUser) &&
                                    <button onClick={handleRemoveAdmin}>Remove Admin Status</button>}
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

const HasSharedDisplay = ({ changeInputHandler, hasShared }) => {
    return (
        <div>
            <label>{"Has shared on social"}</label>
            <select value={hasShared}
                onChange={(e) => changeInputHandler(e, 'hasShared')} >
                <option></option>
            </select>
        </div >
    )
}

const RewardsDisplay = (props) => {
    return (
        <div></div>
    )
}

export default withFirebase(AdminPage);