import React from "react";

const sortButton = (props) => (
  <button
    onClick={props.clicked}
    className="btn btn-primary"
    data-toggle="button"
    aria-pressed="false"
  >
    Sort by make
  </button>
);

export default sortButton;
