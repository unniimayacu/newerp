import React from "react";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";

const actionIcons = () => {
  return (
    <div className="d-flex gap-2 align-items-center justify-content-center ">
      <span className="erp_edit_delte_icon__size ">
        <BsPencilSquare />
      </span>
      <span className="erp_edit_delte_icon__size">
        <RiFileSearchFill />{" "}
      </span>
      <span className="erp_edit_delte_icon__size">
        <MdDelete />{" "}
      </span>
    </div>
  );
};
const activeSwitch = () => {
  return (
    <div className="erp_status_switch-color">
      <Form.Check type="switch" id="custom-switch" />
    </div>
  );
};

export default function EmployeelistData() {
  const data = [
    {
      action: actionIcons(),
      col1: "RT-1001",
      col2: "Williams",
      col3: "PA-23467867363",
      col4: "02/07/2022",
      // col5: actionIcons(),
      col5: activeSwitch(),
    },
    {
      action: actionIcons(),
      col1: "RT-1003",
      col2: "John Kooper",
      col3: "PA-23467867363",
      col4: "04/07/2022",
      // col5: actionIcons(),
      col5: activeSwitch(),
    },
    {
      action: actionIcons(),
      col1: "RT-1004",
      col2: "John Kooper",
      col3: "PA-23467867363",
      col4: "03/08/2022",
      // col5: actionIcons(),
      col5: activeSwitch(),
    },
  ];

  let dataChunk = [];
  for (let i = 0; i < data.length; i++) {
    dataChunk.push(data[i]);
  }
  return dataChunk;
}
