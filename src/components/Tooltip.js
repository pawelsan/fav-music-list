import React from "react";
import classes from "./Tooltip.module.css";

export const Tooltip = ({ show, text }) => {
  return (
    <div
      className={
        show
          ? `${classes["tooltip"]} ${classes["tooltip--visible"]}`
          : classes["tooltip"]
      }
    >
      {text}
      <span className={classes["tooltip__arrow"]} />
    </div>
  );
};
