import { React, useMemo } from "react";
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";

import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function Empstatuschangeapproval() {
  const actionIcons = () => {
    return (
      <div className="d-flex gap-3 align-items-center justify-content-center ">
        <Link to={ROUTES.EMPSTATUSCHANGEAPPROVE}>
        <span className="erp_edit_delte_icon__size  ">
          <BsPencilSquare  />
        </span>
        </Link>
        <span className="erp_edit_delte_icon__size ">
          <RiFileSearchFill />{" "}
        </span>
        <span className="erp_edit_delte_icon__size ">
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

    const statusPending = () => {
      return (
        <div className="">
          <p className="erp_hrms_empstatus_pending__p_color">Pending</p>
        </div>
      );
    };

  const columns = useMemo(
    () => [
      {
        Header: "ACTION",
        accessor: "Action",
      },
      {
        Header: " EMPLOYEE",
        accessor: "Employee",
      },
      {
        Header: "EMPLOYEE NAME",
        accessor: "Employeename",
      },
      {
        Header: "DATE",
        accessor: "Date",
      },
      {
        Header: "WORKING STATUS",
        accessor: "Workingstatus",
      },
      {
        Header: "LAST WORKING DATE",
        accessor: "Lastwrkingdate",
      },
      // {
      //   Header: "ACTION",
      //   accessor: "Action",
      // },
      {
        Header: "STATUS",
        accessor: "Status",
      },
    ],
    []
  );
  //    const data = useMemo(() => DesignationData(), []);
  const data = useMemo(
    () => [
      {
        Action: actionIcons(),
        Employee: "worker",
        Employeename: "John",
        Date: "12/07/2022",
        Workingstatus: "Resignation",
        Lastwrkingdate: "21/08/2022",
        // Action: actionIcons(),
        Status: statusApproval(),
      },
      {
        Action: actionIcons(),
        Employee: "Manager",
        Employeename: "Richard James",
        Date: "02/07/2022",
        Workingstatus: "Termination",
        Lastwrkingdate: "25/06/2022",
        // Action: actionIcons(),
        Status: statusPending(),
      },
      {
        Action: actionIcons(),
        Employee: "Driver",
        Employeename: "Williams",
        Date: "10/04/2022",
        Workingstatus: "Working",
        Lastwrkingdate: "21/07/2022",
        // Action: actionIcons(),
        Status: statusPending(),
      },
    ],
    []
  );
  return (
    <>
      <Layout>
        <div className="container mt-2 justify-content-center ">
          <div className="row justify-content-center">
            <div className="card shadow-sm border border-2">
              <div className="row p-2 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                  <div className="d-flex gap-2">
                    <h5 className="erp__h5_color ">Employee Status Change Approval</h5>
                    
                  </div>
                </div>
                <div className="  col-xl-4 col-lg-4 col-md-3 col-12">
                  <div className="d-flex justify-content-end">
                    <Newcontact />
                  </div>
                </div>
              </div>

              <div className="row mt-5 justify-content-center mx-3">
                {/* <div className="card shadow-sm"> */}
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
                {/* </div> */}
              </div>
              <div className="py-3"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Empstatuschangeapproval;
