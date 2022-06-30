import Button from "components/button/Button";
import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";
import TextArea from "components/Text Area/TextArea";
import Layout from "Layout/Layout";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Designations.scss";
import {ROUTES} from 'routes'

function DesignationCreate() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_designation">
          <div className="row mt-3">
            <h6 className="designation_view_heading">Create Designation</h6>
            <div className="row mt-5">
              <div className="col-4">
                <div>
                  <p className="designation_p_color">Designation Code</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="designation_p_color">Name</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="designation_p_color">Air Fare Frequency</p>
                  <div className=" d-flex justify-content-between">
                    <InputDropdown />
                    <BsFillPlusCircleFill
                      color="#1a90b4"
                      fontSize={30}
                      className="ms-3 mt-1"
                    />
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
                  <p className="designation_p_color">Details</p>
                  <TextArea />
                </div>
              </div>
              <div className="col-4">
                <div className="">
                  <p className="designation_p_color">Air Ticket</p>
                  <div className="d-flex justify-content-start">
                    <label
                      htmlFor="normalclass"
                      className="me-3 mt-3 d-flex  justify-content-start"
                    >
                      <p className="me-2 mt-3 designation_sub_p_color">
                        Normal Class
                      </p>
                      <input type="radio" id="normalclass" name="classType" />
                    </label>
                    <label
                      htmlFor="businessclass"
                      className="me-3 mt-3 d-flex justify-content-center text-end"
                    >
                      <p className="me-2 mt-3 designation_sub_p_color">
                        Business Class
                      </p>
                      <input type="radio" id="businessclass" name="classType" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="">
                  <p className="designation_p_color">Status</p>
                  <div className="d-flex justify-content-start">
                    <label
                      htmlFor="active"
                      className="me-3 mt-3 d-flex  justify-content-start"
                    >
                      <p className="me-2 mt-3 designation_sub_p_color">
                        Active
                      </p>
                      <input type="radio" id="active" name="statusType" />
                    </label>
                    <label
                      htmlFor="inactive"
                      className="me-3 mt-3 d-flex justify-content-center text-center"
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
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.DESIGNATION}>
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

export default DesignationCreate;
