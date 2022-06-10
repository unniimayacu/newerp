import React from "react";
import styles from "./textarea.module.scss";

function TextArea(props) {
  return (
    <div>
      <div>
        <textarea name="textValue" className={`p-0 m-0 ${styles.textarea} ${props.className}`} />
      </div>
    </div>
  );
}

export default TextArea;
