import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.Input}>
      <input
        ref={ref}
        style={{ color: props.color ? props.color : "#dfdfe0" }}
        {...props}
      />
    </div>
  );
});

export default Input;
