import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../../assets/Firebase";
import { compose } from "recompose";
import classes from "./SignUp.module.css";
import { inject, observer } from "mobx-react";
import { action } from "mobx";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/signin");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className={classes.loginForm}>
        <form onSubmit={this.onSubmit}>
          <input
            name="username"
            className="form-control"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            className="form-control"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            className="form-control"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            className="form-control"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button
            disabled={isInvalid}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Sign Up
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUp = compose(withRouter, withFirebase)(SignUpBase);

export default SignUp;
