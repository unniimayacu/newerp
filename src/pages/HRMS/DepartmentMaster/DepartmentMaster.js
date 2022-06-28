import React from 'react'
import Layout from "Layout/Layout";

function DepartmentMaster() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_department">
          <div className="row mt-3">
            <h6 className="department_view_heading">Department</h6>
            <div className="row mt-4 justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="department_p_color">Department Code</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="department_sub_p_color">JK-2232242225</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="department_p_color">Name</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="department_sub_p_color">Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="department_p_color">Details</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="department_sub_p_color">
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
                    <p className="department_p_color">Employee ID</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="department_sub_p_color">JK-2232242225</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="department_p_color">Employee Name</p>
                  </div>
                </div>
                <div className="col-1">:</div>
                <div className="col-6">
                  <div className="">
                    <p className="department_sub_p_color">John Wick</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className=" d-flex">
                <div className="col-2">
                  <div className="">
                    <p className="department_p_color">Status</p>
                  </div>
                </div>
                <div className="col-1 d-flex justify-content-start">:</div>
                <div className="col-6 ms-0">
                  <div className="">
                    <p className="department_sub_active_p_color">Active</p>
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

export default DepartmentMaster