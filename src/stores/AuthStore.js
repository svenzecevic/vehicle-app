import { observable } from "mobx";

class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable authData = {};
  @observable pwData = {
    email: "",
    error: null
  }

  @observable signInData = {
    email: "",
    password: "",
    error: null
  }
  
  @observable signUpData = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null

  }

}
export default AuthStore;
