import { action, observable } from "mobx";
import { act } from "react-dom/test-utils";

class SignUpStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable username = "";
  @observable email = "";
  @observable passwordOne = "";
  @observable passwordTwo = "";
  @observable error = null;

  @action
  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  @action
  handleonSubmit = () => {
    this.username = "";
    this.email = "";
    this.passwordOne = "";
    this.passwordTwo = "";
    this.error = null;
  };

  @action
  handleError = (error) => {
    this.error = error;
  };
}

export default SignUpStore;
