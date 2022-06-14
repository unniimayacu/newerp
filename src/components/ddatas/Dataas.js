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


  const categorydata = [
    {
      id: 1,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 2,
      col1: "canvas",
      col2: "CCer34F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 3,
      col1: "test",
      col2: "CCQ2f4F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 4,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 5,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 6,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 7,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 8,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 9,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 10,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 11,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 12,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 13,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 14,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 15,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 16,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 17,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 18,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 19,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 20,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 21,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 22,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 23,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 24,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 25,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 26,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 27,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 28,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 29,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
    {
      id: 30,
      col1: "Sneakers",
      col2: "CCQ234F",
      col3: "Iorem ispem id sometime is that of the part of the that",
      col4: "N/A",
      col5: actionIcons(),
      col6: activeSwitch(),
      // col7: "3%",
      // col8: "30",
      // col9: " ",
    },
  ];








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
      col9: actionIcons(),
      col10: activeSwitch(),
    },
    {
      slno: 2,
      col1: "annie",
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
      slno: 3,
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
    {
      slno: 4,
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
    {
      slno: 5,
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
    {
      slno: 6,
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
    {
      slno: 7,
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
    {
      slno: 8,
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
    {
      slno: 9,
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
    {
      slno: 10,
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
    {
      slno: 11,
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
    {
      slno: 12,
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
    {
      slno: 13,
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
    {
      slno: 14,
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
    {
      slno: 15,
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
    {
      slno: 16,
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
    {
      slno: 17,
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
    {
      slno: 18,
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
    {
      slno: 19,
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
    {
      slno: 20,
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








 
 
  
  // let dataChunk = [];
  // Array.from(
  //   Array(10).forEach((item, index) => {
  //     dataChunk.push(data);
  //   })
  // );
  // return dataChunk;

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
