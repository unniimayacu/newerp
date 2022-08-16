import React, { useMemo } from "react";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import { Form } from "react-bootstrap";


const actionIcons = () => {
  return (
    <div className="d-flex gap-2 align-items-center justify-content-center ">
      <span className="erp_edit_delte_icon__size">
        <BsPencilSquare />
      </span>

      <span className="erp_edit_delte_icon__size">
        <Link to={ROUTES.VIEWSALESENQUIRY}>
          <RiFileSearchFill color="#4248f5" />{" "}
        </Link>
      </span>

      <span className="erp_edit_delte_icon__size">
        <AiFillPrinter />{" "}
      </span>
      <span className="erp_edit_delte_icon__size">
        <MdDelete />
      </span>
    </div>
  );
};
// const activeSwitch = () => {
//   return (
//     <div className="custswitch_color">
//       <Form.Check type="switch" id="custom-switch" />
//     </div>
//   );
// };


export default function Makedata() {
  const data = [
    {
      action: actionIcons(),
      slno: 1,
      col1: "233",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 2,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 3,
      col1: "23",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 4,
      col1: "88",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 5,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 6,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 7,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 8,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      //  action: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 9,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 10,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 11,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 12,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 13,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 14,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
    {
      action: actionIcons(),
      slno: 15,
      col1: "43",
      col2: "johnwilson",
      col3: "22/03/22",
      col4: "actionI",
      col5: "activeSwi",
      col6: "28/09/22",
      // col7: actionIcons(),
    },
  ];

  let dataChunk = [];
  for (let i = 0; i < data.length; i++) {
    dataChunk.push(data[i]);
  }
  return dataChunk;
}
