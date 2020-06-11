import React, { Component } from "react";
import FormInput from "../Input/Input";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import classes from "./AddMake.module.css";

@observer
class AddMakeForm extends Component {
  render() {
    const { form, onChange } = this.props;
    const { fields, meta } = form;

    return (
      <div className={classes.add}>
        <form
          className="border w-75 mx-auto shadow p-3 mb-5 bg-white rounded"
          onSubmit={this.submit}
        >
          <div>
            <FormInput
              type="text"
              name="name"
              value={fields.name.value}
              error={fields.name.error}
              onChange={onChange}
              placeholder="Vehicle make"
            />
          </div>
          {meta.error ? <div> {meta.error} </div> : null}

          <button
            className="btn btn-primary btn-block"
            disabled={!meta.isValid}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  submit = (e) => {
    e.preventDefault();
    let name = this.props.form.fields.name.value;
    this.props.onSubmit(name);
  };
}

AddMakeForm.propTypes = {
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

export default AddMakeForm;
