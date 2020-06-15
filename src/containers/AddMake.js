import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddMakeStore from "../stores/AddMakeStore";
import AddMakeForm from "../components/AddMake/AddMakeForm";
import ListStore from "../stores/ListStore";

@inject(() => ({
  store: new AddMakeStore(),
  listStore: new ListStore(),
}))
@observer
class AddMake extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        <AddMakeForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
        />
      </div>
    );
  }

  onSubmitForm = (make) => {
    this.props.listStore.addMake(make);
  };
}

export default AddMake;
