import GenericFormStore from "./GenericFormStore";
import { observable } from "mobx";

class ValidationFormStore extends GenericFormStore {
  @observable
  form = {
    fields: {
      name: {
        value: "",
        error: null,
        rule: "required|string|between:1,25",
      },
    },
    meta: {
      isValid: true,
      error: null,
    },
  };
}

export default ValidationFormStore;
