import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("makeListStore")
@observer
class Search extends Component {
  constructor(props) {
    super(props);
    this.makeListStore = this.props.makeListStore;
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={this.makeListStore.searchHandler.bind(this)} />
      </React.Fragment>
    );
  }
}

export default Search;
