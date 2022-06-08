import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./editor.module.scss";

const modules = {
  toolbar: [
    [{ font: [] }],
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "underline"],
    [{ color: [] }],
    // [{ script:  "sub" }, { script:  "super" }],
    // ["blockquote", "code-block"],
    // [{ list:  "ordered" }, { list:  "bullet" }],
    [{ align: [] }],
    // [{ table: [2,2]},{table:[4,4]}],
    ["link", "image", "video"],

    ["clean"],
  ],
};

function Editor() {
  // const CustomButton = () => <span className="octicon octicon-star" >fdgwywegdgefue</span>;
  // const CustomToolbar = () => (
  //   <div id="toolbar">
  //     <select
  //       className="ql-header"
  //       defaultValue={""}
  //       onChange={(e) => e.persist()}
  //     >
  //       <option value="1" />
  //       <option value="2" />
  //       <option selected />
  //     </select>
  //     <button className="ql-bold" />
  //     <button className="ql-italic" />
  //     <select className="ql-color">
  //       <option value="red" />
  //       <option value="green" />
  //       <option value="blue" />
  //       <option value="orange" />
  //       <option value="violet" />
  //       <option value="#d0d1d2" />
  //       <option selected />
  //     </select>
  //     <button className="ql-insertStar">
  //       <CustomButton />
  //     </button>
  //   </div>
  // );
  return (
    <div>
      <div className={`${styles.editordiv}`}>
        <ReactQuill
          theme={"snow"}
          modules={modules}
          className={`${styles.quill}`}
        />
      </div>
    </div>
  );
}

export default Editor;
