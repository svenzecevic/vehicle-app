import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EditStore from "../stores/EditStore";
import DeleteMakeForm from "../components/DeleteMake/DeleteMakeForm";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new EditStore(),
}))
@observer
class DeleteModel extends Component {
  componentDidMount = () => {
    this.props.store.getMakes();
  };

  onSubmitForm = () => {
    this.props.store.handleEditMake();
  };

  render() {
    let { store } = this.props;
    return (
      <div>
        <DeleteMakeForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
          store={store}
        />
        {store.makeInfo ? (
          <p className="text-danger">Vehicle make has been deleted!</p>
        ) : null}
      </div>
    );
  }
}

export default withRouter(DeleteModel);
