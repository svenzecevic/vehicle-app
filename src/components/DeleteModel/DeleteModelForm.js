import React, { Component } from "react";
import FormInput from "../Input/Input";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import classes from "../AddMake/AddMake.module.css";

@observer
class DeleteModelForm extends Component {
  render() {
    const { form, onChange, editStore } = this.props;
    const { fields, meta } = form;

    return (
      <div className={classes.add}>
        <form
          className="border w-75 mx-auto shadow p-3 mb-5 bg-white rounded"
          onSubmit={this.submit}
        >
          <div>
            <select
              onChange={editStore.filter.bind(this)}
              defaultValue={"default"}
            >
              <option disabled value="default">
                Choose a make...
              </option>
              {editStore.models.map((opt) => {
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

DeleteModelForm.propTypes = {
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

export default DeleteModelForm;
