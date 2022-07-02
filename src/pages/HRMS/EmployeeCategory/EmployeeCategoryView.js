import { React, useMemo } from "react";
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";

import { FiUpload } from "react-icons/fi";
import DesignationData from "../../../components/ddatas/Hrms_Dummy_datas/HrmsdesignationTabledata";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";
import './EmployeeCategory.scss'
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import {ROUTES} from 'routes'

function EmployeeCategoryView() {
  const columns = useMemo(
    () => [
      {
        Header: "CATEGORY CODE",
        accessor: "dcode",
      },
      {
        Header: "CATEGORY",
        accessor: "category",
      },
 
      {
        Header: "ACTION",
        accessor: "action",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
    ],
    []
  );
  const data = useMemo(() => DesignationData(), []);
  return (
    <>
      <Layout>
        <div className="container mt-3 justify-content-center ">
          <div className="row p-0 justify-content-center">
            <div className="card shadow-sm border border-2">
              <div className="row p-1 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 py-2 p-0">
                  <div className="d-flex gap-1">
                    <h5 className="erp__h5_color erp-lg__h5_size erp-md__h5_Size "> Employee Category</h5>
                    <Link to={ROUTES.EMPLOYEECATEGORYCREATE}>
                      <Button
                        className=""
                        rounded={true}
                        appendIcon={<AiOutlinePlus />}
                      >
                        New Emp Category
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
              {/* <div className="row pb-3 pe-0 ps-0 border-bottom ">
              <div className="col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-12 mt-3 p-0 d-flex gap-2">
                <div>
                  <h4 className="designation_view_heading mt-1">
                    Employee Category
                  </h4>
                </div>
                <div className=" m-0 p-0 d-flex  gap-2">
                  <Link to={ROUTES.EMPLOYEECATEGORYCREATE}>
                    <Button
                   
                    >
                      New Emp Category <AiOutlinePlus />
                    </Button>
                  </Link>
                  
                  <Button
                
                  >
                    Upload Via CSV <FiUpload />
                  </Button>
                </div>
              </div>
              <div className="d-flex justify-content-end col-xxl-4 col-xl-6 col-lg-6 col-md-7 mt-3 p-0">
                <Newcontact />
              </div>
            </div> */}

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

export default EmployeeCategoryView;
