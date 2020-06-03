import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../assets/Firebase";
import { inject, observer } from "mobx-react";

const withAuthorization = (condition) => (Component) => {
  @inject("sessionStore")
  @observer
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);
      this.sessionStore = this.props.sessionStore;
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        (authUser) => {
          if (!condition(authUser)) {
            this.props.history.push("/signin");
          }
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }
    render() {
      return condition(this.sessionStore.authUser) ? (
        <Component {...this.props} />
      ) : null;
    }
  }

  return compose(withRouter, withFirebase)(WithAuthorization);
};

export default withAuthorization;
