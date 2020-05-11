import React from "react";
import Aux from "../../hoc/Auxillary";
import Toolbar from "../../components/Toolbar/Toolbar";
import CarList from "../../containers/CarList";
import SortButton from "../../components/SortButton/SortButton";
import Filter from "../../components/Filter/Filter";

const MainPage = (props) => {
  return (
    <Aux>
      <Toolbar />
      <SortButton />
      <Filter />
      <CarList />
    </Aux>
  );
};

export default MainPage;
