import { observable, action } from "mobx";

class SessionStore {
  @observable accessToken = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  saveToken = (token) => {
    this.accessToken = token;
    console.log(this.accessToken);
  };
}

export default SessionStore;
