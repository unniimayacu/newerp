import { React, useMemo } from "react";
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";

import { FiUpload } from "react-icons/fi";
import DesignationData from "../../../components/ddatas/Hrms_Dummy_datas/HrmsdesignationTabledata";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";
import './Designations.scss'

function DesignationView() {
  const columns = useMemo(
    () => [
      {
        Header: "DESIGNATION CODE",
        accessor: "dcode",
      },
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "AIR FAIR FREQUENCY",
        accessor: "aff",
      },
      {
        Header: "AIR TICKET CLASS",
        accessor: "atc",
      },
      {
        Header: "DETAILS",
        accessor: "details",
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
      <div className="container mt-5 justify-content-center ">
        <div className="row justify-content-center">
          <div className=" d-flex justify-content-evenly pb-3  border-bottom">
            <div className="col-6 m-0 p-0 d-flex gap-4">
              <div>
                <h4 className="designation_view_heading">Designation</h4>
              </div>
              <div className=" m-0 p-0 d-flex  gap-2">
                <Button
                //  appendIcon={}
                >
                  New Designation <AiOutlinePlus />
                </Button>
                {/* </div>
                <div className="col-2 m-0 p-0"> */}
                <Button
                // appendIcon={}
                >
                  Upload Via CSV <FiUpload />
                </Button>
              </div>
            </div>
            <div className="d-flex justify-content-end col-6 m-0 p-0">
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
  );
}

export default DesignationView;