import React from 'react'
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";
import Layout from "Layout/Layout";
import { useMemo } from "react";
// import { FiUpload } from "react-icons/fi";
// import EmployeelistData from "components/ddatas/Hrms_Dummy_datas/Employeelistdata";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/index";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";

function Empcategorypayelement() {
     const actionIcons = () => {
       return (
         <div className="d-flex gap-3 align-items-center justify-content-center ">
           <span className="erp_edit_delte_icon__size ">
             <BsPencilSquare />
           </span>
           <span className="erp_edit_delte_icon__size ">
             <RiFileSearchFill />{" "}
           </span>
           <span className="erp_edit_delte_icon__size ">
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

     const columns = useMemo(
       () => [
         {
           Header: "EMPLOYEE CATEGORY",
           accessor: "col1",
         },
        

         {
           Header: "ACTION",
           accessor: "col2",
         },
         {
           Header: "STATUS",
           accessor: "col3",
         },
       ],
       []
     );

     const data = useMemo(
       () => [
         {
           col1: "Worker",
           
           col2: actionIcons(),
           col3: activeSwitch(),
         },
         {
           col1: "Driver",
          
           col2: actionIcons(),
           col3: activeSwitch(),
         },
       ],
       []
     );
  return (
    <>
      <Layout>
        <div className="container mt-2 justify-content-center  ">
          <div className="row justify-content-center ">
            <div className="card shadow-sm border border-2">
              <div className="row p-2 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                  <div className="d-flex gap-2">
                    <h5 className="erp__h5_color ">
                      {" "}
                      Employee category Pay Element
                    </h5>
                    <Link to={ROUTES.EMPCATEGORYPAYELEMENTCREATE}>
                      <Button
                        className=""
                        rounded={true}
                        appendIcon={<AiOutlinePlus />}
                      >
                     Add
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="  col-xl-4 col-lg-4 col-md-3 col-12">
                  <div className="d-flex justify-content-end">
                    <Newcontact />
                  </div>
                </div>
              </div>

              <div className="row mt-5 justify-content-center">
                <div className="text-center">
                  <Table
                    data={data}
                    columns={columns}
                    PageSize={false}
                    pagination={false}
                    Sorted={false}
                    className={true}
                    responsive={true}
                    pagecenter={false}
                    Tbody_style={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Empcategorypayelement