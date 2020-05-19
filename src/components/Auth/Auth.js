import React, { Component } from "react";
import axios from "axios";
import { inject, observer } from "mobx-react";
import { action, computed } from "mobx";
import { Link } from "react-router-dom";
import classes from "./Auth.module.css";

@inject("store")
@observer
class Auth extends Component {
  constructor(props) {
    super(props);
    this.authStore = this.props.store.authStore;
  }

  @action
  handleInput = (e) => {
    this.authStore.authData = {
      ...this.authStore.authData,
      [e.target.name]: e.target.value,
    };
  };

  @action
  handleSubmit = (e) => {
    e.preventDefault();
    const authData = {
      ...this.authStore.authData,
      returnSecureToken: true,
    };
    console.log(authData);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBXaZD9TUoRx21dEIiZyoGyjbJe46RBm-w",
        authData
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className={classes.loginForm}>
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Username"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Auth;
