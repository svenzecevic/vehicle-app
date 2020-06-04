import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("listStore")
class SortButton extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
  }

  render() {
    return (
      <button
        onClick={this.listStore.onSortMake}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Sort
      </button>
    );
  }
}

export default SortButton;
