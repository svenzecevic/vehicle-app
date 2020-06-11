import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignUpStore from "../stores/SignUpStore";
import { withRouter } from "react-router-dom";
import axios from "../axios-cars";

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

  onSubmitForm = (mail, pass, confirmPass, name) => {
    const body = {
      activationUrl: "http://localhost:3001/make-list",
      confirmPassword: confirmPass,
      email: mail,
      password: pass,
      userName: name,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("/register", body, config).then((res) => {
      this.props.history.push("/signin");
    });
  };
}

export default withRouter(SignUp);
