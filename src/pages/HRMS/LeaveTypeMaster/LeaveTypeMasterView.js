import { React, useMemo } from "react";
import './LeaveTypeMaster.scss'
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
        <div className="container mt-5 justify-content-center p-5 container_leavetypemaster">
          <div className="row justify-content-center">
            <div className="row pb-3 ps-0 pe-0  border-bottom ">
              <div className="col-xxl-8 col-xl-9 col-lg-12 col-md-12 col-12 mt-3 p-0 d-flex gap-2">
                <div>
                  <h4 className="leavetypemaster_view_heading mt-1">
                    Leave Type Master
                  </h4>
                </div>
                <div className=" m-0 p-0 d-flex  gap-2">
                  <Link to={ROUTES.LEAVETYPEMASTERCREATE}>
                    <Button
                    //  appendIcon={}
                    >
                      New Leave Type Master <AiOutlinePlus />
                    </Button>
                  </Link>
                  {/* </div>
                <div className="col-2 m-0 p-0"> */}
                  <Button
                  // appendIcon={}
                  >
                    Upload Via CSV <FiUpload />
                  </Button>
                </div>
              </div>
              <div className="d-flex justify-content-end col-xxl-4 col-xl-6 col-lg-6 col-md-7 col-12 mt-3 p-0">
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
      </Layout>
    </div>
  );
}

export default LeaveTypeMasterView