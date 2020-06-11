import { observable, action } from "mobx";

class SessionStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

export default SessionStore;
