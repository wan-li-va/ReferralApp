import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import { withFirebase } from './components/Firebase';
import Auth from './components/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login.js';
import AboutUs from './components/AboutUs.js';
import FAQ from './components/FAQ.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "3"
    }
  }

  componentDidUpdate = (prevState) => {
    const { firebase } = this.props;
    const { id } = this.state;
    if (id !== '3' && prevState.id === id) {
      firebase.user(id).once('value')
        .then(snapshot => {
          let userObj = snapshot.val();
          this.setState({ authUser: userObj });
        })
        .catch(err => console.log(err))
    }
  }

  setUser = (uid) => {
    this.setState({
      id: uid
    })
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
              <Auth setUser={uid => this.setUser(uid)} />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}
export default withFirebase(App);