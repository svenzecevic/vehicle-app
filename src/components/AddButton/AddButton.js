import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

@inject("store")
@observer
class AddButton extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
  }

  render() {
    return (
      <li>
        <Link to="/edit-page"> Add new car </Link>
      </li>
    );
  }
}

export default AddButton;
