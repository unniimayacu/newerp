import React, { useMemo } from "react";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
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
        <AiFillPrinter />{" "}
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

const riskcategoryred = () => {
  return <div className="cust_riskred_color  "></div>;
};
const riskcategorygreen = () => {
  return <div className="cust_riskgreen_color  "></div>;
};
const riskcategoryyellow = () => {
  return <div className=" cust_riskyellow_color"></div>;
};

export default function Makedata() {
  const data = [
    {
      slno: 1,
      col1: "ann",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 2,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 3,
      col1: "Name",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 4,
      col1: "ann",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 5,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 6,
      col1: "ann",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 7,
      col1: "alan",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 8,
      col1: "ann",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 9,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 10,
      col1: "ann",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 11,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 12,
      col1: "ann",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 13,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 14,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 15,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 16,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 17,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 18,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 19,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 20,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 21,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 22,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 23,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
    {
      slno: 24,
      col1: "anna",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      col13: actionIcons(),
      col14: activeSwitch(),
    },
  ];

  let dataChunk = [];
  for (let i = 0; i < data.length; i++) {
    dataChunk.push(data[i]);
  }
  return dataChunk;

}


// const actionIcons = () => {
//   return (
//     <div className="d-flex align-items-center">
//       <span className="cust_icon_edit ms-2">
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
// }
// const activeSwitch =() =>{
//   return (
//     <div className="custswitch_color">
//       <Form.Check type="switch" id="custom-switch"  />
//     </div>
//   );
// }

// const riskcategoryred = () => {
//   return <div className="cust_riskred_color  "></div>;
// };
// const riskcategorygreen = () => {
//   return <div className="cust_riskgreen_color  "></div>;
// };
// const riskcategoryyellow = () => {
//   return <div className=" cust_riskyellow_color"></div>;
// };