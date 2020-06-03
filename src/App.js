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
      firebase.user(id).once('value')
        .then(snapshot => {
          let userObj = snapshot.val();
          setAuthUser(userObj);
          setSignedIn(true);
        })
        .catch(err => console.log(err))
    }
  }, [id, firebase])

  const handleSignOut = () => {
    setID("3");
    setSignedIn(false);
    setAuthUser(null);
    return <Redirect to='/ReferralApp/' />
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
          <Route path="/ReferralApp/dashboard" exact >
            <Dashboard user={authUser} />
          </Route>
          <Route path="/ReferralApp/about" component={AboutUs} />
          <Route path="/ReferralApp/faq" component={FAQ} />

          <Route path="/ReferralApp/" exact >
            <Auth setUser={uid => setUser(uid)} signedIn={signedIn} />
          </Route>
        </Switch>
      </div>
    </Router >
  );

}
export default withFirebase(App);