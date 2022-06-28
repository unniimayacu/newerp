import React from "react";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";

const actionIcons = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <span className="cust_icon_edit  ">
        <BsPencilSquare />
      </span>
      <span className="cust_icon_edit ms-2">
        <RiFileSearchFill />{" "}
      </span>
      <span className="cust_icon_edit ms-2">
        <MdDelete />{" "}
      </span>
    </div>
  );
};
const activeSwitch = () => {
  return (
    <div className="custswitch_color">
      <Form.Check type="switch" id="custom-switch" />
    </div>
  );
};

export default function EmployeelistData() {
  const data = [
    {
      col1: "RT-1001",
      col2: "Williams",
      col3: "PA-23467867363",
      col4: "02/07/2022",
      col5: actionIcons(),
      col6: activeSwitch(),
    },
    {
      col1: "RT-1003",
      col2: "John Kooper",
      col3: "PA-23467867363",
      col4: "04/07/2022",
      col5: actionIcons(),
      col6: activeSwitch(),
    },
    {
      col1: "RT-1004",
      col2: "John Kooper",
      col3: "PA-23467867363",
      col4: "03/08/2022",
      col5: actionIcons(),
      col6: activeSwitch(),
    },
  ];

  let dataChunk = [];
  for (let i = 0; i < data.length; i++) {
    dataChunk.push(data[i]);
  }
  return dataChunk;
}
