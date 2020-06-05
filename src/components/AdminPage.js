import React, { useState, useEffect } from 'react';
import { withFirebase } from './Firebase';
import Card from 'react-bootstrap/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/AdminPage.css'

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

    const handleDeleteUser = () => {
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
                                                console.log(editedObject);
                                                console.log(editedObject[key]);
                                                if (key !== 'id')
                                                    return (
                                                        <div>
                                                            <b>{key}:</b> {obj[key]}
                                                            {/* <label>{key}</label>
                                                    <li type="text" value={obj[key]}
                                                        onChange={(e) => changeInputHandler(e, key)} >
                                                        {obj[key]}
                                                    </li> */}
                                                        </div>
                                                    )
                                            })}
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
                                if (key !== 'id')
                                    return (
                                        <div>
                                            <label>{key}</label>
                                            <input type="text" value={editedObject[key]}
                                                onChange={(e) => changeInputHandler(e, key)} />
                                        </div>
                                    )
                            })}
                            {selectedUser && <button onClick={handleEditUser}>Save Edit</button>}
                            <button style={{ backgroundColor: "red" }} onClick={handleDeleteUser}>Delete User</button>
                            <button onClick={handleClearSelectedUser}>Clear Selected User</button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}
export default withFirebase(AdminPage);