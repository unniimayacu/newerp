import React, { useMemo } from "react";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import { FaCheckCircle } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";

import { Form } from "react-bootstrap";

const actionIcons = () => {
  return (
    <div className="d-flex gap-2 align-items-center justify-content-center ">
      <span className="erp_edit_delte_icon__size">
        <BsPencilSquare />
      </span>

      <span className="erp_edit_delte_icon__size">
        <Link to={ROUTES.VIEWSALEORDER}>
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

// IoTimerOutline
const convertedsale =()=>{
    return (
      <div className="d-flex gap-1  align-items-center justify-content-center">
        <span className="erp__saleconvertion">
          <FaCheckCircle />{" "}
        </span>
        <span>Converted to Sale</span>
      </div>
    );
}
const pendingsale = () => {
  return (
    <div className="d-flex gap-1 align-items-center justify-content-center ">
      <span className="pending__saleorder">
        <IoTimer />{" "}
      </span>
      <span >Pending</span>
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
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 2,
      col1: "24443",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: pendingsale(),
    },
    {
      action: actionIcons(),
      slno: 3,
      col1: "234222",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: pendingsale(),
    },
    {
      action: actionIcons(),
      slno: 4,
      col1: "88",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 5,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 6,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 7,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 8,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 9,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 10,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 11,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 12,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 13,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 14,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      status: convertedsale(),
    },
    {
      action: actionIcons(),
      slno: 15,
      col1: "43",
      col2: "28/09/22",
      col3: "johnwilson",
      col4: "edwardtest",
      col5: "johnwilson",
      col6: "1000",
      // col7: actionIcons(),
    },
  ];

  let dataChunk = [];
  for (let i = 0; i < data.length; i++) {
    dataChunk.push(data[i]);
  }
  return dataChunk;
}
