import React  from 'react'
import "./employeemaster.scss"
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";
import Layout from "Layout/Layout";
import { useMemo } from "react";
import EmployeelistData from "components/ddatas/Hrms_Dummy_datas/Employeelistdata";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/index";

function Employeelist() {
    const columns = useMemo(
      () => [
        {
          Header: "EMPLOYEE ID",
          accessor: "col1",
        },
        {
          Header: "NAME",
          accessor: "col2",
        },
        {
          Header: "PASSPORT NUMBER",
          accessor: "col3",
        },
        {
          Header: "PASSPORT EXPIRY DATE",
          accessor: "col4",
        },
        {
          Header: "ACTION",
          accessor: "col5",
        },
        {
          Header: "STATUS",
          accessor: "col6",
        },
      ],
      []
    );
      const data = useMemo(() => EmployeelistData(), []);
  return (
    <>
      <Layout>
        <div className="container mt-5 justify-content-center p-5 container_designation">
          <div className="row justify-content-center">
            <div className=" d-flex justify-content-evenly pb-3  border-bottom gap-4">
              <div className="col-6 m-0 p-0 d-flex gap-4">
                <div>
                  <h4 className="designation_view_heading">Employee</h4>
                </div>
                <div className=" m-0 p-0 d-flex  gap-2">
                  <Link to={ROUTES.CREATEEMPLOYEE}>
                    <Button appendIcon={<AiOutlinePlus />}>New Employee</Button>
                  </Link>
                  {/* </div>
                <div className="col-2 m-0 p-0"> */}
                  <Button appendIcon={<FiUpload />}>Upload Via CSV</Button>
                </div>
              </div>
              <div className="d-flex justify-content-end col-xl-6 col-lg-6 m-0 p-0">
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
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Employeelist