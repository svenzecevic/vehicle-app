import React from "react";

const Sort = (props) => {
  return (
    <div>
      <label>Choose a make:</label>
      <select onChange={props.onChange} defaultValue={"default"}>
        <option disabled value="default">
          Choose a make...
        </option>
        <option>Alfa Romeo</option>
        <option>BMW</option>
      </select>
    </div>
  );
};

export default Sort;
