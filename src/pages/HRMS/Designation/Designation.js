import Layout from 'Layout/Layout';
import React from 'react'
import "./Designations.scss";

function Designation() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_designation">
          <div className="row mt-3">
            <h6 className="designation_view_heading">Designation</h6>
            <div className="row mt-4 justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="designation_p_color">Designation Code</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="designation_sub_p_color">JK-2232242225</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="designation_p_color">Name</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="designation_sub_p_color">Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="designation_p_color">Air Fare Frequency</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="designation_sub_p_color">Year 1 Ticket</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="designation_p_color">Air Ticket Class</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="designation_sub_p_color">Normal Class</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="designation_p_color">Details</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="designation_sub_p_color">
                      lorem ispum is dummy text regards on the purpose
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="designation_p_color">Status</p>
                  </div>
                </div>
                <div className="col-1 d-flex justify-content-start">:</div>
                <div className="col-6 ms-0">
                  <div className="">
                    <p className="designation_sub_active_p_color">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Designation


