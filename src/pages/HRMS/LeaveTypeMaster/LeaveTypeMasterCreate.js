import React from 'react'
import "./LeaveTypeMaster.scss";
import Button from "components/button/Button";
// import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";

import Layout from "Layout/Layout";

import { Link } from "react-router-dom";
import { ROUTES } from "routes";

function LeaveTypeMasterCreate() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_leavetypemaster">
          <div className="row mt-3">
            <h6 className="leavetypemaster_view_heading">Leave Type Master</h6>
            <div className="row mt-5">
              <div className="col-4">
                <div>
                  <p className="leavetypemaster_p_color">Leave Type</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="leavetypemaster_p_color">Leave Category</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="leavetypemaster_p_color">Eligible Days</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 mt-3">
                <div>
                  <p className="leavetypemaster_p_color">
                    Follow Leave Approval system
                  </p>
                  <div className=" d-flex justify-content-start">
                    <label
                      htmlFor="s-yes"
                      className="me-3 mt-1 d-flex  justify-content-start"
                    >
                      <p className="me-2 leavetypemaster_sub_p_color">Yes</p>
                      <input type="radio" id="s-yes" name="checkbox" />
                    </label>
                    <label
                      htmlFor="s_no"
                      className="me-3 mt-1 d-flex justify-content-center "
                    >
                      <p className="me-2 leavetypemaster_sub_p_colorr">No</p>
                      <input
                        type="radio"
                        id="s_no"
                        name="checkbox"
                        className="radio_as_checkbox"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.LEAVETYPEMASTER}>
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

export default LeaveTypeMasterCreate