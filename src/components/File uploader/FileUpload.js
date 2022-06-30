import React from "react";
import styles from "./file.module.scss";
import img from "./uploadIcon.svg";
import { PlusCircleFilled } from "@ant-design/icons";

function FileUpload(props) {
  return (
    <div>
      <div>
        <div>
          <label id="" htmlFor="file" name="">
            <div className={`card ${styles.filerow}`}>
              <div className="row">
                <div>
                  <img src={img} alt="" height={100} width={200} />
                </div>
              </div>
              <div className="row">
                <p>Drop your Document</p>
              </div>
            </div>
            <input
              type="file"
              // name="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
              className={`${styles.fileuploader}`}
            />
          </label>
          {props.filebuttons && (
            <div className={`${styles.buttonsdiv}`}>
              <button className={`${styles.uploadchoose}`}>Choose File</button>

              <button type="submit" className={`${styles.uploadbutton}`}>
                Add <PlusCircleFilled className={`${styles.plus}`} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
