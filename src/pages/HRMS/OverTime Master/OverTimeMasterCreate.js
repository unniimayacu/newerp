import React from 'react'
import Button from "components/button/Button";
import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";

import Layout from "Layout/Layout";

import { Link } from "react-router-dom";
import "./OverTimeMaster.scss";

function OverTimeMasterCreate() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_otmaster">
          <div className="row mt-3">
            <h6 className="otmaster_view_heading">
              Create OverTime Rate Master
            </h6>
            <div className="row mt-5">
              <div className="col-4">
                <div>
                  <p className="otmaster_p_color">Employee Category</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="otmaster_p_color">Normal OT Hours</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="otmaster_p_color">Bonus OT Applicable</p>
                  <div className=" d-flex justify-content-start">
                    <label
                      htmlFor="s-yes"
                      className="me-3 mt-1 d-flex  justify-content-start"
                    >
                      <p className="me-2 mt-3 empcategory_sub_p_color">Yes</p>
                      <input type="checkbox" id="s-yes" name="checkbox" />
                    </label>
                    <label
                      htmlFor="s_no"
                      className="me-3 mt-1 d-flex justify-content-center "
                    >
                      <p className="me-2 mt-3 empcategory_sub_p_colorr">No</p>
                      <input type="checkbox" id="s_no" name="checkbox" />
                    </label>
                  </div>
                </div>
              </div>
              {/* <div className="col-3">
              <div className="mt-4 pt-4">
                <BsFillPlusCircleFill color="blue" fontSize={30} />
              </div>
            </div> */}
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <div>
                  <p className="otmaster_p_color">Normal OT Rate</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div className="">
                  <p className="otmaster_p_color">Bonus OT Rate</p>
                  <div className="">
                    <InputType />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="">
                  <p className="otmaster_p_color">Weekend Holiday OT Rate</p>
                  <div className="">
                    <InputType />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <div>
                  <p className="otmaster_p_color">Public Holiday OT Rate</p>
                  <div className="">
                    <InputType />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to="/overtimemaster">
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

export default OverTimeMasterCreate