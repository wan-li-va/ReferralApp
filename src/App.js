import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import Firebase from './Firebase.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Somebirds</h1>
        <Header />
        <Dashboard />
      </div>
    );
  }
}