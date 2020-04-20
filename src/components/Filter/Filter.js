import React from "react";
import Aux from "../../hoc/Auxillary";

const Sort = (props) => (
  <Aux>
    <label></label>
    <select onChange={props.onChange} defaultValue={"default"}>
      <option disabled value="default">
        Choose a make...
      </option>
      <option>Alfa Romeo</option>
      <option>BMW</option>
    </select>
  </Aux>
);

export default Sort;
