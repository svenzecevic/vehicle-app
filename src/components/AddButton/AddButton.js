import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { action } from "mobx";
import { Link } from "react-router-dom"

@inject("store")
@observer
class AddButton extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
  }
  @action
  editingHandler = () => {
    this.listStore.editing = true;
  };

  render() {
    return (
      <li>
        <Link to="/edit-page"> Add new car </Link>
      </li>
    );
  }
}

export default AddButton;
