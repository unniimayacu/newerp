import React, { useState } from "react";
import Layout from "Layout/Layout";
import "./addproduct.scss";
import InputDropdown from "components/Input dropdown/InputDropdown";
import { CgProfile } from "react-icons/cg";
import InputType from "components/Input type/InputType";
import PhoneInputt from "components/Phone input/PhoneInput";
import FileUpload from "components/File uploader/FileUpload";
import Editor from "components/Text Editor/Editor";
import Button from "components/button/Button";
import { PlusCircleFilled } from "@ant-design/icons";
import Profileupload from "components/profilepicture/Profileupload";
import { Table, Modal } from "react-bootstrap";

const AlternateUnit = () => (
  <div className="row">
    <div className="col-xl-3 col-lg-3 col-12">
      <p className={`mb-0 ms-0`}>Product Type</p>
      <InputDropdown />
    </div>
    <div className="col-xl-13 col-lg-3 col-12">
      <p className={`mb-0 ms-0`}>Product Name</p>
      <InputType />
    </div>
    <div className="col-xl-13 col-lg-3 col-12"></div>
  </div>
);

function Addproduct() {
     const [noofRows, setNoofRows] = useState(0);
    const [name, setName] = useState("");
    const [phone, setphone] = useState("");
      const [contactPersonData, setContactPersonData] = useState([]);
      const addData = () => {
        console.log(name);
        setContactPersonData([
          ...contactPersonData,
          {
            name: name,
            phone,
           
          },
        ]);
      };
  return (
    <>
      <Layout>
        <div className="row  ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row  ">
              <div className="d-flex justify-content-between p-4 ">
                <h5 className="ms-0">Add New Product</h5>
              </div>
            </div>

            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Product Name</p>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Product Type</p>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Product SKU</p>
                <InputType />
              </div>
            </div>

            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <div class="form-check form-check-inline pt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Can Be Sold
                  </label>
                </div>
                {/* </div> */}
                {/* <div className="col-xl-2 col-lg-2 col-4"> */}
                <div class="form-check form-check-inline pt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Can Be purchased
                  </label>
                </div>
              </div>

              <div className="col-xl-3 col-lg- col-12 ">
                <p className={`mb-0 ms-0`}>Basic Unit</p>
                {/* <div className="d-flex "> */}
                <InputDropdown />
                {/* <div className=" ">
                  <PlusCircleFilled className="ms-2 product_plusicon__size" />
                </div> */}
                {/* </div> */}
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled className="ms-2 product_plusicon__size" />
              </div>
              <div className="col-xl-4 col-lg-4 col-12 pt-3">
                {/* <p className={`mb-0 ms-0`}>Business Type</p> */}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    onClick={() => AlternateUnit()}
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Alternate Unit
                  </label>
                </div>
                {/* <InputDropdown /> */}
              </div>
            </div>

            <div className="row mx-5 py-2">
              <div className="col-xl-3 col-lg-3 col-12">
                <p className={`mb-0 ms-0`}>Bar code</p>
                <InputDropdown />
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled className="ms-2 product_plusicon__size" />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <p className={`mb-0 ms-0`}>Brand</p>
                <InputDropdown />
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled className="ms-2 product_plusicon__size" />
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <p className={`mb-0 ms-0`}>Dimension</p>
                <InputType />
              </div>
            </div>
            <div className="row mx-5 py-4">
              <div className="col-xl-3 col-lg-3 col-12">
                <p className={`mb-0 ms-0`}>Select Category</p>
                <InputDropdown />
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled className="ms-2 product_plusicon__size" />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <p className={`mb-0 ms-0`}>Select Sub Category</p>
                <InputDropdown />
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled className="ms-2 product_plusicon__size" />
              </div>
            </div>

            <div className="row py-3">
              <div className="col-12  d-flex justify-content-center">
                <FileUpload />
              </div>
            </div>
            <div className="row mx-5  ">
              <div className=" col-12 ">
                <h5 className="ms-0">Invoicing Policy</h5>
              </div>
            </div>
            <div className="row mx-5 py-5">
              <div className="col-xl-3 col-lg-3 col-12">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    On ordered Quantities
                  </label>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Delivered Quantities
                  </label>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Invoice Based on time and material
                  </label>
                </div>
              </div>
            </div>

            <div className="row mx-5 py-4">
              <div className="col-xl-4 col-lg-4 col-12">
                <p className={`mb-0 ms-0`}>Product Price</p>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <p className={`mb-0 ms-0`}>Selling Price</p>
                <InputDropdown />
              </div>
            </div>
            <div className="row mx-5  ">
              <div className=" col-12 ">
                <h5 className="ms-0">Control Purchase Bills</h5>
              </div>
            </div>
            <div className="row mx-5 py-4">
              <div className="col-xl-3 col-lg-3 col-12">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    On ordered Quantities
                  </label>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    On Recieved Quantities
                  </label>
                </div>
              </div>
              <div className="row  py-4">
                <div className="col-xl-4 col-lg-4 col-12">
                  <p className={`mb-0 ms-0`}>Tax</p>
                  <InputType />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <p className={`mb-0 ms-0`}>Warranty</p>
                  <InputDropdown />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <p className={`mb-0 ms-0`}>Customer Lead Time</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="row ">
                <div className=" col-12 ">
                  <h5 className="ms-0">Supplier</h5>
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-4 col-lg-4 col-12">
                  <p className={`mb-0 ms-0`}>Name</p>
                  <InputType
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <p className={`mb-0 ms-0`}>Mobile Number</p>
                  <PhoneInputt
                    value={phone.phone}
                    onChange={(phone) => setphone(phone)}
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-12 d-flex justify-content-end">
                  <div className="p-0">
                    <Button
                      btnType="secondary"
                      rounded={true}
                      appendIcon={
                        <PlusCircleFilled className="ms-2 supplier_plusicon__size" />
                      }
                      onClick={() => addData()}
                    >
                      Add
                    </Button>
                  </div>
                </div>

                <div className="row  py-4">
                  <div className="col-xl-7 col-lg-7 col-12">
                    <Table responsive bordered size="sm">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Mobile Number</th>
                        </tr>
                      </thead>

                      <tbody>
                        {contactPersonData &&
                          contactPersonData.length > 0 &&
                          contactPersonData.map((item, index) => {
                            return (
                              <tr>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <h5>Note</h5>
                  </div>
                  <div className="col-12 py-5">
                    <Editor />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Addproduct;
