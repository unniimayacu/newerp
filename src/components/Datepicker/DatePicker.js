import React from "react";
import styles from "./datepicker.module.scss";
function DatePicker(props) {
  return (
    <div>
      <div>
        <input
          type="date"
          className={`${styles.datepicker} ${props.className}`}
          aria-invalid="false"
        />
      </div>
    </div>
  );
}

export default DatePicker;
