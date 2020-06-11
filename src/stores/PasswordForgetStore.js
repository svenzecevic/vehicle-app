import { action, observable } from "mobx";
import GenericFormStore from "./GenericFormStore";

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
  resetInfo = () => {
    this.info = false;
  };
}

export default PasswordForgetStore;
