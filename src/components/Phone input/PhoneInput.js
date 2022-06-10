import {React,useState} from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from './PhoneInput.module.scss'



function PhoneInputt(props) {
     const [value, setValue] = useState();


  


  return (
    <div>
      <div>
        <PhoneInput
          country={"in"}
          countryCodeEditable={false}
          inputClass="w-100"
          value={value}
          onChange={setValue}
          className={`${styles.phoneinput} ${styles.className}`}
        />
      </div>
    </div>
  );
}

export default PhoneInputt