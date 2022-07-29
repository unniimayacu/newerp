import React from 'react'
import Button from "components/button/Button";
import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";

import Layout from "Layout/Layout";

import { Link } from "react-router-dom";
import './SectorMaster.scss'
import {ROUTES} from "routes"

function SectorMasterCreate() {
  return (
    <div>
      <Layout>
        <div className="container  container_sectormaster">
          <div className="row mt-2">
            <h6 className="sectormaster_view_heading">Create Sector Master</h6>
            <div className="row py-2">
              <div className="col-6">
                <div>
                  <p className="sectormaster_p_color">Sector name</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <p className="sectormaster_p_color">Sector Start Place</p>
                  <InputType />
                </div>
              </div>

              {/* <div className="col-3">
              <div className="mt-4 pt-4">
                <BsFillPlusCircleFill color="blue" fontSize={30} />
              </div>
            </div> */}
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <div>
                  <p className="sectormaster_p_color">Sector End Place</p>
                  <InputType />
                </div>
              </div>

              <div className="col-6">
                <div className="">
                  <p className="sectormaster_p_color_blue">Air Fare List</p>
                  <div className="">
                    <div className="ms-2 sector_create_ul_style">
                      {/* <li className="  "> */}
                      <div className="row border text-center ">
                        <div className="col-8 mt-2">
                          <p className="sectormaster_p_color">
                            {" "}
                            Employee category
                          </p>
                        </div>
                        <div className="col-4 mt-2">
                          <p className="sectormaster_p_color">Rate</p>
                        </div>
                      </div>
                      {/* </li> */}
                      {/* <li className=" "> */}
                      <div className="row border">
                        <div className="col-8 ms-0 me-0 ps-0 pe-0 ">
                          <InputDropdown />
                          {/* <select
                            className="form-select border-0 mt-1   text-center"
                            aria-label="Default select example"
                          >
                            <option selected>worker</option>
                            <option value="1">worker</option>
                            <option value="2">driver</option>
                            <option value="3">Manager</option>
                          </select> */}
                        </div>
                        {/* <div className='col-2'></div> */}
                        <div className="col-4 me-0 pe-0 ms-0 ps-0">
                          {/* <input
                            type="text"
                            className="pt-2 pb- sector_create_rate_input"
                            // placeholder='Enter....'
                          />{" "} */}
                          <InputType className='text-center'/>
                        </div>
                      </div>
                      {/* </li> */}
                      {/* <div className="row border">
                        <div className="col-12 p-4">
                          <p> </p>
                          <p> </p>
                          <p> </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.SECTORMASTER}>
                  <Button halfrounded={true}>Create</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default SectorMasterCreate