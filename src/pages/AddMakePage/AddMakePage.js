import React from "react";
import AddMake from "../../containers/AddMake";
import Toolbar from "../../components/Toolbar/Toolbar";

const AddMakePage = () => (
  <React.Fragment>
    <h1>Enter new vehicle make</h1>
    <AddMake />
    <Toolbar />
  </React.Fragment>
);

export default AddMakePage;
