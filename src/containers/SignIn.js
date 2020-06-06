import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoginForm from "../components/SignIn/SignInForm";
import LoginStore from "../stores/LogInStore";
import { withFirebase } from "../assets/Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.baasic.com/v1/szecevic",
});

@inject(() => ({
  store: new LoginStore(),
}))
@observer
class SignIn extends Component {
  constructor(props) {
    super(props);
    api.get("/").then((res) => console.log(res));
  }

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
