import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import DeleteModelStore from "../stores/EditModelStore";
import DeleteModelForm from "../components/DeleteModel/DeleteModelForm";
import { withRouter } from "react-router-dom";
import axios from "../axios-cars";

@inject(() => ({
  store: new DeleteModelStore(),
}))
@observer
class DeleteModel extends Component {
  componentDidMount = () => {
    this.props.store.getModels();
    this.props.store.restartInfo();
  };

  onSubmitForm = () => {
    this.props.store.handleEdit();
  };

  render() {
    let { store } = this.props;
    return (
      <div>
        <DeleteModelForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
          editStore={store}
        />
        {this.props.store.info ? (
          <p classname="text-danger">Vehicle make has been deleted!</p>
        ) : null}
      </div>
    );
  }
}

export default withRouter(DeleteModel);
