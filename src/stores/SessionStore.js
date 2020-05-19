import { observable, action } from "mobx";

class SessionStore {
  @observable authUser = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setAuthUser = (authUser) => {
    this.authUser = authUser;
  };
}

export default SessionStore;
