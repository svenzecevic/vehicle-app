import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("listStore")
class Reload extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
  }

  render() {
    return (
      <button
        onClick={this.listStore.onReloadMake}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Reload
      </button>
    );
  }
}

export default Reload;
