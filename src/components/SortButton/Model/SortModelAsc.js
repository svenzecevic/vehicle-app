import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("modelListStore")
class SortModelAsc extends Component {
  constructor(props) {
    super(props);
    this.modelListStore = this.props.modelListStore;
  }

  render() {
    return (
      <button
        onClick={this.modelListStore.onSortAsc}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Sort asc
      </button>
    );
  }
}

export default SortModelAsc;
