import { withFirebase } from "../../assets/Firebase";
import { inject } from "mobx-react";

const withAuthentication = (Component) => {
  @inject("store")
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.sessionStore = this.props.store.sessionStore;
      this.sessionStore.setAuthUser(
        JSON.parse(localStorage.getItem("authUser"))
      );
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        (authUser) => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.sessionStore.setAuthUser(authUser);
        },
        () => {
          localStorage.removeItem("authUser");
          this.sessionStore.setAuthUser(null);
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
