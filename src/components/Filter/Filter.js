import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("makeListStore")
@observer
class Filter extends Component {
  constructor(props) {
    super(props);

    this.makeListStore = this.props.makeListStore;
  }

  render() {
    return (
      <React.Fragment>
        <label></label>
        <select
          onChange={this.makeListStore.filter.bind(this)}
          defaultValue={"default"}
        >
          <option disabled value="default">
            Choose a make...
          </option>
          <option>All</option>
          {this.makeListStore.dropdownMakes.map((opt) => {
            return <option key={opt.id}> {opt.name} </option>;
          })}
        </select>
      </React.Fragment>
    );
  }
}

export default Filter;
