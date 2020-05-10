import React from "react";
import Aux from "../../hoc/Auxillary";
import Jumbotron from "../../pages/Jumbotron/Jumbotron";
import MainPage from "../../pages/MainPage/MainPage";
import { Route } from "react-router-dom";

const layout = (props) => {
  return (
    <Aux>
      <Route path="/" exact component={Jumbotron} />
      <Route path="/main-page" exact component={MainPage} />
    </Aux>
  );
};

export default layout;
