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
  const [isAdmin, setIsAdmin] = useState(false);             // change later
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    if (id !== '3') {
      let unsubscribe = firebase.users().on('child_changed',
        snapshot => {
          if (id === snapshot.val().id) {
            setAuthUser(snapshot.val());
          }
        })
      firebase.admins().once('value')
        .then(snapshot => {
          console.log(snapshot.val());
          setAdmins(snapshot.val());
        });
      firebase.user(id).once('value')
        .then(snapshot => {
          let userObj = snapshot.val();
          setAuthUser(userObj);
          // localUserObj = userObj;
          setSignedIn(true);
        });
      firebase.admins().once('value')
        .then(snapshot => {
          let adminArr = snapshot.val();
          console.log(adminArr.includes(id))
          if (adminArr.includes(id))
            setIsAdmin(true);
        })
    }
  }, [id])

  const handleSignOut = () => {
    setID("3");
    setSignedIn(false);
    setAuthUser(null);
    return <Redirect to='/' />
  }

  const setUser = (uid) => {
    setID(uid);
    setSignedIn(true);
  }

  return (
    <Router>
      <div className="App">
        <Header signedIn={signedIn} handleSignOut={() => handleSignOut()} isAdmin={isAdmin} />
        <Switch>
          <Route path="/about" component={AboutUs} exact />
          <Route path="/faq" component={FAQ} exact />
          <Route path="/admin">
            <AdminPage admins={admins} user={authUser} />
          </Route>
          {signedIn ?
            <Route path='/dashboard' exact>
              <Dashboard user={authUser} />
            </Route> : <Route path="/"> <Auth setUser={uid => setUser(uid)} signedIn={signedIn} /> </Route>}

          {(signedIn && true) ? <Redirect to='/dashboard' /> :
            <Route path="/" exact >
              <Auth setUser={uid => setUser(uid)} signedIn={signedIn} />
            </Route>}
          {/* <Route path="/about" component={AboutUs} exact />
          <Route path="/faq" component={FAQ} exact />
          {signedIn ? <div></div> :
            <div>
              <Route path="/admin" exact >
                <AdminPage user={authUser} admins={admins} />
              </Route>
              <Route path='/dashboard' exact>
                <Dashboard user={authUser} />
              </Route>
            </div>}
          {signedIn ? (isAdmin ?
            <Redirect to="/admin" /> :
            <Redirect to="/dashboard" />
          ) : <Route path="/">
              <Auth setUser={uid => setUser(uid)} signedIn={signedIn} isAdmin={isAdmin} />
            </Route> */}
          }
          {/* <Route path="/about" component={AboutUs} exact />
          <Route path="/faq" component={FAQ} exact />
          <Route path='/dashboard' exact></Route>
            <Dashboard user={authUser} />
          </Route>
          <Route path="/admin" exact >
            <AdminPage user={authUser} />
          </Route>
          <Route path="/">
            <Auth setUser={uid => setUser(uid)} signedIn={signedIn} isAdmin={isAdmin} />
          </Route>
          {signedIn ? (isAdmin ?
            <Redirect to='/admin' /> :
            <Redirect to='/dashboard' />)
            : <Redirect to='/' />} */}
        </Switch>
      </div>
    </Router >
  );

}
export default withFirebase(App);