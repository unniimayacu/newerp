import Header from "components/header/Header";
import React from "react";
import "./supplier.scss";
import InputDropdown from "components/Input dropdown/InputDropdown";
import { CgProfile } from "react-icons/cg";
import InputType from "components/Input type/InputType";
import PhoneInputt from "components/Phone input/PhoneInput";
import TextArea from "components/Text Area/TextArea";
import FileUpload from "components/File uploader/FileUpload";
import Editor from "components/Text Editor/Editor";
import Button from "components/button/Button";

function Supplier() {
  return (
    <>
      <div className="container-fluid">
        <div className="row  ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row">
              <Header />
            </div>
            <div className="row  ">
              <div className="d-flex justify-content-between p-4  ">
                <h5 className="ms-0">Add New Supplier</h5>
              </div>
            </div>
            <div className="row mx-5 py-4">
              <div className="col-xl-4 col-lg-4 col-12">
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <InputType placeholder="Name" />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <InputType placeholder="Name" />
              </div>
            </div>

            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <InputDropdown />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <PhoneInputt />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <PhoneInputt />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-12">
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-8 col-lg-8 col-12">
                <InputType placeholder="website" />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-6 col-lg-6 col-12">
                <TextArea />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-12">
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <PhoneInputt />
              </div>
            </div>
            <div className="row mx-5  ">
              <div className="col-12">
                <h5>Bank Account Details</h5>
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4 ">
                <p className="ms-1">Account Number</p>
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className="ms-1">Account Number</p>
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className="ms-1">Account Number</p>
                <InputType placeholder="Name" />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <InputType placeholder="Name" />
              </div>
            </div>
            <div className="row mx-5  mt-5 ">
              <div className="col-12 d-flex justify-content-center">
                <FileUpload />

                {/* <p >
                  You can Add Multiple Documents
                </p> */}
              </div>
            </div>
            <div className="row mx-5 py-5">
              <div className="col-12 d-flex justify-content-center">
                <Editor />
              </div>
            </div>
            <div className="row mx-5 mt-5 py-4 ">
              <div className="col-12">
                <h5>Contact Person</h5>
              </div>
            </div>

            <div className="row mx-5 py-5">
              <div className="col-xl-3 col-lg-3 col-12">
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <PhoneInputt />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <InputType placeholder="Email" />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <InputType placeholder="Department" />
              </div>
            </div>
            <div className="row ">
              <div className="col-12 d-flex justify-content-center">
                <Button 
               
                >Add Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supplier;
