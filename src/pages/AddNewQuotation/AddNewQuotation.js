import DatePicker from "components/Datepicker/DatePicker";
import FileUpload from "components/File uploader/FileUpload";
import Header from "components/header/Header";
import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";
import Table from "components/table/Table";
import TextArea from "components/Text Area/TextArea";
import React, { useMemo } from "react";
import styles from "./AddNewQuotation.module.scss";
import { MdDelete } from "react-icons/md";
import Editor from "components/Text Editor/Editor";
import Button from "components/button/Button";
import Layout from "Layout/Layout";

const AddNetRate = () => {
  return (
    <div>
      1000{" "}
      <button type="delete" className={`ms-3 ${styles.AddNetRate}`}>
        <MdDelete color="gray" fontSize={17} />
      </button>
    </div>
  );
};

function AddNewQuotation() {
  const data = useMemo(
    () => [
      {
        slno: 1,
        col1: "Product name",
        col2: "20",
        col3: "Kg",
        col4: "1000",
        col5: "10/Kg",
        col6: "N/A",
        col7: "3%",
        col8: "30",
        col9: AddNetRate(),
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "SL",
        accessor: "slno",
      },
      {
        Header: "PRODUCT",
        accessor: "col1",
      },
      {
        Header: "QTY",
        accessor: "col2",
      },
      {
        Header: "UOM",
        accessor: "col3",
      },
      {
        Header: "PRICING",
        accessor: "col4",
      },
      {
        Header: "UNIT PRICE",
        accessor: "col5",
      },
      {
        Header: "DISCOUNT",
        accessor: "col6",
      },
      {
        Header: "TAX%",
        accessor: "col7",
      },
      {
        Header: "TAX AMOUNT",
        accessor: "col8",
      },
      {
        Header: "NET RATE",
        accessor: "col9",
      },
    ],
    []
  );

  return (
    <div>
      <div className="">
        {/* <div className="row">
          <Header />
        </div> */}
        <Layout>
          <div className="container justify-content-center">
            <div className="row mt-5 justify-content-center">
              <h4>Add New Quotation</h4>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-4 ">
                <div>
                  <p>Quotation No</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 ">
                <div>
                  <p className="mb-2 pb-2">Select Customer</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-4 ">
                <div>
                  <p className="mb-2 pb-2">Branch / WareHouse</p>
                  <InputDropdown />
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-4">
                <div>
                  <p>Date</p>
                  <DatePicker className={`${styles.datepicker}`} />
                </div>
                <div className="mt-3">
                  <p>Incoterms</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p>Valid Till</p>
                  <DatePicker className={`${styles.datepicker}`} />
                </div>
                <div className="mt-3">
                  <p className="mb-2 pb-2">Shipping Policy</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p>Shipping Address</p>
                  <TextArea className={`${styles.textarea}`} />
                </div>
              </div>
            </div>
            <div className="row  mt-3justify-content-center">
              <div className="col-4 ">
                <div>
                  <p>Payment Terms</p>
                  <InputType className={`${styles.inputtype}`} />
                </div>
              </div>
              <div className="col-8 ">
                <div>
                  <p className="mb-2 pb-2">Payment Method</p>
                  <InputDropdown className={`${styles.inputdropdown}`} />
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-4 ">
                <div>
                  <p>Customer Reference</p>
                  <InputType className={`${styles.inputtype}`} />
                </div>
              </div>
              <div className="col-8 ">
                <div>
                  <p>Payment Method</p>
                  <DatePicker className={`${styles.inputdropdown}`} />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 mt-5 d-flex justify-content-center">
                <div>
                  <FileUpload filebuttons />
                  <p className={`${styles.multipledocument}`}>
                    You can Add Multiple Documents
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-4 ">
                <div>
                  <p>Contact Person</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 ">
                <div>
                  <p>Authorized Sales Person</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 ">
                <div>
                  <p>Tags</p>
                  <InputType />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 mt-3">
                <div>
                  <p>Sales Team</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 mt-3">
                <div>
                  <p>Fiscal Position</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 mt-3">
                <div>
                  <p>Expected Date Of Delivery</p>
                  <DatePicker className={`${styles.datepicker}`} />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 mt-3">
                <div>
                  <p>Select Sales Enquiry </p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-4 mt-3">
                <div>
                  <p>Select Product</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-4 mt-3">
                <div>
                  <p>Select Service</p>
                  <InputDropdown />
                </div>
              </div>
            </div>
            <div className="row mt-4 justify-content-center">
              <h6 className={`${styles.productdetails}`}>Product Details</h6>
            </div>
            <div className="row justify-content-center">
              <div>
                <Table
                  data={data}
                  columns={columns}
                  PageSize={false}
                  Pagination={false}
                  Sorted={false}
                  className={true}
                  responsive={true}
                />
              </div>
            </div>
            <div className="row mt-4 justify-content-center">
              <p>Remarks</p>
            </div>
            <div className="row mt-3 justify-content-center">
              <div>
                <Editor />
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5 justify-content-center">
            <div className="col-12 mt-5 d-flex justify-content-center">
              <Button btnType="blue" halfrounded={true}>
                Add
              </Button>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default AddNewQuotation;
