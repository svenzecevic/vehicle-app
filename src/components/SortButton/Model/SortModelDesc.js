import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("modelListStore")
class SortModelDesc extends Component {
  constructor(props) {
    super(props);
    this.modelListStore = this.props.modelListStore;
  }

  render() {
    return (
      <button
        onClick={this.modelListStore.onSortDesc}
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
