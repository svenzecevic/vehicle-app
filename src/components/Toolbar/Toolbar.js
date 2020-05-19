import React, { Component } from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import AddButton from "../AddButton/AddButton";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import SignOut from "../SignOut/SignOut"


@inject("store")
@observer
class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.sessionStore = this.props.store.sessionStore;
  }

  render() {

    let authUser = this.sessionStore.authUser
    return (
      <header className={classes.Toolbar}>
        <Logo />
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/main-page">Home</Link>{" "}
            </li>
            <li>
              <AddButton />
            </li>
            <li>
            { authUser ? <SignOut/> : null }
            </li>

          </ul>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
