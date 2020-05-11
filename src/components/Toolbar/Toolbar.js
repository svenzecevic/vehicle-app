import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import AddButton from "../AddButton/AddButton";
import SortButton from "../SortButton/SortButton";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo />
    <nav>
      <ul>
        <li>
          {" "}
          <a href="/">Home</a>{" "}
        </li>
        <AddButton />
      </ul>
    </nav>
  </header>
);

export default toolbar;
