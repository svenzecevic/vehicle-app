import React from "react";
import DeleteModel from "../../containers/DeleteModel";
import DeleteMake from "../../containers/DeleteMake";
import Toolbar from "../../components/Toolbar/Toolbar";

const DeletePage = () => (
  <React.Fragment>
    <Toolbar />
    <h2>Delete vehicle make</h2>
    <DeleteMake />
    <br />
    <h2>Edit vehicle model</h2>
    <DeleteModel />;
  </React.Fragment>
);

export default DeletePage;
