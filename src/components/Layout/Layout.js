import React from "react";
import Jumbotron from "../../pages/Jumbotron/Jumbotron";
import MainPage from "../../pages/MainPage/MainPage";
import { Route } from "react-router-dom";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <div className={classes.Content}>
      <Route path="/" exact component={Jumbotron} />
      <Route path="/main-page" exact component={MainPage} />
    </div>
  );
};

export default layout;
