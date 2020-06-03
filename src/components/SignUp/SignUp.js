import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../assets/Firebase";
import { compose } from "recompose";
import classes from "./SignUp.module.css";
import { inject, observer } from "mobx-react";

@inject("signupStore")
@observer
class SignUpBase extends Component {
  constructor(props) {
    super(props);
    this.signupStore = this.props.signupStore;
  }

  onSubmit = (e) => {
    const { email, passwordOne } = this.signupStore;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.signupStore.handleonSubmit();
        this.props.history.push("/signin");
      })
      .catch((error) => {
        this.signupStore.handleError(error);
      });
    e.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.signupStore;

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
            onChange={this.signupStore.onChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            className="form-control"
            value={email}
            onChange={this.signupStore.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            className="form-control"
            value={passwordOne}
            onChange={this.signupStore.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            className="form-control"
            value={passwordTwo}
            onChange={this.signupStore.onChange}
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
