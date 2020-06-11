import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ForgetPasswordForm from "../components/ForgetPassword/ForgetPasswordForm";
import PasswordForgetStore from "../stores/PasswordForgetStore";
import axios from "../axios-cars";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new PasswordForgetStore(),
}))
@observer
class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.props.store.resetInfo();
  }
  render() {
    let { store } = this.props;
    return (
      <div>
        <ForgetPasswordForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
        />

        {store.info ? (
          <p>Link for password reset has been sent to your email</p>
        ) : null}
      </div>
    );
  }

  onSubmitForm = (n) => {
    const name = n;

    const body = {
      recoverUrl: "http://localhost:3000/pw-reset",
      userName: name,
    };
    axios.post("/recover-password", body).then((res) => {
      this.props.store.switchInfo();
      console.log(res);
    });
  };
}

export default withRouter(ForgetPassword);
