import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import CarList from "../../containers/CarList";
import SortButton from "../../components/SortButton/SortButton";
import Filter from "../../components/Filter/Filter";

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

export default MainPage;
