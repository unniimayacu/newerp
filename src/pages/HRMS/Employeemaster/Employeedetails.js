import React from "react";
import "./employeemaster.scss";
import Layout from "Layout/Layout";
import { CgProfile } from "react-icons/cg";
import { Tabs, Tab } from "react-bootstrap";
import InputType from "components/Input type/InputType";
import PhoneInputt from "components/Phone input/PhoneInput";
import Button from "components/button/Button";
import TextArea from "components/Text Area/TextArea";
import { PlusCircleFilled } from "@ant-design/icons";
import InputDropdown from "components/Input dropdown/InputDropdown";
import DatePicker from "components/Datepicker/DatePicker";
import FileUpload from "components/File uploader/FileUpload";


function Employeedetails() {
  return (
    <>
      <Layout>
        <div className="container mt-2 ">
          <div className="row ">
            <div className="container_designation">
              <div className="row ">
                <div className="col-xl-2 col-lg-2 col-12">
                  <div className="icon_font_size  ">
                    <CgProfile />
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-12">
                  <div className="row p-0">
                    <div className="col-xl-6 col-lg-6 col-12">
                      <div className="d-flex">
                        <h6 className="  ">Employee ID/Tally No : </h6>
                        <div className=" ">
                          <p className="ms-1"> RT -1001</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                      <div className="d-flex">
                        <h6 className="  ">Employee Name : </h6>
                        <div className=" ">
                          <p className="ms-1"> John Wick</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row p-0">
                    <div className="col-xl-6 col-lg-6 col-12">
                      <div className="d-flex">
                        <h6 className="  ">Passport Number: </h6>
                        <div className=" ">
                          <p className="ms-1"> PA-3327839277</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                      <div className="d-flex">
                        <h6 className="  ">Passport Expiry Date : </h6>
                        <div className=" ">
                          <p className="ms-1"> 02/03/2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container_designation">
          <div className="row">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 "
            >
              <Tab
                eventKey="Personal"
                title="Personal Info"
                className="active__tab"
              >
                <div className="row mt-5 mx-4 py-5">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <p>Gender</p>

                    <div className="row ">
                      <div className="col-xl-3 col-lg-3 col-12">
                        <div className=" d-flex">
                          <label class="form-check-label " for="inlineRadio2">
                            Male
                          </label>
                          <div class=" form-check form-check-inline ms-1">
                            <input
                              class="form-check-input "
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className=" d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            Female
                          </label>
                          <div class=" form-check form-check-inline">
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
                        <div className=" d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            Others
                          </label>
                          <div class=" form-check form-check-inline">
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
                  <div className="col-xl-4 col-lg-4 col-12">
                    <p>Marital Status</p>
                    <InputType />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <p>Mobile Number</p>
                    <PhoneInputt />
                  </div>
                </div>

                <div className="row py-5">
                  <div className="col-xl-12 col-lg-12 col-12 d-flex justify-content-center">
                    <div className="d-flex">
                      <Button className="px-4" rounded={true}>
                        Save
                      </Button>
                      <div className="ms-4 ">
                        <Button
                          className="px-4"
                          btnType="cancel"
                          rounded={true}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Contact"
                title="Contact Info"
                className="active__tab"
              >
                <div className="row mx-4">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div>
                      <label>Emergency Contact Person(local)</label>
                      <InputType />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div>
                      <label>ECP (Local)Mobile 1</label>
                      <PhoneInputt />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div>
                      <label>ECP (Local)Mobile 2</label>
                      <PhoneInputt />
                    </div>
                  </div>
                </div>
                <div className="row mx-4 py-4">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div>
                      <label>ECP (Home Country) </label>
                      <InputType />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div>
                      <label>ECP (Home Country)Mobile1</label>
                      <PhoneInputt />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div>
                      <label>ECP (Home Country)Mobile 2</label>
                      <PhoneInputt />
                    </div>
                  </div>
                </div>
                <div className="row mx-4">
                  <div className="col-xl-7 col-lg-7 col-12">
                    <label>Home Country Address</label>
                    <TextArea />
                  </div>
                </div>
                <div className="row py-5">
                  <div className="col-xl-12 col-lg-12 col-12 d-flex justify-content-center">
                    <div className="d-flex">
                      <Button className="px-4" rounded={true}>
                        Save
                      </Button>
                      <div className="ms-4 ">
                        <Button
                          className="px-4"
                          btnType="cancel"
                          rounded={true}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Official Info"
                title="Official Info"
                className="active__tab"
              >
                <div className="row py-4 mt-5 mx-4">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div>
                      <label>Official Email ID </label>
                      <InputType />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Employee Grade</label>
                    <div className="d-flex">
                      <InputType />
                      <div className="">
                        <PlusCircleFilled className="ms-3 product_plusicon__size" />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Designation </label>
                    <div className="d-flex">
                      <InputType />
                      <div className="">
                        <PlusCircleFilled className="ms-3 product_plusicon__size" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-4">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Deparment</label>
                    <div className="d-flex">
                      <InputDropdown />
                      <div className="">
                        <PlusCircleFilled className="ms-3 product_plusicon__size" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-5">
                  <div className="col-xl-12 col-lg-12 col-12 d-flex justify-content-center">
                    <div className="d-flex">
                      <Button className="px-4" rounded={true}>
                        Save
                      </Button>
                      <div className="ms-4 ">
                        <Button
                          className="px-4"
                          btnType="cancel"
                          rounded={true}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Emp Benefits"
                title="Emp Benefits"
                className="active__tab"
              >
                <div className="row mx-1">
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Family Status</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            Yes
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
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
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
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Family Visa</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio3">
                            Yes
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio3"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Number of dependents</label>
                    <div className="d-flex">
                      <InputType />
                      <div className="mx-4">
                        <Button
                          className="px-4"
                          btnType="cancel"
                          rounded={true}
                        >
                          More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mx-1 py-3">
                  <h5 className="emp__benefits_bgcolor">Fringe Benefits</h5>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Health Insurance</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio3">
                            Yes
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio3"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Worker compensation</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio3">
                            Yes
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio3"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Retirement Plans</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio3">
                            Yes
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio3"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Medical Leave</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio3">
                            Yes
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio3"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mx-1  py-3">
                  <h5 className="emp__benefits_bgcolor">
                    Less Common Fringe Benefits
                  </h5>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Paid Vacation</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio3">
                            Yes
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio3"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Meal SubsidiZation</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio3">
                            Yes
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio3"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <label>Commuter Benefits</label>
                    <div className="row py-1">
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio3">
                            Yes
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio3"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            No
                          </label>
                          <div class="ms-1 form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadiooptions1"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-1 py-5">
                  <div className="col-xl-12 col-lg-12 col-12 d-flex justify-content-center">
                    <div className="d-flex">
                      <Button className="px-4" rounded={true}>
                        Save
                      </Button>
                      <div className="ms-4 ">
                        <Button
                          className="px-4"
                          btnType="cancel"
                          rounded={true}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Flight Info"
                title="Flight Info"
                className="active__tab"
              >
                <div className="row py-4 mt-4 mx-1">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div>
                      <label>Flight Charges</label>
                      <InputDropdown />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Airfair Ticket Frequency </label>
                    <div className="d-flex">
                      <InputDropdown />
                      <div className="">
                        <PlusCircleFilled className="ms-3 product_plusicon__size" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Airfair Ticket Class </label>

                    <div className="row py-1">
                      <div className="col-xl-6 col-lg-6 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            Normal Class
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
                      <div className="col-xl-6 col-lg-6 col-12">
                        <div className="ms-1 d-flex">
                          <label class="form-check-label" for="inlineRadio2">
                            Business Class
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
                <div className="row py-2 mx-1">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Flight Charges</label>
                    <InputDropdown />
                  </div>
                </div>
                <div className="row py-5">
                  <div className="col-xl-12 col-lg-12 col-12 d-flex justify-content-center">
                    <div className="d-flex">
                      <Button className="px-4" rounded={true}>
                        Save
                      </Button>
                      <div className="ms-4 ">
                        <Button
                          className="px-4"
                          btnType="cancel"
                          rounded={true}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Document Info"
                title="Document Info"
                className="active__tab"
              >
                <div className="row mx-1">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Visa Number</label>
                    <InputType />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Visa Type</label>
                    <InputDropdown />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Expiry Date</label>
                    <DatePicker />
                  </div>
                </div>
                <div className="row py-3 mx-1">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Upload Visa</label>
                    <div className="d-flex">
                      <InputType />
                      <div className="ms-2">
                        <Button rounded={true}>Browse</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3 mx-1">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Work Permit Number</label>
                    <InputType />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Expiry Date</label>
                    <DatePicker />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Upload Work Permit</label>
                    <div className="d-flex">
                      <InputType />
                      <div className="ms-2">
                        <Button rounded={true}>Browse</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-1 py-3">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Emirates ID</label>
                    <InputType />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Expiry Date</label>
                    <DatePicker />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Upload Emirates ID</label>
                    <div className="d-flex">
                      <InputType />
                      <div className="ms-2">
                        <Button rounded={true}>Browse</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3 mx-1">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Passport Number</label>
                    <InputType />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Expiry Date</label>
                    <DatePicker />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Upload Passport</label>
                    <div className="d-flex">
                      <InputType />
                      <div className="ms-2">
                        <Button rounded={true}>Browse</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3 mx-1">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Insurance Number</label>
                    <InputType />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Expiry Date</label>
                    <DatePicker />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <label>Upload Insurance</label>
                    <div className="d-flex">
                      <InputType />
                      <div className="ms-2">
                        <Button rounded={true}>Browse</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3 mx-1">
                  <label className="d-flex justify-content-center align-items-center">
                    Additional Documents
                  </label>
                  <div className="col-12  d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                      <FileUpload />
                    </div>
                  </div>
                </div>
                <div className="row py-5 mx-1">
                  <div className="col-xl-12 col-lg-12 col-12 d-flex justify-content-center">
                    <Button className="px-4" rounded={true}>
                      Submit
                    </Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Employeedetails;
