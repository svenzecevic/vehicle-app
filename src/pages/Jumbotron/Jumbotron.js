import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <h1 className="display-4">Vehicle App</h1>
    <p className="lead">App for finding vehicle with make and model</p>
    <hr className="my-4 " />
    <Link to="/main-page" className="btn btn-primary btn-lg role=" button>
      {" "}
      Enter
    </Link>
  </div>
);

export default Jumbotron;
