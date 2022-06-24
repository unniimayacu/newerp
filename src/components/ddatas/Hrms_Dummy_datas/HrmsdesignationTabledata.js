import React from 'react'
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const action = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <span className="cust_icon_edit  ">
        <BsPencilSquare />
      </span>
      <span className="cust_icon_edit ms-2">
        <RiFileSearchFill />{" "}
      </span>
      <span className="cust_icon_edit ms-2">
        <MdDelete color="gray" />{" "}
      </span>
    </div>
  );
};

// const actionIcons = () => {
//   return (
//     <div className="d-flex align-items-center justify-content-center ">
//       <span className="cust_icon_edit  ">
//         <BsPencilSquare />
//       </span>
//       <span className="cust_icon_edit ms-2">
//         <RiFileSearchFill />{" "}
//       </span>
//       <span className="cust_icon_edit ms-2">
//         <AiFillPrinter />{" "}
//       </span>
//     </div>
//   );
// };
const activeSwitch = () => {
  return (
    <div className="custswitch_color">
      <Form.Check type="switch" id="custom-switch" />
    </div>
  );
};

function HrmsdesignationTabledata() {
    const data = [
      {
        dcode: "jk-3456547",
        name: "Manager",
        aff: "Year 1 Ticket",
        atc: "Normal Class",
        details: "kl-dfs334563kljh6565478",
        action: action(),
        status: activeSwitch(),
      },
      {
        dcode: "jk-3456547",
        name: "Manager",
        aff: "Year 1 Ticket",
        atc: "Normal Class",
        details: "kl-dfs334563kljh6565478",
        action: action(),
        status: activeSwitch(),
      },
    ];
      let dataChunk = [];
      for (let i = 0; i < data.length; i++) {
        dataChunk.push(data[i]);
      }
  return dataChunk
}

export default HrmsdesignationTabledata