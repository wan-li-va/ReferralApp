import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import Firebase from './Firebase.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login.js';
import AboutUs from './components/AboutUs.js';
import FAQ from './components/FAQ.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/ReferralApp/dashboard" component={Dashboard} />
            <Route path="/ReferralApp/about" component={AboutUs} />
            <Route path="/ReferralApp/faq" component={FAQ} />
            <Route path="/ReferralApp/" exact >
              <Login />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}