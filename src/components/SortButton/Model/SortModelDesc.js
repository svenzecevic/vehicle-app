import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("listStore")
class SortModelDesc extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
  }

  render() {
    return (
      <button
        onClick={this.listStore.onSortModelDesc}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Sort desc
      </button>
    );
  }
}

export default SortModelDesc;
