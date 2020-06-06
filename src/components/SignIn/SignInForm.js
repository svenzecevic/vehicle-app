import React, { Component } from "react";
import FormInput from "../Input/Input";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import classes from "./SignIn.module.css";

@observer
class LoginForm extends Component {
  render() {
    const { form, onChange } = this.props;
    const { fields, meta } = form;

    return (
      <div className={classes.loginForm}>
        <form className="form-group" onSubmit={this.submit}>
          <div>
            <FormInput
              type="email"
              name="email"
              value={fields.email.value}
              error={fields.email.error}
              onChange={onChange}
              placeholder="Email Address"
            />
          </div>
          <div>
            <FormInput
              type="password"
              name="password"
              value={fields.password.value}
              error={fields.password.error}
              onChange={onChange}
              placeholder="Password"
            />
          </div>

          {meta.error ? <div>{meta.error}</div> : null}

          <button
            className="btn btn-primary"
            disabled={!meta.isValid}
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
  submit = (e) => {
    e.preventDefault();
    let email = this.props.form.fields.email.value;
    let password = this.props.form.fields.password.value;
    this.props.onSubmit(email, password);
  };
}
LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.shape({
    fields: PropTypes.objectOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.any,
      })
    ).isRequired,
    meta: PropTypes.shape({
      isValid: PropTypes.bool.isRequired,
      error: PropTypes.any,
    }).isRequired,
  }).isRequired,
};

export default LoginForm;
