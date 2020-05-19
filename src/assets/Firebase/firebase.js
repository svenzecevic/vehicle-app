import app from "firebase/app";
import auth from "firebase/auth";

const config = {
  apiKey: "AIzaSyBXaZD9TUoRx21dEIiZyoGyjbJe46RBm-w",
  authDomain: "project-app-628a3.firebaseapp.com",
  databaseURL: "https://project-app-628a3.firebaseio.com",
  projectId: "project-app-628a3",
  storageBucket: "project-app-628a3.appspot.com",
  messagingSenderId: "274233948060",
  appId: "1:274233948060:web:46114e3561c5c729633a59",
  measurementId: "G-2JDEWGW8T3",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  
}

export default Firebase;
