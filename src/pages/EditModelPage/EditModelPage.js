import React from "react";
import EditModel from "../../containers/DeleteModel";
import Toolbar from "../../components/Toolbar/Toolbar";

const EditModelPage = () => (
  <React.Fragment>
    <Toolbar />
    <h2>Edit vehicle model</h2>
    <EditModel />;
  </React.Fragment>
);

export default EditModelPage;
