import React, { Component } from "react";
import classes from "./SignOut.module.css";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("sessionStore")
class SignOut extends Component {
  constructor(props) {
    super(props);
    this.sessionStore = this.props.sessionStore;
  }

  onSignOut = () => {
    this.sessionStore.handleSignOut();
    this.props.history.push("/signin");
  };

  render() {
    return (
      <button onClick={this.onSignOut} className={classes.signOut}>
        SignOut
      </button>
    );
  }
}

export default withRouter(SignOut);
