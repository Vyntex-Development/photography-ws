/* eslint-disable react/display-name */

import classes from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.Input}>
      <input
        ref={ref}
        style={{ color: props.color ? props.color : "#dfdfe0" }}
        {...props}
      />
      {props.error && <span className={classes.Error}>{props.error}</span>}
    </div>
  );
});

export default Input;
