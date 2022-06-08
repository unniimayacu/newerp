import React from "react";
import styles from "./datepicker.module.scss";
function DatePicker() {
  return (
    <div>
      <div>
        <input
          type="date"
          className={`${styles.datepicker}`}
          aria-invalid="false"
        />
      </div>
    </div>
  );
}

export default DatePicker;
