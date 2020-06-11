import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EditModelForm from "../components/EditModel/EditModelForm";
import { withRouter } from "react-router-dom";
import EditModelStore from "../stores/EditMakeStore";
import ListStore from "../stores/ListStore";

@inject(() => ({
  store: new EditModelStore(),
  listStore: new ListStore(),
}))
@observer
class EditModel extends Component {
  render() {
    let { store, listStore } = this.props;
    return (
      <div>
        <EditModelForm
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

export default withRouter(EditModel);
