import { action, observable } from "mobx";
import GenericFormStore from "./GenericFormStore";
import axios from "../axios-cars";

class PasswordForgetStore extends GenericFormStore {
  @observable info = false;
  @observable
  form = {
    fields: {
      name: {
        value: "",
        error: null,
        rule: "required|string|between:5,25",
      },
    },
    meta: {
      isValid: true,
      error: null,
    },
  };

  @action
  switchInfo = () => {
    this.info = true;
  };

  @action
  pwSubmit = (n) => {
    const body = {
      recoverUrl: "http://localhost:3000/pw-reset",
      userName: n,
    };
    axios.post("/recover-password", body).then((res) => {
      this.switchInfo();
      console.log(res);
    });
  };
}

export default PasswordForgetStore;
