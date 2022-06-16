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
// function Makedata() {

// return <></>;
// }

export default function Makedata() {
  const data = [
    {
      slno: 1,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "T9999358-1 ",
      col3: "DI.000",
      col4: "Emirates Petrochemical Services & Scaffolding Est.",
      col5: "34 ",
      col6: "56",
      col7: "56",
      col8: "77",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 2,
      col1: "anBLAST MACHINE 60 LTR WITH REMOTE CONTROL UNIT WITH FLAT SAND VALVE WITH STANDARD ACCESSORIESnie",
      col2: "T9999358",
      col3: "DI.000",
      col4: "mirates Petrochemical Services",
      col5: "34",
      col6: "67",
      col7: "78",
      col8: "65",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 3,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "mirates Petrochemical",
      col5: "22",
      col6: "33",
      col7: "33",
      col8: "34",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 4,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "mirates Petrochemical",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 5,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "mirates Petrochemical",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 6,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "mirates Petrochemical",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 7,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "mirates Petrochemical",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 8,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "mirates Petrochemical",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 9,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 10,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 11,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "EmaDI.000il",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 12,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "DI.000",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 13,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "01I.000",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 14,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 15,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 16,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 17,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 18,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 19,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 20,
      col1: "ISO 2409-ISO 8502-3 ADHESIVE TAPE(1 ROLL)",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 21,
      col1: "annu",
      col2: "Contact Person",
      col3: "Email",
      col4: "Phone",
      col5: "Payment Period",
      col6: "Tax Number",
      col7: "Credit Limit",
      col8: "Payment Type",
      col9: actionIcons(),
      col10: activeSwitch(),
    },
  ];

 
  let dataChunk = [];
  for (let i = 0; i < data.length; i++) {
    dataChunk.push(data[i]);
  }
  return dataChunk;
}






// let dataChunk =[];
//  for (i=0, i<data.length, i++){
//    dataChunk.push(data);
//  }


// const range = (len) => {
  //   const arr = [];
  //   for (let i = 0; i < len; i++) {
  //     arr.push(data);
  //   }
  //   return arr;
  // };

//  data.forEach((item) => {
//    copyItems.push(item);
//  });



// import namor from "namor";

// const range = (len) => {
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// const newPerson = () => {

//   return {
//     slno: namor.Math.floor(Math.random() * 100),
//     product: namor.generate({ words: 1, numbers: 0 }),
//     productsku: namor.generate({ words: 1, numbers: 0 }),
//     dimension: namor.generate({ words: 1, numbers: 0 }),
//     supplier: namor.generate({ words: 1, numbers: 0 }),
//     purchasequantity: Math.floor(Math.random() * 100),
//     salesquantity: Math.floor(Math.random() * 100),
//     onhand: Math.floor(Math.random() * 100),
//     recordingquantity: Math.floor(Math.random() * 100),
//     action: Math.floor(Math.random() * 100),
//     action: Math.floor(Math.random() * 100),

//   };
// };

// export default function makeData(...lens) {
//   const makeDataLevel = (depth = 0) => {
//     const len = lens[depth];
//     return range(len).map((d) => {
//       return {
//         ...newPerson(),
//         subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
//       };
//     });
//   };

//   return makeDataLevel();
// }
