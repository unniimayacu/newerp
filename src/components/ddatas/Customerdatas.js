import React, { useMemo } from "react";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";

const actionIcons = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <span className="cust_icon_edit  ">
        <BsPencilSquare />
      </span>
      <span className="cust_icon_edit ms-2">
        <Link to={ROUTES.VIEWCUSTOMER}>
          <RiFileSearchFill color="#4248f5" />{" "}
        </Link>
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
      action: actionIcons(),
      slno: 1,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "34567",
      col10: "3456778",
      col11: riskcategoryred(),
      col12: "RoI",
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 2,
      col1: "REON TECHNOLOGIES",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 3,
      col1: "REON TECHNOLOGIES",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 4,
      col1: "ALMOORJ SOLUTION",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 5,
      col1: "ALMOORJ SOLUTION",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 6,
      col1: "ALMOORJ SOLUTION",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 7,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 8,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 9,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 10,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 11,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 12,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 13,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 14,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 15,
      col1: "AL-RAWAHY EST.DUBAI",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 16,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "naveen@gmail.com",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 17,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "naveen@gmail.com",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 18,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "naveen@gmail.com",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategorygreen(),
      col12: "RoI",
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 19,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "naveen@gmail.com",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 20,
      col1: "AL-RAWAHY EST.DUBAIn",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 21,
      col1: "ALMOORJ SOLUTION",
      col2: "Contact Person",
      col3: "naveen@gmail.com",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 22,
      col1: "ALMOORJ SOLUTION",
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
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 23,
      col1: "ALMOORJ SOLUTION",
      col2: "Contact Person",
      col3: "naveen@gmail.com",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryyellow(),
      col12: "RoI",
      // col13: actionIcons(),
      col13: activeSwitch(),
    },
    {
      action: actionIcons(),
      slno: 24,
      col1: "ALMOORJ SOLUTION",
      col2: "Contact Person",
      col3: "naveen@gmail.com",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: "Ue Amount",
      col10: "Invoiced Amount",
      col11: riskcategoryred(),
      col12: "RoI",
      // col13: actionIcons(),
      col13: activeSwitch(),
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