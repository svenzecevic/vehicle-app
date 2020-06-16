import { observable, action } from "mobx";
import axios from "../axios-cars";

class SessionStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable routerSignin = false;
  @observable routerSignup = false;

  @action
  handleSignOut = () => {
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
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  @action
  submitSignIn = (name, pass) => {
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
      .post("/login", qs.stringify(body), config)
      .then((res) => {
        let token = res.data.access_token;
        sessionStorage.setItem("authToken", token);
        this.routerSignin = true;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  @action
  submitSignUp = (mail, pass, confirmPass, name) => {
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
      this.routerSignup = true;
    });
  };
}

export default SessionStore;
