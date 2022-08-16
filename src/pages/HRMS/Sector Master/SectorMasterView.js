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
          Header: "ACTION",
          accessor: "action",
        },
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

        // {
        //   Header: "ACTION",
        //   accessor: "action",
        // },
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
        <div className="container mt-2 justify-content-center ">
          <div className="row justify-content-center">
            <div className="card shadow-sm border border-2">
              <div className="row p-2 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                  <div className="d-flex gap-2">
                    <h5 className="erp__h5_color ">Sector Master</h5>
                    <Link to={ROUTES.SECTORMASTERCREATE}>
                      <Button
                        className=""
                        rounded={true}
                        appendIcon={<AiOutlinePlus />}
                      >
                        New Sector Master
                      </Button>
                    </Link>
                    <Button rounded={true} appendIcon={<FiUpload />}>
                      Upload Via CSV
                    </Button>
                  </div>
                </div>
                <div className="  col-xl-4 col-lg-4 col-md-12 col-12">
                  <div className="d-flex justify-content-end  file__sector_master_991 ">
                    <Newcontact />
                  </div>
                </div>
              </div>

              {/* <div className="row pb-3 ps-0 pe-0 border-bottom ">
              <div className="col-xxl-9 col-xl-7 col-lg-10 col-md-12 col-12 mt-3 p-0 d-flex gap-2">
                <div>
                  <h4 className="sectormaster_view_heading mt-1">Sector Master</h4>
                </div>
                <div className=" m-0 p-0 d-flex  gap-2">
                  <Link to={ROUTES.SECTORMASTERCREATE}>
                    <Button
                   
                    >
                      New Sector Master <AiOutlinePlus />
                    </Button>
                  </Link>
                  
                  <Button
              
                  >
                    Upload Via CSV <FiUpload />
                  </Button>
                </div>
              </div>
              <div className="d-flex justify-content-end col-xxl-3 col-xl-5 col-lg-6 col-md-7 mt-3 p-0">
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

export default SectorMasterView