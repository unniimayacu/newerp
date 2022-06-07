import Newcontact from "components/customersnewcontact/Newcontact";
import Header from "components/header/Header";
import Table from "components/table/Table";
import React from "react";

function Customers() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row mt-5 ">
        <Newcontact />
      </div>
      <div className="row">
        <Table 
        
        />
      </div>
    </div>
  );
}

export default Customers;
