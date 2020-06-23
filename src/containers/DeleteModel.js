import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import DeleteModelForm from "../components/DeleteModel/DeleteModelForm";
import ValidationFormStore from "../stores/ValidationFormStore";
import DeleteModelStore from "../stores/DeleteModelStore";

@inject(() => ({
  store: new ValidationFormStore(),
  deleteModelStore: new DeleteModelStore(),
}))
@observer
class DeleteModel extends Component {
  componentDidMount = () => {
    this.props.deleteModelStore.getModels();
  };

  onSubmitForm = () => {
    this.props.deleteModelStore.handleEdit();
  };

  render() {
    let { store, deleteModelStore } = this.props;
    return (
      <div>
        <DeleteModelForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
          deleteModelStore={deleteModelStore}
        />
        {deleteModelStore.info ? (
          <p className="text-danger">Vehicle model has been deleted!</p>
        ) : null}
      </div>
    );
  }
}

export default DeleteModel;
