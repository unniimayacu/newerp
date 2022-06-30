import TextArea from 'components/Text Area/TextArea';
import React from 'react'
import Button from "components/button/Button";

import InputType from "components/Input type/InputType";
import { Link } from "react-router-dom";
import {ROUTES} from '../../../routes/index'

import Layout from "Layout/Layout";
import InputDropdown from 'components/Input dropdown/InputDropdown';
import "./DepartmentMaster.scss";

function DepartmentMasterCreate() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_department">
          <div className="row mt-3">
            <h6 className="department_view_heading">Create Department</h6>
            <div className="row mt-5">
              <div className="col-6">
                <div>
                  <p className="department_p_color">Department Code</p>
                  <InputType />
                </div>
                <div>
                  <p className="department_p_color mt-4">Name</p>
                  <InputType />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <p className="department_p_color">Details</p>
                  <TextArea />
                </div>
                <div className="d-flex justify-content-start">
                  <p className="department_p_color mt-3 pt-1">Status :</p>
                  <label
                    htmlFor="active"
                    className="me-3 ms-2 mt-1 d-flex  justify-content-start"
                  >
                    <p className="me-2 mt-3 department_sub_p_color">Active</p>
                    <input type="radio" id="active" name="statusType" />
                  </label>
                  <label
                    htmlFor="inactive"
                    className="me-3 ms-2 mt-1 d-flex justify-content-center text-center"
                  >
                    <p className="me-2 mt-3 department_sub_p_color">Inactive</p>
                    <input type="radio" id="inactive" name="statusType" />
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <p className="department_sec_heading_color">Department Head</p>
              <div className="col-6">
                <div className="">
                  <p className="department_p_color">Employeee ID</p>
                  <div className="d-flex justify-content-start">
                    <InputDropdown />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  <p className="department_p_color">Name</p>
                  <div className="d-flex justify-content-start">
                    <InputDropdown />
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.DEPARTMENTMASTER}>
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

export default DepartmentMasterCreate