import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import classes from "./ForgetPassword.module.css";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

@inject("pwStore")
@observer
class PasswordForgetBase extends Component {
  constructor(props) {
    super(props);
    this.pwStore = this.props.pwStore;
  }

  onSubmit = (e) => {
    const { email } = this.pwStore;

    e.preventDefault();
  };

  render() {
    const { email, error } = this.pwStore;

    const isInvalid = email === "";

    return (
      <div className={classes.pwForget}>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            className="form-control"
            value={email}
            onChange={this.pwStore.onChange}
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
          {this.pwStore.info ? (
            <p>Link for password reset has been sent to your email!</p>
          ) : null}

          <Link to="/signin">
            <button>Go back to Sign In</button>
          </Link>
        </form>
      </div>
    );
  }
}

const PasswordForget = withRouter(PasswordForgetBase);

export default PasswordForget;
