import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import List from "../../containers/ListModels";


const MainPage = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <List />
    </React.Fragment>
  );
};

export default MainPage;
