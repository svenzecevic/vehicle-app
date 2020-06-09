import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoginForm from "../components/SignIn/SignInForm";
import LoginStore from "../stores/LogInStore";
import SessionStore from "../stores/SessionStore";
import { withFirebase } from "../assets/Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import axios from "../axios-cars";

@inject(() => ({
  store: new LoginStore(),
  sessionStore: new SessionStore(),
}))
@observer
class SignIn extends Component {
  constructor(props) {
    super(props);
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

  onSubmitForm = (name, pass) => {
    let { sessionStore } = this.props;
    const qs = require("querystring");

    const body = {
      grant_type: "password",
      username: name,
      password: pass,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post("/login?options=session,sliding", qs.stringify(body), config)
      .then((res) => {
        sessionStore.saveToken(res.data.access_token);
        this.props.history.push("/make-list");
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default compose(withRouter, withFirebase)(SignIn);
