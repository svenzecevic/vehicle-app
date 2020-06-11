import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

@inject("listStore")
@observer
class AddButton extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
  }

  render() {
    return (
      <li>
        <Link to="/add-page"> Add new vehicle make </Link>
      </li>
    );
  }
}

export default AddButton;
