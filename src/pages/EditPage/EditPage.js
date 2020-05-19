import React from "react";
import EditScreen from "../../components/EditScreen/EditScreen";
import Toolbar from "../../components/Toolbar/Toolbar";
import withAuthorization from "../../components/Session/withAuthorization";

const EditPage = () => (
  <React.Fragment>
    <Toolbar />
    <EditScreen />;
  </React.Fragment>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(EditPage);
