import React, { Component } from "react";
import FormInput from "../Input/Input";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import classes from "../AddModel/AddModel.module.css";

@observer
class EditModelForm extends Component {
  componentDidMount() {
    this.props.store.getModels();
  }
  render() {
    const { form, onChange, store } = this.props;
    const { fields, meta } = form;

    return (
      <div className={classes.add}>
        <form
          className="border w-75 mx-auto shadow p-3 mb-5 bg-white rounded"
          onSubmit={this.submit}
        >
          <div>
            <select onChange={store.filter.bind(this)} defaultValue={"default"}>
              <option disabled value="default">
                Choose a model...
              </option>
              <option>All</option>
              {store.models.map((opt) => {
                return <option key={opt.id}> {opt.name} </option>;
              })}
            </select>
          </div>
          <div>
            <FormInput
              type="text"
              name="name"
              value={fields.name.value}
              error={fields.name.error}
              onChange={onChange}
              placeholder="Edit vehicle model"
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

EditModelForm.propTypes = {
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

export default EditModelForm;