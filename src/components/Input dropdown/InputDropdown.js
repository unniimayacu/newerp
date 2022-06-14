import React from "react";
// import Select from "react-select";
import styles from "./input.module.scss";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

function InputDropdown( props ) {
  return (
    <div className={`${styles.dropdowndiv} ${props.className}`}>
      {/* <Select
        value=''
        // onChange={this.handleChange}
        placeholder=''
        options=" "
        className={`${styles.inputdropdown}`}
      /> */}
      <DropdownList className={`${styles.inputdropdown}`}  />
    </div>
  );
}

export default InputDropdown;
