import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../assets/Firebase";
import classes from "./SignIn.module.css";
import { inject, observer } from "mobx-react";
import { action } from "mobx";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/main-page");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className={classes.loginForm}>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            className="form-control"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            className="form-control"
            value={password}
            onChange={this.onChange}
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
