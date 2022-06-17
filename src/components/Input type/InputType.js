import React from "react";
import styles from "./input.module.scss";

function InputType(props) {
  const {placeholder, className, onChange, ...rest} = props;
  return (
    <div>
      <div>
        <input
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          className={`${styles.input_type} ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
}

export default InputType;
