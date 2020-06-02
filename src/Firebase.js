import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

require('dotenv').config();
var key = process.env.REACT_APP_KEY;

const config = {
    apiKey: key,
    authDomain: "referralapp-9c02a.firebaseapp.com",
    databaseURL: "https://referralapp-9c02a.firebaseio.com",
    projectId: "referralapp-9c02a",
    storageBucket: "referralapp-9c02a.appspot.com",
    messagingSenderId: "120981071250",
    appId: "1:120981071250:web:0f0cc797c9d2c8fe070d4b",
    measurementId: "G-2EH3FEJGEZ"
};

var firebaseApp = firebase.initializeApp(config)

export default firebaseApp;