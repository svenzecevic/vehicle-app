import React from "react";
import Aux from "../../hoc/Auxillary";

const Filter = (props) => {

  const storeArr = props.store
  let uniqueArr = []

  storeArr.forEach(element => {
    if(!uniqueArr.some(e => e.make === element.make)) {
      uniqueArr.push({...element})
    }    
  });

  return(
  <Aux>
    <label></label>
    <select onChange={props.onChange} defaultValue={"default"}>
      <option disabled value="default">
        Choose a make...
      </option>
      {uniqueArr.map((opt => {
        return <option key={opt.id}> {opt.make} </option>
      }))}
    </select>
  </Aux>
  )
}

export default Filter;
