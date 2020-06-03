import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Search extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={this.listStore.searchHandler.bind(this)} />
      </React.Fragment>
    );
  }
}

export default Search;
