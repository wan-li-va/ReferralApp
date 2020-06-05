import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { withFirebase } from './components/Firebase';

import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import Auth from './components/Auth';
import AboutUs from './components/AboutUs.js';
import FAQ from './components/FAQ.js';
import AdminPage from './components/AdminPage.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ({ firebase }) => {
  const [id, setID] = useState('3');
  const [signedIn, setSignedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    if (id !== '3') {
      let unsubscribe = firebase.users().on('child_changed',
        snapshot => {
          if (id === snapshot.val().id) {
            setAuthUser(snapshot.val());
          }
        })
      firebase.db.ref().on('child_changed',
        snapshot => {
          if (snapshot.key === 'admins') {
            setAdmins(snapshot.val());
          }
        })
      firebase.admins().once('value')
        .then(snapshot => {
          setAdmins(snapshot.val());
        });
      firebase.user(id).once('value')
        .then(snapshot => {
          let userObj = snapshot.val();
          setAuthUser(userObj);
          setSignedIn(true);
        });
      firebase.admins().once('value')
        .then(snapshot => {
          let adminArr = snapshot.val();
          if (adminArr.includes(id))
            setIsAdmin(true);
        })
    }
  }, [id])

  const handleSignOut = () => {
    setID("3");
    setSignedIn(false);
    setAuthUser(null);
    setIsAdmin(false);
    return <Redirect to='/' />
  }

  const setUser = (uid) => {
    setID(uid);
    setSignedIn(true);
  }

  const handleRedirect = () => {
    if (signedIn) {
      if (isAdmin) {
        return <div>
          <Route path='/admin' exact>
            <AdminPage user={authUser} admins={admins} />
          </Route>
          <Route path='/dashboard'>
            <Dashboard user={authUser} />
          </Route>
          <Route path="/" exact >
            <Auth setUser={uid => setUser(uid)} signedIn={signedIn} />
          </Route>
        </div>
      } else {
        return <div>
          <Route path='/dashboard'>
            <Dashboard user={authUser} />
          </Route>
          <Route path="/" exact >
            <Auth setUser={uid => setUser(uid)} signedIn={signedIn} />
          </Route>
          <Redirect to='/dashboard' />
        </div>
      }
    } else {
      return (
        <Route path="/"  >
          <Auth setUser={uid => setUser(uid)} signedIn={signedIn} />
        </Route>);
    }
  }

  return (
    <Router>
      <div className="App">
        <Header signedIn={signedIn} handleSignOut={() => handleSignOut()} isAdmin={isAdmin} />
        <Switch>
          <Route path="/about" component={AboutUs} exact />
          <Route path="/faq" component={FAQ} exact />
          {handleRedirect()}
        </Switch>
      </div>
    </Router >
  );

}
export default withFirebase(App);