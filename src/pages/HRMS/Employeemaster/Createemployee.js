import React from "react";
import "./employeemaster.scss";
import Button from "components/button/Button";
import InputType from "components/Input type/InputType";
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import DatePicker from "components/Datepicker/DatePicker";
import { IoIosArrowForward } from "react-icons/io";
import Profileupload from "components/profilepicture/Profileupload";
import { ROUTES } from "routes";

function Createemployee() {
  return (
    <>
      <Layout>
        <div className="container mt-3 container_designation">
          <div className="row ">
            <div className="row px-2">
              <div className="col-xl-10 col-lg-10 col-12">
                <div className="row px-3 py-3">
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="p-0">
                      <p className="">Employee Name</p>
                      <InputType />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="">
                      <p className="">Employee ID/Tally No</p>
                      <InputType />
                    </div>
                  </div>
                </div>
                <div className="row py-3 px-3">
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div>
                      <p className="">Passport Number</p>
                      <InputType />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="">
                      <p className="">Passport Expiry Date</p>
                      <DatePicker />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-12 ">
                <div className="mt-3 ">
                  <Profileupload  titlename="Upload your photo" />
                </div>
              </div>
            </div>

            <div className="row py-3 px-3">
              <div className="d-flex">
                <h6 className=" ">Status : </h6>
                <div className="row ">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div className="ms-3 d-flex">
                      <label class="form-check-label" for="inlineRadio2">
                        Active
                      </label>
                      <div class="ms-1 form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div className="ms-3 d-flex">
                      <label class="form-check-label" for="inlineRadio2">
                        Inactive
                      </label>
                      <div class="ms-1 form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-5 px-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.EMPLOYEEDETAILS} >
                <Button
                  halfrounded={true}
                  className="emp_icon__font_size"
                  appendIcon={<IoIosArrowForward />}
                >
                  Next
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Createemployee;

//IoIosArrowForward