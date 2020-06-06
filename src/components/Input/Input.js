import React from "react";
import PropTypes from "prop-types";

let FormInput = (props) => {
  let { type, error, onChange, ...rest } = props;
  type = type || "text";
  return (
    <span>
      <input
        {...rest}
        className="form-control"
        type={type}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
      {error ? <div className="form-text text-danger">{error}</div> : null}
    </span>
  );
};
FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password"]),
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
