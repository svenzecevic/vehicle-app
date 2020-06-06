import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoginForm from "../components/SignIn/SignInForm";
import LoginStore from "../stores/LogInStore";
import { withFirebase } from "../assets/Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

@inject(() => ({
  store: new LoginStore(),
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

  onSubmitForm = (email, password) => {
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push("/make-list");
      });
  };
}

export default compose(withRouter, withFirebase)(SignIn);
