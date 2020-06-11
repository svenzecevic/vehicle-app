import { observable } from "mobx";
import GenericFormStore from "./GenericFormStore";

class AddMakeStore extends GenericFormStore {
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

export default AddMakeStore;
