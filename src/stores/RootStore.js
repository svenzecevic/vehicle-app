import ListStore from "./ListStore";
import SessionStore from "./SessionStore";
import SignUpStore from "./SignUpStore";
import PasswordForgetStore from "./PasswordForgetStore";

class RootStore {
  constructor() {
    this.listStore = new ListStore(this);
    this.sessionStore = new SessionStore(this);
    this.signupStore = new SignUpStore(this);
    this.pwStore = new PasswordForgetStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
