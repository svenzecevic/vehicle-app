import React, { Component } from "react";
import classes from "./SignOut.module.css";
import { inject, observer } from "mobx-react";
import SessionStore from "../../stores/SessionStore";

@inject(() => ({
  store: new SessionStore(),
}))
class SignOut extends Component {
  render() {
    return (
      <button
        onClick={this.props.store.handleSignOut}
        className={classes.signOut}
      >
        SignOut
      </button>
    );
  }
}

export default SignOut;
