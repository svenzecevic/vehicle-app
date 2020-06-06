import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignUpStore from "../stores/SignUpStore";
import { withFirebase } from "../assets/Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

@inject(() => ({
  store: new SignUpStore(),
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

  onSubmitForm = (email, passwordOne) => {
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        this.props.history.push("/signin");
      });
  };
}

export default compose(withRouter, withFirebase)(SignUp);
