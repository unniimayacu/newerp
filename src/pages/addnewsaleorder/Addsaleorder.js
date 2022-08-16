import React, { useState } from "react";
import Layout from "Layout/Layout";
import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";
import PhoneInputt from "components/Phone input/PhoneInput";
import FileUpload from "components/File uploader/FileUpload";
import Editor from "components/Text Editor/Editor";
import Button from "components/button/Button";
import { PlusCircleFilled } from "@ant-design/icons";

import { Table } from "react-bootstrap";
// import Table from "components/table/Table";
import CustomModal from "components/modal/CustomModal";
import { BsFillPlusCircleFill } from "react-icons/bs";
import DatePicker from "components/Datepicker/DatePicker";
import { MdDelete } from "react-icons/md";
import TextArea from "components/Text Area/TextArea";
import Select from "react-select";


function Addsaleorder() {
  const [noofRows, setNoofRows] = useState(0);
  const [count, setCount] =useState(0)

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row  ">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className="row  ">
                <div className="d-flex justify-content-between p-4 ">
                  <h5 className="ms-0">Add New Sales Order</h5>
                </div>
              </div>
            </div>

            <div className="row  py-2 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Order Number</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Select Customer</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Branch/Warehouse </label>
                <InputDropdown />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8 col-lg-8 col-12">
                <div className="row  py-3 ">
                  <div className="col-xl-6 col-lg-6 col-4">
                    <label className={`mb-0 ms-0`}>Date</label>
                    <DatePicker />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-4">
                    <label className={`mb-0 ms-0`}>Expiration Date</label>
                    <DatePicker />
                  </div>
                </div>
                <div className="row  py-3 ">
                  <div className="col-xl-6 col-lg-6 col-4">
                    <label className={`mb-0 ms-0`}>Incoterms</label>
                    <InputDropdown />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-4">
                    <label className={`mb-0 ms-0`}>Shipping Policy</label>
                    <InputDropdown />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-12">
                <div className="mt-3">
                  <label className={`mb-0 ms-0`}>Shipping Address</label>
                  <TextArea />
                </div>
              </div>
            </div>

            <div className="row  py-2 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Payment Terms</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Payment Method</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>LPO Number </label>
                <InputType />
              </div>
            </div>

            <div className="row  py-2 ">
              <div className="col-xl-5 col-lg-5 col-4">
                <label className={`mb-0 ms-0`}>Customer Reference</label>
                <InputType />
              </div>
              <div className="col-xl-5 col-lg-5 col-4">
                <label className={`mb-0 ms-0`}>Reference Date</label>
                <DatePicker />
              </div>
            </div>

            <div className="row py-2">
              <div className="col-12  d-flex justify-content-center">
                <div>
                  <FileUpload />
                  <div className="row  py-3">
                    <div className="col-12 d-flex justify-content-center">
                      <Button rounded={true}>Choose File</Button>
                      <Button
                        className=" ms-3 px-4"
                        appendIcon={<BsFillPlusCircleFill />}
                        rounded={true}
                        btnType="secondary"
                      >
                        Add{" "}
                      </Button>
                    </div>
                  </div>
                  <p className=" d-flex justify-content-center">
                    You can Add Multiple Documents
                  </p>
                </div>
              </div>
            </div>

            <div className="row  py-3 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Contact Person</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Authorized Sales Person</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Tags </label>
                <InputDropdown />
              </div>
            </div>

            <div className="row  py-2 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Sales Team</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Fiscal Position</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>
                  Expected Date Of Delivery{" "}
                </label>
                <DatePicker />
              </div>
            </div>

            <div className="row  py-2 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Select Quotation</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Select Product</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Select Service </label>
                <InputDropdown />
              </div>
            </div>

            <div className="row py-3  ">
              <div className=" col-12 ">
                <h5 className="ms-0 erp__h5_color">Product Details</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-12">
                <Table responsive size="sm">
                  <thead className="table__head__color ">
                    <tr>
                      {/* <th className="supplier__product_color p-1 ">Sl No</th> */}
                      <th className="supplier__product_color p-1">PRODUCT</th>
                      <th className="supplier__product_color p-1 ">QTY</th>
                      <th className="supplier__product_color p-1 ">UOM</th>
                      <th className="supplier__product_color p-1 ">PRICING</th>
                      <th className="supplier__product_color p-1 ">
                        UNIT PRICE
                      </th>
                      <th className="supplier__product_color p-1 ">DISCOUNT</th>
                      <th className="supplier__product_color p-1 ">TAX</th>
                      <th className="supplier__product_color p-1 ">TAX AMT</th>
                      <th className="supplier__product_color p-1 ">NET RATE</th>
                      <th className="supplier__product_color p-1 "> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        
                        {/* <input className="supplier_input__style" type="text" /> */}
                        <Select options={options}  />
                      </td>
                      <td>
                        {" "}
                        <input className="supplier_input__style" type="text" />
                      </td>
                      <td>
                        <input className="supplier_input__style" type="text" />
                      </td>
                      <td>
                        <input className="supplier_input__style" type="text" />
                      </td>
                      <td>
                        <input className="supplier_input__style" type="text" />
                      </td>
                      <td>
                        <input className="supplier_input__style" type="text" />
                      </td>
                      <td>
                        {" "}
                        <input className="supplier_input__style" type="text" />
                      </td>
                      <td>
                        <input className="supplier_input__style" type="text" />
                      </td>
                      <td>
                        <input className="supplier_input__style" type="text" />
                      </td>
                      <td>
                        {" "}
                        <span className="erp_edit_delte_icon__size">
                          <MdDelete />
                        </span>
                      </td>
                    </tr>
                    {[...Array(noofRows)].map((elementInArray, index, text) => {
                      return (
                        <tr>
                          {/* <th scope="row">{index}</th> */}
                          <td>
                            <input
                              className="supplier_input__style"
                              type={text}
                            />{" "}
                          </td>
                          <td>
                            <input
                              className="supplier_input__style"
                              type={text}
                            />{" "}
                          </td>
                          <td>
                            <input
                              className="supplier_input__style"
                              type={text}
                            />{" "}
                          </td>
                          <td>
                            <input
                              className="supplier_input__style"
                              type={text}
                            />{" "}
                          </td>
                          <td>
                            <input
                              className="supplier_input__style"
                              type={text}
                            />{" "}
                            {count}
                          </td>
                          <td>
                            <input
                              className="supplier_input__style"
                              type={text}
                            />{" "}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> </td>
                  </tr>
                </Table>
              </div>
            </div>

            <div className="row">
              <Button
                onClick={() => setNoofRows(noofRows + 1)}
                btnType="ternary"
                appendIcon={
                  <PlusCircleFilled className="ms-2 supplier_plusicon__size" />
                }
              >
                Add New Row
              </Button>
            </div>

            <div className="row  py-3 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Shipping charge</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>other charge</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Net Payable amount </label>
                <InputType />
              </div>
            </div>

            <div className="row py-3">
              <div className="col-12">
                <h5>Remarks</h5>
              </div>
              <div className="col-12 py-3">
                <Editor />
              </div>
            </div>
            <div className="row py-5">
              <div className="col-12 d-flex gap-2 justify-content-center">
                <Button className=" p-2 px-5" rounded={true}>
                  Save
                </Button>
                <Button className=" p-2 px-4" rounded={true} btnType="cancel">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Addsaleorder;
