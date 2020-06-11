import React from "react";
import AddModel from "../../containers/AddModel";
import Toolbar from "../../components/Toolbar/Toolbar";

const AddModelPage = () => (
  <React.Fragment>
    <h1>Enter new vehicle model</h1>
    <AddModel />
    <Toolbar />
  </React.Fragment>
);

export default AddModelPage;
