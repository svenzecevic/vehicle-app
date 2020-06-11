import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddModelForm from "../components/AddModel/AddModelForm";
import { withRouter } from "react-router-dom";
import AddModelStore from "../stores/AddMakeStore";
import ListStore from "../stores/ListStore";

@inject(() => ({
  store: new AddModelStore(),
  listStore: new ListStore(),
}))
@observer
class AddModel extends Component {
  render() {
    let { store, listStore } = this.props;
    return (
      <div>
        <AddModelForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          listStore={listStore}
          onChange={store.onFieldChange}
        />
      </div>
    );
  }

  onSubmitForm = (name, id) => {
    this.props.listStore.submitModel(name, id);
    this.props.history.push("/make-list");
  };
}

export default withRouter(AddModel);
