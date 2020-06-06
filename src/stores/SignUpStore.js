import { observable } from "mobx";
import GenericFormStore from "./GenericFormStore";

class SignUpStore extends GenericFormStore {
  @observable
  form = {
    fields: {
      username: {
        value: "",
        error: null,
        rule: "required|string|between:5,25",
      },
      email: {
        value: "",
        error: null,
        rule: "required|string|email|between:5,25",
      },
      passwordOne: {
        value: "",
        error: null,
        rule: "required|string|between:5,25",
      },
      passwordTwo: {
        value: "",
        error: null,
        rule: "required|string|same:passwordOne|between:5,25",
      },
    },
    meta: {
      isValid: true,
      error: null,
    },
  };
}

export default SignUpStore;
