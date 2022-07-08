import React from "react";
import Layout from "Layout/Layout";
import InputType from "components/Input type/InputType";
import { DatePicker } from "react-widgets/cjs";
import InputDropdown from "components/Input dropdown/InputDropdown";
import TextArea from "components/Text Area/TextArea";
import Button from "components/button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/index";
function Createleaveapplication() {
  return (
    <>
      <Layout>
        <div className="container mt-2 justify-content-center  ">
          <div className="row justify-content-center ">
            <div className="card shadow-sm border border-2">
              <h5 className="erp__h5_color mt-2">Leave Application</h5>
              <div className="row py-3">
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <div>
                    <label>Employee</label>
                    <InputType />
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>Date</label>
                  <DatePicker />
                </div>
              </div>
              <div className="row py-1">
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>Leave Applied Start Date</label>
                  <DatePicker />
                </div>
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>Session</label>
                  <InputDropdown />
                </div>
              </div>
              <div className="row py-1">
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>End Date</label>
                  <DatePicker />
                </div>
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>Session</label>
                  <InputDropdown />
                </div>
              </div>
              <div className="row py-1">
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>Duty Joining Date</label>
                  <DatePicker />
                </div>
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>No of Days</label>
                  <InputType />
                </div>
              </div>
              <div className="row py-0">
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>Leave Type</label>
                  <DatePicker />
                </div>
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>Remarks</label>
                  <TextArea />
                </div>
              </div>
              <div className="row py-1">
                <div className="col-xl-5 col-lg-5 col-12 ">
                  <label>Status</label>
                  <InputDropdown />
                </div>
              </div>
              <div className="row py-3">
                <div className=" col-12  d-flex justify-content-center">
                  <Link to={ROUTES.LEAVEAPPLICATION}>
                    <Button rounded={true}>Create</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Createleaveapplication;
