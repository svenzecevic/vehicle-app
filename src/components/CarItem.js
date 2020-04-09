import React from "react";
import classes from "./CarItem.module.css";

const CarItem = (props) => {
  return (
    <div className={classes.CarItem}>
      <p> Make: {props.make}</p>
      <p> Model: {props.model}</p>
    </div>
  );
};

export default CarItem;
