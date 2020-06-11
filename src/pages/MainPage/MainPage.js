import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import List from "../../containers/ListMakes";
import withAuthorization from "../../components/Session/withAuthorization";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <List />
    </React.Fragment>
  );
};

const condition = (authUser) => !!authUser;

export default MainPage;
