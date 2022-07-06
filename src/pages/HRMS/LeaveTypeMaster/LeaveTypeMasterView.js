import { React, useMemo } from "react";
import "./LeaveTypeMaster.scss";
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";

import { FiUpload } from "react-icons/fi";
import DesignationData from "../../../components/ddatas/Hrms_Dummy_datas/HrmsdesignationTabledata";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";

function LeaveTypeMasterView() {
  const columns = useMemo(
    () => [
      {
        Header: "LEAVE TYPE",
        accessor: "leave",
      },
      {
        Header: "LEAVE CATEGORY",
        accessor: "leavecategory",
      },
      {
        Header: "ELIGIBLE DAYS",
        accessor: "normalothours",
      },
      {
        Header: "FOLLOW LEAVE APPROVAL SYSTEM",
        accessor: "bonusotapp",
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
          <div className="row justify-content-center">
            <div className="card shadow-sm border border-2">
              <div className="row p-2 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                  <div className="d-flex gap-1">
                    <h5 className="erp__h5_color "> Leave Type Master</h5>
                    <Link to={ROUTES.LEAVETYPEMASTERCREATE}>
                      <Button
                        className=""
                        rounded={true}
                        appendIcon={<AiOutlinePlus />}
                      >
                        New Leave Type Master
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

              {/* <div className="row pb-3 ps-0 pe-0  border-bottom ">
              <div className="col-xxl-8 col-xl-9 col-lg-12 col-md-12 col-12 mt-3 p-0 d-flex gap-2">
                <div>
                  <h4 className="leavetypemaster_view_heading mt-1">
                    Leave Type Master
                  </h4>
                </div>
                <div className=" m-0 p-0 d-flex  gap-2">
                  <Link to={ROUTES.LEAVETYPEMASTERCREATE}>
                    <Button>
                      New Leave Type Master <AiOutlinePlus />
                    </Button>
                  </Link>

                  <Button>
                    Upload Via CSV <FiUpload />
                  </Button>
                </div>
              </div>
              <div className="d-flex justify-content-end col-xxl-4 col-xl-6 col-lg-6 col-md-7 col-12 mt-3 p-0">
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
    </div>
  );
}

export default LeaveTypeMasterView;
