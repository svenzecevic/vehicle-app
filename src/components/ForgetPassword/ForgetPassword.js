import React, { Component } from "react";
import { withFirebase } from "../../assets/Firebase";
import { inject, observer } from "mobx-react";
import { action } from "mobx";
import classes from "./ForgetPassword.module.css";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

class PasswordForgetBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: null,
    };
  }

  onSubmit = (e) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({
          email: "",
          error: null,
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.state.error = error;
      });

    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <div className={classes.pwForget}>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <button
            disabled={isInvalid}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Reset My Password
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const PasswordForget = compose(withRouter, withFirebase)(PasswordForgetBase);

export default PasswordForget;
