import React from "react";
import Aux from "../../hoc/Auxillary";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Aux>
    <h1>Page not found!</h1>

    <Link to="/main-page">
      <button className="btn btn-link">Go back to home page</button>
    </Link>
  </Aux>
);

export default NotFound;
