import CarStore from "./CarStore";
import ListStore from "./ListStore";
import AuthStore from "./AuthStore";
import SessionStore from "./SessionStore";

class RootStore {
  constructor() {
    this.carStore = new CarStore(this);
    this.listStore = new ListStore(this);
    this.authStore = new AuthStore(this);
    this.sessionStore = new SessionStore(this);
   
  }
}

const rootStore = new RootStore();

export default rootStore;
