import React from 'react'
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
// import { AiFillPrinter } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const action = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <span className="cust_icon_edit  ">
        <BsPencilSquare color="gray" />
      </span>
      <span className="cust_icon_edit ms-2">
        <RiFileSearchFill color="gray" />{" "}
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
        dname: "Purchase",
        empname: "john wick",
        empid: "jk-3456547",
        category: "worker",
        aff: "Year 1 Ticket",
        atc: "Normal Class",
        details: "kl-dfs334563kljh6565478",
        action: action(),
        status: activeSwitch(),
        normalothours: "4",
        bonusotapp: "yes",
        normalotrate: "1.25",
        bonusotrate: "1.50",
        w_h_otrate: "1.58",
        p_h_otrate: "2.0",
        sectorname: "DBX-OCK-SCD",
        sector_start: "DBX",
        sector_end: "CFD",
        rate: "1123",
        leave: "casual",
        leavecategory: "paid",
        desc: "Iorem ispem id sometime is that of the part of the that",
        date: "22/04/2022",
        holiday: "Onam",
        weekend: "saturday",
      },
      {
        dcode: "jk-3456547",
        name: "Manager",
        dname: "Purchase",
        empname: "john wick",
        empid: "jk-3456547",
        category: "worker",
        aff: "Year 1 Ticket",
        atc: "Normal Class",
        details: "kl-dfs334563kljh6565478",
        desc: "Iorem ispem id sometime is that of the part of the that",
        date: "22/04/2022",
        action: action(),
        status: activeSwitch(),
        normalothours: "4",
        bonusotapp: "yes",
        normalotrate: "1.25",
        bonusotrate: "1.50",
        w_h_otrate: "1.58",
        p_h_otrate: "2.0",
        sectorname: "DBX-OCK-SCD",
        sector_start: "DBX",
        sector_end: "CFD",
        rate: "1123",
        leave: "sick",
        leavecategory: "Un paid",
        holiday: "Christmas",
        weekend: "sunday",
      },
    ];
      let dataChunk = [];
      for (let i = 0; i < data.length; i++) {
        dataChunk.push(data[i]);
      }
  return dataChunk
}

export default HrmsdesignationTabledata