import React from "react";
// import Select from "react-select";
import styles from "./input.module.scss";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

function InputDropdown(props) {
   const {
     placeholder,
     className,
     appendIcon = null,
     prependIcon=null,
     onChange,
     ...rest
   } = props;
  return (
    <div className={`${styles.dropdowndiv} ${props.className} dropdownWrapper`}>
      {/* <Select
        value=''
        // onChange={this.handleChange}
        placeholder=''
        options=" "
        className={`${styles.inputdropdown}`}
      /> */}
      <DropdownList
        defaultValue=" "
        data={[" ", " ", " ", " "]}
        className={`${styles.inputdropdown} ${props.dropdown}`}

      />
    </div>
  );
}

export default InputDropdown;
