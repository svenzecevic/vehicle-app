import React, { Component } from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import classes from "../AddMake/AddMake.module.css";

@observer
class DeleteMakeForm extends Component {
  render() {
    const { form, deleteMakeStore } = this.props;
    const { meta } = form;

    return (
      <div className={classes.add}>
        <form
          className="border w-75 mx-auto shadow p-3 mb-5 bg-white rounded"
          onSubmit={this.submit}
        >
          <div>
            <select
              onChange={deleteMakeStore.filter.bind(this)}
              defaultValue={"default"}
            >
              <option disabled value="default">
                Choose a make...
              </option>
              {deleteMakeStore.itemsList.map((opt) => {
                return <option key={opt.id}> {opt.name} </option>;
              })}
            </select>
          </div>

          <button
            className="btn btn-primary btn-danger"
            disabled={!meta.isValid}
            type="submit"
          >
            Delete
          </button>
        </form>
      </div>
    );
  }

  submit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  };
}

DeleteMakeForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.shape({
    fields: PropTypes.objectOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.any,
      })
    ).isRequired,
    meta: PropTypes.shape({
      isValid: PropTypes.bool.isRequired,
      error: PropTypes.any,
    }).isRequired,
  }).isRequired,
};

export default DeleteMakeForm;
