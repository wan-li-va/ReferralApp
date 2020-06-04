import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import { withFirebase } from './components/Firebase';
import Auth from './components/Auth';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import AboutUs from './components/AboutUs.js';
import FAQ from './components/FAQ.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ firebase }) => {
  const [id, setID] = useState('3');
  const [signedIn, setSignedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    if (id !== '3') {
      let unsubscribe = firebase.users().on('child_changed',
        snapshot => {
          if (id === snapshot.val().id) {
            setAuthUser(snapshot.val());
          }
        })
      firebase.user(id).once('value')
        .then(snapshot => {
          let userObj = snapshot.val();
          setAuthUser(userObj);
          // localUserObj = userObj;
          setSignedIn(true);
        });
    }
  }, [id])

  const handleSignOut = () => {
    setID("3");
    setSignedIn(false);
    setAuthUser(null);
    return <Redirect to='/ReferralApp' />
  }

  const setUser = (uid) => {
    setID(uid);
    setSignedIn(true);
  }


  return (
    <Router>
      <div className="App">
        <Header signedIn={signedIn} handleSignOut={() => handleSignOut()} />
        <Switch>
          <Route path="/ReferralApp/about" component={AboutUs} exact />
          <Route path="/ReferralApp/faq" component={FAQ} exact />
          {(signedIn && true) ? <Redirect to='/ReferralApp/dashboard' /> :
            <Route path="/ReferralApp" exact >
              <Auth setUser={uid => setUser(uid)} signedIn={signedIn} />
            </Route>}
          {signedIn ?
            <Route path='/ReferralApp/dashboard' exact>
              <Dashboard user={authUser} />
            </Route> : <Redirect to='/ReferralApp' />}
        </Switch>
      </div>
    </Router >
  );

}
export default withFirebase(App);