import React, { useState ,useMemo} from "react";
import Layout from "Layout/Layout";
import "./addsalesenquiry.scss";
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
import { Select } from "antd";

function Addsalesenquiry() {

    // const { Option } = Select;
    // const children = [];

    // for (let i = 10; i < 36; i++) {
    //   children.push(
    //     <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    //   );
    // }

    // const handleChange = (value) => {
    //   console.log(`selected ${value}`);
    // };
     const [noofRows, setNoofRows] = useState(0);
    //   const columns = useMemo(
    //     () => [
    //       {
    //         Header: "Sl.No",
    //         accessor: "col1",
    //       },
    //       {
    //         Header: "Product Sku",
    //         accessor: "col2",
    //       },

    //       {
    //         Header: "Name",
    //         accessor: "col3",
    //       },
    //       {
    //         Header: "Required Qty",
    //         accessor: "col4",
    //       },
    //     ],
    //     []
    //   );

    //   const data = useMemo(
    //     () => [
    //       {
    //         col1: "1",
    //         col2: "Worker",

    //         col3: "actionI",
    //         col4: "activeSwi",
    //       },
    //       {
    //         col1: "2",
    //         col2: "Worker",

    //         col3: "actionI",
    //         col4: "activeSwi",
    //       },
    //     ],
    //     []
    //   );
  return (
    <>
      <Layout>
        <div className="row  ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row  ">
              <div className="d-flex justify-content-between p-4 ">
                <h5 className="ms-0">Add New Sales Enquiry</h5>
              </div>
            </div>

            <div className="row  py-2 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Sale Enquiry Number</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Select Customer</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Branch </label>
                <InputType />
              </div>
            </div>

            <div className="row  py-3 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Date</label>
                <DatePicker />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Valid till</label>
                <DatePicker />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Branch </label>
                <InputType />
              </div>
            </div>

            <div className="row  py-3 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Payment term</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Payment Method</label>
                <InputDropdown />
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Branch </label>
                <InputType />
              </div> */}
            </div>

            <div className="row  py-3 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Customer Reference</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
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
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Authorized sales Person</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Expected date of delivery</label>
                <DatePicker />
              </div>
            </div>

            {/* <div className="row  py-4">
              <div className="col-xl-4 col-lg-4 col-12">
                <label className={`mb-0 ms-0`}>Select product</label>
                <InputDropdown />
              </div>
            </div> */}
            <div className="row   ">
              <div className=" col-12 ">
                <h5 className="ms-0 erp__h5_color">Product Details</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-12">
                <Table responsive size="sm">
                  <thead className="table__head__color ">
                    <tr>
                      <th className="supplier__product_color p-1 ">Sl No</th>
                      <th className="supplier__product_color p-1">
                        PRODUCT SKU
                      </th>
                      <th className="supplier__product_color p-1 ">NAME</th>
                      <th className="supplier__product_color p-1 ">
                        REQUIRED QTY
                      </th>
                      <th className="supplier__product_color p-1 ">UOM</th>
                      <th className="supplier__product_color p-1 ">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>def</td>
                      <td>333</td>
                      <td>333</td>
                      <td>333</td>
                      <td>333</td>
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

            <div className="row py-3">
              <div className="col-12">
                <h5>Remarks</h5>
              </div>
              <div className="col-12 py-3">
                <Editor />
              </div>
            </div>
            <div className="row py-5">
              <div className="col-12 d-flex justify-content-center">
                <Button className=" p-2 px-5" rounded={true}>
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Addsalesenquiry;
