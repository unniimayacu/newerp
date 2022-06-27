import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs';

import { BiSearch } from "react-icons/bi";
import { FiLogIn } from 'react-icons/fi';



const search = () => {
  return (
    <div className="custswitch_color d-flex ">
      <BiSearch color="gray" fontSize={20}  />
      <FiLogIn  color='gray' fontSize={20} />
    </div>
  );
};


const activeSwitch = () => {
  return (
    <div className="custswitch_color">
      <BsFillCircleFill color="whitesmoke" fontSize={25} />
    </div>
  );
};

function HRMSTableDummyData() {

const tableData = [
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "passport",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
  {
    blank: activeSwitch(),
    emp_id: "qqwewwr123",
    name: "john wick",
    search: search(),
    document: "22/03/2030",
    expdate: "qqwewwr123",
    leave: "sick",
    reqdate: "22/03/2022",
    totalfund: "2000",
    doctype: "visa",
    fundreq: "2000",
  },
];

  let dataChunk = [];
  for (let i = 0; i < tableData.length; i++) {
    dataChunk.push(tableData[i]);
  }

  return dataChunk
}

export default HRMSTableDummyData