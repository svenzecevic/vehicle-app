import React from "react";

const Sort = (props) => {
  return (
    <div>
      <label>Choose a make:</label>
      <select onChange={props.onChange}>
        <option disabled value="default" selected>
          Choose a make...
        </option>
        <option>Alfa Romeo</option>
        <option>BMW</option>
      </select>
    </div>
  );
};

export default Sort;
