import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EditModelForm from "../components/EditModel/EditModel";
import ValidationFormStore from "../stores/ValidationFormStore";
import EditModelStore from "../stores/EditModelStore";

@inject(() => ({
  store: new ValidationFormStore(),
  editModelStore: new EditModelStore(),
}))
@observer
class EditModel extends Component {
  componentDidMount() {
    this.props.editModelStore.getModels();
  }
  render() {
    let { store, editModelStore } = this.props;
    return (
      <div>
        <EditModelForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          editModelStore={editModelStore}
          onChange={store.onFieldChange}
        />
        {editModelStore.info ? (
          <p className="text-danger">Vehicle model has been edited!</p>
        ) : null}
      </div>
    );
  }

  onSubmitForm = (name) => {
    this.props.editModelStore.submitEdit(name);
  };
}

export default EditModel;
