import React from 'react'
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";
import Layout from "Layout/Layout";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/index";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";

import { MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";
import "./Leaveapplications.scss"
function Leaveapplicationlist() {

 const actionIcons = () => {
   return (
     <div className="d-flex align-items-center justify-content-center gap-2">
       <span className="erp_edit_delte_icon__size ">
         <BsPencilSquare />
       </span>
       <span className="erp_edit_delte_icon__size">
         <RiFileSearchFill />{" "}
       </span>
       <span className="erp_edit_delte_icon__size">
         <MdDelete />{" "}
       </span>
     </div>
   );
 };
 const statusApproval = () => {
   return (
     <div className="">
       <p className="erp_status_active_p_color">Approved</p>
     </div>
   );
 };

 const statusReject = () => {
   return (
     <div className="">
       <p className="erp_hrms_status_pending_p_color">Pending For Hr verification</p>
     </div>
   );
 };
 const statusPending = () => {
   return (
     <div className="">
       <p className="erp_hrms_status_pend_for_p_color">
         Pending for Approval
       </p>
     </div>
   );
 };
 const columns = useMemo(
   () => [
     {
       Header: "EMPLOYEE ",
       accessor: "col1",
     },
     {
       Header: "DATE",
       accessor: "col2",
     },

     {
       Header: "LEAVE APPLIED START DATE",
       accessor: "col3",
     },
     {
       Header: "END DATE",
       accessor: "col4",
     },
     {
       Header: "LEAVE TYPE",
       accessor: "col5",
     },
     {
       Header: "ACTION",
       accessor: "col6",
     },
     {
       Header: "STATUS",
       accessor: "col7",
     },
   ],
   []
 );

 const data = useMemo(
   () => [
     {
       col1: "John Wick[id-jefn34jdefn3]",
       col2: "02/03/22",
       col3: "02/03/22",
       col4: "12/03/22",
       col5: "casual Leave",
       col6: actionIcons(),
       col7: statusReject(),
     },
     {
       col1: "John Wick[id-jefn34jdefn3]",
       col2: "02/03/22",
       col3: "02/03/22",
       col4: "12/03/22",
       col5: "Sick Leave",
       col6: actionIcons(),
       col7: statusPending(),
     },
     {
       col1: "John Wick[id-jefn34jdefn3]",
       col2: "02/03/22",
       col3: "02/03/22",
       col4: "12/03/22",
       col5: "Sick Leave",
       col6: actionIcons(),
       col7: statusApproval(),
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
                    <h5 className="erp__h5_color ">Leave Application</h5>
                    <Link to={ROUTES.CREATELEAVEAPPLICATION}>
                      <Button
                        className=""
                        rounded={true}
                        appendIcon={<AiOutlinePlus />}
                      >
                        New Leave Application
                      </Button>
                    </Link>
                    {/* <Button rounded={true} appendIcon={<FiUpload />}>
                      Upload Via CSV
                    </Button> */}
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

export default Leaveapplicationlist