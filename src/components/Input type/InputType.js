import React from "react";
import styles from "./input.module.scss";

function InputType(props) {
  return (
    <div>
      <div>
        <input type="text" placeholder={props.placeholder} label={props.label}
         className={`${styles.input_type} ${props.className}`}  />
      </div>
    </div>
  );
}

export default InputType;
