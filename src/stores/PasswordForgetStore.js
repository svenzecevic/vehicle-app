import { action, observable } from "mobx";

class PasswordForgetStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable email = "";
  @observable error = null;
  @observable info = false;

  @action
  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  @action
  handleonSubmit = () => {
    this.email = "";
    this.error = null;
    this.info = true;
  };

  @action
  handleError = (error) => {
    this.error = error;
  };
}

export default PasswordForgetStore;
