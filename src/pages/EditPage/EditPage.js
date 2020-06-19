import React from "react";
import EditMake from "../../containers/EditMake";
import EditModel from "../../containers/EditModel";
import Toolbar from "../../components/Toolbar/Toolbar";

const EditPage = () => (
  <React.Fragment>
    <Toolbar />
    <h1>Edit vehicle make</h1>
    <EditMake />
    <br />
    <h1>Edit vehicle model</h1>
    <EditModel />
  </React.Fragment>
);

export default EditPage;
