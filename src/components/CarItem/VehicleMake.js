import React from "react";
import classes from "./CarItem.module.css";

const CarItem = (props) => {
  return (
    <div className={classes.CarItem}>
      <p> {props.make}</p>
    </div>
  );
};

export default CarItem;
