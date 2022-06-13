import React from 'react'
// import SelectSearch from "react-select-search";
import styles from './addbutton.module.scss'
import Select from "react-select";





function AddButton() {
  return (
    <div>
      <div>
        {/* <SelectSearch
          // options={options}
          // value="sv"
          // name="language"
          placeholder=""
          className={`${styles.inputdropdown}`}
          search={true}
        /> */}

        <Select
          // value={selectedOption}
          // onChange={this.handleChange}
          // options={options}
          placeholder=" "
          className={`${styles.inputdropdown}`}
          styles={{backgroundColor:"whitesmoke",
        border:0,}}
        />
      </div>
    </div>
  );
}

export default AddButton