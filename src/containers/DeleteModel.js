import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EditModelStore from "../stores/EditModelStore";
import DeleteModelForm from "../components/DeleteModel/DeleteModelForm";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new EditModelStore(),
}))
@observer
class DeleteModel extends Component {
  componentDidMount = () => {
    this.props.store.getModels();
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
          store={store}
        />
        {this.props.store.info ? (
          <p classname="text-danger">Vehicle make has been deleted!</p>
        ) : null}
      </div>
    );
  }
}

export default withRouter(DeleteModel);
