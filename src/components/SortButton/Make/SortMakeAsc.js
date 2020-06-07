import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("listStore")
class SortMakeAsc extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
  }

  render() {
    return (
      <button
        onClick={this.listStore.onSortMakeAsc}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Sort asc
      </button>
    );
  }
}

export default SortMakeAsc;
