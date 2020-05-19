import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { withFirebase } from "./assets/Firebase";
import { inject, observer } from "mobx-react"
import { action } from "mobx"

@inject("store")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    }
    this.sessionStore = this.props.store.sessionStore
  }

  @action
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.sessionStore.authUser = authUser
        : this.sessionStore.authUser = authUser
    });
    console.log(this.sessionStore.authUser)
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default withFirebase(App);
