import React from 'react'
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { MdDelete } from 'react-icons/md';



const action = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <span className="cust_icon_edit  ">
        <BsPencilSquare color="whitesmoke" />
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


const actionIcons = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <span className="cust_icon_edit  ">
        <BsPencilSquare color="lightgray" />
      </span>
      <span className="cust_icon_edit ms-2">
        <RiFileSearchFill color="gray" />{" "}
      </span>
      <span className="cust_icon_edit ms-2">
        <AiFillPrinter color="gray" />{" "}
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

export default function Categorydata() {


     const data = [
       {
         id: 1,
         col1: "Sneakers",
         col2: "CCQ234F",
         col3: "Iorem ispem id sometime is that of the part of the that",
         col4: "N/A",
         col5: actionIcons(),
         col6: activeSwitch(),
         dcode: "jk-3456547",
         name: "Manager",
         aff: "Year 1 Ticket",
         atc: "Normal Class",
         details: "kl-dfs334563kljh6565478",
         action: action(),
         status: activeSwitch(),
       },
       {
         id: 2,
         col1: "canvas",
         col2: "CCer34F",
         col3: "Iorem ispem id sometime is that of the part of the that",
         col4: "N/A",
         col5: actionIcons(),
         col6: activeSwitch(),
         dcode: "Yk-3456547",
         name: "Manager",
         aff: "Year 1 Ticket",
         atc: "Normal Class",
         details: "kl-dfs334563kljh6565478",
         action: action(),
         status: activeSwitch(),
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
         col7: "3%",
         col8: "30",
         col9: " ",
       },
       {
         id: 25,
         col1: "Sneakers",
         col2: "CCQ234F",
         col3: "Iorem ispem id sometime is that of the part of the that",
         col4: "N/A",
         col5: actionIcons(),
         col6: activeSwitch(),
         col7: "3%",
         col8: "30",
         col9: " ",
       },
       {
         id: 26,
         col1: "Sneakers",
         col2: "CCQ234F",
         col3: "Iorem ispem id sometime is that of the part of the that",
         col4: "N/A",
         col5: actionIcons(),
         col6: activeSwitch(),
         col7: "3%",
         col8: "30",
         col9: " ",
       },
       {
         id: 27,
         col1: "Sneakers",
         col2: "CCQ234F",
         col3: "Iorem ispem id sometime is that of the part of the that",
         col4: "N/A",
         col5: actionIcons(),
         col6: activeSwitch(),
       
       },
       {
         id: 28,
         col1: "Sneakers",
         col2: "CCQ234F",
         col3: "Iorem ispem id sometime is that of the part of the that",
         col4: "N/A",
         col5: actionIcons(),
         col6: activeSwitch(),
        
       },
       {
         id: 29,
         col1: "Sneakers",
         col2: "CCQ234F",
         col3: "Iorem ispem id sometime is that of the part of the that",
         col4: "N/A",
         col5: actionIcons(),
         col6: activeSwitch(),
       },
       {
         id: 30,
         col1: "Sneakers",
         col2: "CCQ234F",
         col3: "Iorem ispem id sometime is that of the part of the that",
         col4: "N/A",
         col5: actionIcons(),
         col6: activeSwitch(),
       },
     ];


     let dataChunk = [];
     for (let i = 0; i <data.length; i++) {
       dataChunk.push(data[i]);
     }

  return dataChunk;
}
