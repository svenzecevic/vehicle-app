import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => (
  <div class="jumbotron jumbotron-fluid">
    <h1 class="display-4">Vehicle App</h1>
    <p class="lead">App for finding vehicle with make and model</p>
    <hr class="my-4 " />
    <Link to="/main-page" className="btn btn-primary btn-lg role=" button>
      {" "}
      Enter
    </Link>
  </div>
);

export default Jumbotron;
