import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo />
    <nav>
      <ul>
        <li>
          {" "}
          <a href="/">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="/">Add new car</a>{" "}
        </li>
      </ul>
    </nav>
  </header>
);

export default toolbar;
