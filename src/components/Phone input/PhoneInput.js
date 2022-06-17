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
      <div className={`${styles.phonein}`}>
        <PhoneInput
          country={"in"}
          countryCodeEditable={false}
          // inputClass="w-100"
          inputClass="w-100 border-0  "
          
          buttonClass="border-0 "
          // inputClass="w-100 border-1px-solid  "
          inputStyle={{
            backgroundColor:"whitesmoke",
            
            color:"black"
          }}
          value={value}
          onChange={onChange}
          // onChange={onChange}
          // value={value.phone}
          // onChange={(phone) => setValue({ phone })}
          className={`${styles.phoneinput} ${styles.className}`}
          {...rest}
        />{" "}
      </div>{" "}
    </div>
  );
}

export default PhoneInputt;
