import React, { Component } from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import AddButton from "../AddButton/AddButton";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import SignOut from "../SignOut/SignOut";

@inject("sessionStore")
@observer
class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.sessionStore = this.props.sessionStore;
  }

  render() {
    return (
      <header className={classes.Toolbar}>
        <Logo />
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/make-list">Vehicle Makes</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/model-list">Vehicle Models</Link>{" "}
            </li>
            <li>
              <Link to="/edit-page">Edit</Link>
            </li>
            <li>
              <Link to="/delete-page">Delete</Link>
            </li>
            <li>
              <AddButton />
            </li>
            <li>
              <Link to="/add-model">Add new vehicle model</Link>
            </li>
            <li>
              <SignOut />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
