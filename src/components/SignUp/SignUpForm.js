import React, { Component } from "react";
import FormInput from "../Input/Input";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import classes from "./SignUp.module.css";

@observer
class SignUpForm extends Component {
  render() {
    const { form, onChange } = this.props;
    const { fields, meta } = form;

    return (
      <div className={classes.loginForm}>
        <form className="form-group" onSubmit={this.submit}>
          <div>
            <div>
              <FormInput
                type="text"
                name="username"
                value={fields.username.value}
                error={fields.username.error}
                onChange={onChange}
                placeholder="Username"
              />
            </div>
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
              name="passwordOne"
              value={fields.passwordOne.value}
              error={fields.passwordOne.error}
              onChange={onChange}
              placeholder="Password"
            />
          </div>
          <div>
            <FormInput
              type="password"
              name="passwordTwo"
              value={fields.passwordTwo.value}
              error={fields.passwordTwo.error}
              onChange={onChange}
              placeholder="Confirm password"
            />
          </div>

          {meta.error ? <div>{meta.error}</div> : null}

          <button
            className="btn btn-primary"
            disabled={!meta.isValid}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
  submit = (e) => {
    e.preventDefault();
    let email = this.props.form.fields.email.value;
    let passwordOne = this.props.form.fields.passwordOne.value;
    this.props.onSubmit(email, passwordOne);
  };
}
SignUpForm.propTypes = {
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

export default SignUpForm;
