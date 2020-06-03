import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../assets/Firebase";
import classes from "./SignIn.module.css";
import { inject, observer } from "mobx-react";

@inject("signinStore")
@observer
class SignInBase extends Component {
  constructor(props) {
    super(props);
    this.signinStore = this.props.signinStore;
  }

  onSubmit = (e) => {
    const { email, password } = this.signinStore;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.signinStore.handleonSubmit();
        this.props.history.push("/main-page");
      })
      .catch((error) => {
        this.signinStore.handleError(error);
      });

    e.preventDefault();
  };

  render() {
    const { email, password, error } = this.signinStore;

    const isInvalid = password === "" || email === "";

    return (
      <div className={classes.loginForm}>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            className="form-control"
            value={email}
            onChange={this.signinStore.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            className="form-control"
            value={password}
            onChange={this.signinStore.onChange}
            type="password"
            placeholder="Password"
          />
          <button
            disabled={isInvalid}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignIn = compose(withRouter, withFirebase)(SignInBase);

export default SignIn;
