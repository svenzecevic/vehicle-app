import React, { Component } from "react";
import classes from "./SignOut.module.css";
import { inject, observer } from "mobx-react";
import SessionStore from "../../stores/SessionStore";
import axios from "axios";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new SessionStore(),
}))
class SignOut extends Component {
  test = () => {
    let token = sessionStorage.getItem("authToken");
    let axios = require("axios");
    let data = JSON.stringify({
      "token": token,
      "type": "bearer",
    });

    var config = {
      method: "delete",
      url: "https://api.baasic.com/v1/szecevic-cars/login/",
      headers: {
        "Authorization": "bearer " + token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        this.props.history.push("/signin");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <button onClick={this.test} className={classes.signOut}>
        SignOut
      </button>
    );
  }
}

export default SignOut;
