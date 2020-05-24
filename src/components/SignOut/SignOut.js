import React from "react";
import { withFirebase } from "../../assets/Firebase/";
import classes from "./SignOut.module.css";

const SignOut = ({ firebase }) => (
  <button onClick={firebase.doSignOut} className={classes.signOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOut);
