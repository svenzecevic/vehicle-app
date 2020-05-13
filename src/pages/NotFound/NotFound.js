import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <React.Fragment>
    <h1>Page not found!</h1>

    <Link to="/main-page">
      <button className="btn btn-link">Go back to home page</button>
    </Link>
  </React.Fragment>
);

export default NotFound;
