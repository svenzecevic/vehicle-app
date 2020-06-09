import { observable } from "mobx";
import GenericFormStore from "./GenericFormStore";

class LoginStore extends GenericFormStore {
  @observable
  form = {
    fields: {
      name: {
        value: "",
        error: null,
        rule: "required|string|between:5,25",
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
