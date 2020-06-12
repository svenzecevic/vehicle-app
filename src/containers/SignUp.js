import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignUpStore from "../stores/SignUpStore";
import SessionStore from "../stores/SessionStore";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new SignUpStore(),
  sessionStore: new SessionStore(),
}))
@observer
class SignUp extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        <SignUpForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
        />
      </div>
    );
  }

  onSubmitForm = (mail, pass, confirmPass, name) => {
    this.props.sessionStore.submitSignUp(mail, pass, confirmPass, name);
    if (this.props.sessionStore.routerSignup) {
      this.props.history.push("/signin");
    }
  };
}

export default withRouter(SignUp);
