import React from "react";
import EditScreen from "../../components/EditScreen/EditScreen";
import Toolbar from "../../components/Toolbar/Toolbar";
import Aux from "../../hoc/Auxillary";

const EditPage = () => (
  <Aux>
    <Toolbar />
    <EditScreen />;
  </Aux>
);

export default EditPage;
