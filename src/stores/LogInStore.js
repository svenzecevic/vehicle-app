import { observable } from "mobx";
import GenericFormStore from "./GenericFormStore";

class LoginStore extends GenericFormStore {
  @observable
  form = {
    fields: {
      email: {
        value: "",
        error: null,
        rule: "required|string|email|between:5,25",
      },
      password: {
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
}

export default LoginStore;
