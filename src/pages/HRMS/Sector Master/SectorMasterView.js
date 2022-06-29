import {React,useMemo} from 'react'
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";

import { FiUpload } from "react-icons/fi";
import DesignationData from "../../../components/ddatas/Hrms_Dummy_datas/HrmsdesignationTabledata";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import './SectorMaster.scss'
import {ROUTES} from 'routes'

function SectorMasterView() {
    const columns = useMemo(
      () => [
        {
          Header: "SECTOR NAME",
          accessor: "sectorname",
        },
        {
          Header: "SECTOR START PLACE",
          accessor: "sector_start",
        },
        {
          Header: "SECTOR END PLACE",
          accessor: "sector_end",
        },
        {
          Header: "EMPLOYEE CATEGORY",
          accessor: "category",
        },
        {
          Header: "RATE",
          accessor: "rate",
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
        <div className="container mt-5 justify-content-center p-5 container_sectormaster">
          <div className="row justify-content-center">
            <div className=" d-flex justify-content-evenly pb-3  border-bottom gap-4">
              <div className="col-6 m-0 p-0 d-flex gap-4">
                <div>
                  <h4 className="sectormaster_view_heading">Sector Master</h4>
                </div>
                <div className=" m-0 p-0 d-flex  gap-2">
                  <Link to={ROUTES.SECTORMASTERCREATE}>
                    <Button
                    //  appendIcon={}
                    >
                      New Sector Master <AiOutlinePlus />
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
                Tbody_style={true}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default SectorMasterView