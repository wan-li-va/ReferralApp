import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import { withFirebase } from './components/Firebase';
import Auth from './components/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "3"
    }
  }

  componentDidUpdate = () => {
    const { firebase } = this.props;
    const { id } = this.state;
    firebase.user(id).once('value')
      .then(snapshot => {
        let userObj = snapshot.val();
        this.setState({ authUser: userObj });
      })
      .catch(err => console.log(err))
  }

  setUser = (uid) => {
    this.setState({
      id: uid
    })
  }


  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Somebirds</h1>
        {/* <Header />
        <Dashboard /> */}
        <Auth setUser={uid => this.setUser(uid)} />
      </div>
    );
  }
}
export default withFirebase(App);