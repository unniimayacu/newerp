import React from "react";
import styles from "./input.module.scss";

function InputType() {
  return (
    <div>
      <div>
        <input type="text" placeholder="" className={`${styles.input_type}`} />
      </div>
    </div>
  );
}

export default InputType;
