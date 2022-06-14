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
<<<<<<< HEAD
          inputClass="w-100"
=======
          inputClass='w-100 border-1px-solid  '
>>>>>>> b4c2c99688d06b31294aaa601eaea1371cd0bbd9
          value={value}
          onChange={setValue}
          className={`${styles.phoneinput} ${styles.className}`}
        />
      </div>
    </div>
  );
}

export default PhoneInputt