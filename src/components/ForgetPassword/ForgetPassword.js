import React, { Component } from "react";
import { withFirebase } from "../../assets/Firebase";
import { inject, observer } from "mobx-react";
import { action } from "mobx";
import classes from "./ForgetPassword.module.css";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";


@inject("store")
@observer
class PasswordForgetBase extends Component {
  constructor(props) {
    super(props);
    this.pwStore = this.props.store.pwStore
  }

  @action
  onSubmit = (e) => {
    const { email } = this.pwStore

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.pwStore.email = ""
        this.pwStore.error = null
        this.pwStore.info = true
        
      })
      .catch((error) => {
        this.pwStore.error = error;
      });

    e.preventDefault();
  };

  @action
  onChange = (e) => {
    const { name, value } = e.target
    this.pwStore[name] = value
  };

  render() {
    const { email, error } = this.pwStore

    const isInvalid = email === "";

    return (
      <div className={classes.pwForget}>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            className="form-control"
            value={email}
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
          {this.pwStore.info ? <p>Link for password reset has been sent to your email!</p> : null}
          
          <Link to="/signin" >
          <button>Go back to Sign In</button>
          </Link>

        </form>
      </div>
    );
  }
}

const PasswordForget = compose(withRouter, withFirebase)(PasswordForgetBase);

export default PasswordForget;
