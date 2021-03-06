import Button from "components/button/Button";

import InputType from "components/Input type/InputType";

import Layout from "Layout/Layout";
import React from "react";
import { Link } from "react-router-dom";
import './EmployeeCategory.scss'
import {ROUTES} from 'routes'

function EmployeeCategoryCreate() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_empcategory">
          <div className="row mt-3">
            <h6 className="empcategory_view_heading">
              Create Employee Category
            </h6>
            <div className="row mt-5">
              <div className="col-4">
                <div>
                  <p className="empcategory_p_color">Category Code</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="empcategory_p_color">Category</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div className="">
                  <p className="empcategory_p_color">Status</p>
                  <div className="d-flex justify-content-start">
                    <label
                      htmlFor="active"
                      className="me-3 mt-1 d-flex  justify-content-start"
                    >
                      <p className="me-2 mt-3 designation_sub_p_color">
                        Active
                      </p>
                      <input type="radio" id="active" name="statusType" />
                    </label>
                    <label
                      htmlFor="inactive"
                      className="me-3 mt-1 d-flex justify-content-center text-center"
                    >
                      <p className="me-2 mt-3 designation_sub_p_color">
                        Inactive
                      </p>
                      <input type="radio" id="inactive" name="statusType" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <div className="">
                  <p className="empcategory_p_color">Fixed Salary</p>
                  <div className="d-flex justify-content-start">
                    <label
                      htmlFor="fixed-yes"
                      className="me-3 mt-1 d-flex  justify-content-start"
                    >
                      <p className="me-2  empcategory_sub_p_color">Yes</p>
                      <input
                        type="radio"
                        id="fixed-yes"
                        name="fixed-checkbox"
                      />
                    </label>
                    <label
                      htmlFor="fixed_no"
                      className="me-3 mt-1 d-flex justify-content-center text-end"
                    >
                      <p className="me-2  empcategory_sub_p_color">No</p>
                      <input type="radio" id="fixed_no" name="fixed-checkbox" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="">
                  <p className="empcategory_p_color">OT Applicable</p>
                  <div className="d-flex justify-content-start">
                    <label
                      htmlFor="yess"
                      className="me-3 mt-1 d-flex  justify-content-start"
                    >
                      <p className="me-2  empcategory_sub_p_color">Yes</p>
                      <input type="radio" id="yess" name="checkbox" />
                    </label>
                    <label
                      htmlFor="noo"
                      className="me-3 mt-1 d-flex justify-content-center text-end"
                    >
                      <p className="me-2  empcategory_sub_p_color">No</p>
                      <input type="radio" id="noo" name="checkbox" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.EMPLOYEECATEGORY}>
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

export default EmployeeCategoryCreate;
