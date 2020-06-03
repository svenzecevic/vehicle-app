import { action, observable } from "mobx";

class SignInStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  @observable email = "";
  @observable password = "";
  @observable error = null;

  @action
  handleonSubmit = () => {
    this.email = "";
    this.password = "";
    this.error = null;
  };

  @action
  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  @action
  handleError = (error) => {
    this.error = error;
  };
}

export default SignInStore;
