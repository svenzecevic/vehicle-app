import React from "react";
import Aux from "../../hoc/Auxillary";
import Toolbar from "../../components/Toolbar/Toolbar";
import CarList from "../../containers/CarList";

const MainPage = (props) => {
  return (
    <Aux>
      <Toolbar />
      <CarList />
    </Aux>
  );
};

export default MainPage;
