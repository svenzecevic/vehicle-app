import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("makeListStore")
class SortMakeAsc extends Component {
  constructor(props) {
    super(props);
    this.makeListStore = this.props.makeListStore;
  }

  render() {
    return (
      <button
        onClick={this.makeListStore.onSortAsc}
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
