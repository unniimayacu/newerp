import Layout from 'Layout/Layout'
import {React,useMemo} from 'react'
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";

import { FiUpload } from "react-icons/fi";
import DesignationData from "../../../components/ddatas/Hrms_Dummy_datas/HrmsdesignationTabledata";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";
import "./CategoryWiseWeekendMaster.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";


function CategoryWiseWeekendMasterView() {
      const columns = useMemo(
        () => [
          {
            Header: "EMPLOYEE CATEGORY",
            accessor: "category",
          },
          {
            Header: "WEEKENDS",
            accessor: "weekend",
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
    <div>
      <Layout>
        <div className="container mt-3 justify-content-center ">
          <div className="row p-0 justify-content-center">
            <div className="card shadow-sm rounded border border-2">
              <div className="row p-1 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-12 col-12 py-2 p-0">
                  <div className="d-flex gap-1">
                    <h5 className="erp__h5_color erp-lg__h5_size erp-md__h5_Size ">
                      {" "}
                      Category Wise Weekend Master
                    </h5>
                    <Link to={ROUTES.CATEGORYWISEWEEKENDMASTERCREATE}>
                      <Button
                        className=""
                        rounded={true}
                        appendIcon={<AiOutlinePlus />}
                      >
                        New Category Wise Weekend
                      </Button>
                    </Link>
                    <Button rounded={true} appendIcon={<FiUpload />}>
                      Upload Via CSV
                    </Button>
                  </div>
                </div>
                <div className="  col-xl-4 col-lg-4 col-md-12 col-12">
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
    </div>
  );
}

export default CategoryWiseWeekendMasterView