import React from "react";
import logo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

const Logo = () => (
  <div className={classes.LogoCl}>
    <img src={logo} />
  </div>
);

export default Logo;
