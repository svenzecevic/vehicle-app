import React from "react";
import Aux from "../../hoc/Auxillary";
import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />

      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
