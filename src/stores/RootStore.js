import CarStore from "./CarStore";
import ListStore from "./ListStore";
import SessionStore from "./SessionStore";
import SignUpStore from "./SignUpStore"
import SignInStore from "./SignInStore"
import PasswordForgetStore from "./PasswordForgetStore"
import SearchStore from "./SearchStore"


class RootStore {
  constructor() {
    this.carStore = new CarStore(this);
    this.listStore = new ListStore(this);
    this.sessionStore = new SessionStore(this);
    this.signupStore = new SignUpStore(this)
    this.signinStore = new SignInStore(this)
    this.pwStore = new PasswordForgetStore(this)
    this.searchStore = new SearchStore(this)
  }
}

const rootStore = new RootStore();

export default rootStore;
