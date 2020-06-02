import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import Firebase from './Firebase.js';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login.js';
import AboutUs from './components/AboutUs.js';
import FAQ from './components/FAQ.js';
=======
>>>>>>> master
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
            <Route path="/ReSHOE/dashboard" component={Dashboard} />
            <Route path="/ReSHOE/about" component={AboutUs} />
            <Route path="/ReSHOE/faq" component={FAQ} />
            <Route path="/ReSHOE/" exact >
              <Login />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}