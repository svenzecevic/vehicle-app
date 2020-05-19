import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import CarList from "../../containers/CarList";
import SortButton from "../../components/SortButton/SortButton";
import Filter from "../../components/Filter/Filter";
import withAuthorization  from "../../components/Session/withAuthorization"


const MainPage = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <SortButton />
      <Filter />
      <CarList />
    </React.Fragment>
  );
};

const condition = authUser => !!authUser

export default withAuthorization(condition)(MainPage);
