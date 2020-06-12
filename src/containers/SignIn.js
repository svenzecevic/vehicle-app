import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoginForm from "../components/SignIn/SignInForm";
import LoginStore from "../stores/LogInStore";
import SessionStore from "../stores/SessionStore";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new LoginStore(),
  sessionStore: new SessionStore(),
}))
@observer
class SignIn extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
        />
      </div>
    );
  }

  onSubmitForm = (name, pass) => {
    this.props.sessionStore.submitSignIn(name, pass);
    if (this.props.sessionStore.routerSignin) {
      this.props.history.push("/make-list");
    }
  };
}

export default withRouter(SignIn);
