import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

export default class Firebase {
    constructor() {
        app.initializeApp(config);

        // this.auth = app.auth();
        this.db = app.database();
    }

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    // *** rewards API ***

    reward = rid => this.db.ref(`rewards/${rid}`);

    rewards = () => this.db.ref('rewards');

    // *** Admin API ***

    admins = () => this.db.ref('admins');

}