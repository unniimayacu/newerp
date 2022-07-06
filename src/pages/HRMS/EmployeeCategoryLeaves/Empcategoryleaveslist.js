import React from 'react'
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
function Empcategoryleaveslist() {

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
        <div className="container mt-2 justify-content-center  ">
          <div className="row justify-content-center ">
            <div className="card shadow-sm border border-2">
              <div className="row p-2 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                  <div className="d-flex gap-2">
                    <h5 className="erp__h5_color ">Employee</h5>
                    <Link to={ROUTES.CREATEEMPLOYEE}>
                      <Button
                        className=""
                        rounded={true}
                        appendIcon={<AiOutlinePlus />}
                      >
                        New Employee
                      </Button>
                    </Link>
                    <Button rounded={true} appendIcon={<FiUpload />}>
                      Upload Via CSV
                    </Button>
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

export default Empcategoryleaveslist