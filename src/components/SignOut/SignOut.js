import React from "react";
import { withFirebase } from "../../assets/Firebase/";
import classes from "./SignOut.module.css";

const SignOut = ({ firebase }) => (
  <a onClick={firebase.doSignOut} className={classes.signOut}>
    Sign Out
  </a>
);

export default withFirebase(SignOut);
