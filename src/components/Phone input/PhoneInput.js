import { React, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./PhoneInput.module.scss";

function PhoneInputt(props) {
  const { 
    className, 
    onChange,
     ...rest
  
  
  } = props;
  const [value, setValue] = useState();

  return (
    <div>
      <div>
        <PhoneInput
          country={"in"}
          countryCodeEditable={false}
          // inputClass="w-100"
          inputClass="w-100 border-1px-solid  "
          // inputClass="w-100 border-1px-solid  "
          value={value}
          onChange={onChange}
          
          // onChange={(phone) => setValue({ phone })}
          className={`${styles.phoneinput} ${styles.className}`}
          {...rest}
        />{" "}
      </div>{" "}
    </div>
  );
}

export default PhoneInputt;
