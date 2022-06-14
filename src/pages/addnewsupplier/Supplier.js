import Header from "components/header/Header";
import React, { useState } from "react";
import "./supplier.scss";
import InputDropdown from "components/Input dropdown/InputDropdown";
import { CgProfile } from "react-icons/cg";
import InputType from "components/Input type/InputType";
import PhoneInputt from "components/Phone input/PhoneInput";
import TextArea from "components/Text Area/TextArea";
import FileUpload from "components/File uploader/FileUpload";
import Editor from "components/Text Editor/Editor";
import Button from "components/button/Button";
import { PlusCircleFilled } from "@ant-design/icons";
import Profileupload from "components/profilepicture/Profileupload";

const AddContact = () => (
  <div className="col-12 mx-5 ">
    <div className=" d-flex justify-content-end p-5 ">
      <p>
        <input type="radio" className="" />
        <span className="ms-1"> Set default</span>
      </p>
    </div>
    <div className="row mx-5 py-3">
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
  </div>
);


function Supplier() {
   const [contact, setContact] = useState(0);
  return (
    <>
      <div className="container-fluid">
        <div className="row  ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row">
              <Header />
            </div>
            <div className="row  ">
              <div className="d-flex justify-content-between p-4 ">
                <h5 className="ms-0">Add New Supplier</h5>
                {/* <div className="">
                  <Profileupload/>
                </div> */}
              </div>
            </div>
            <div className="row mx-5 py-4">
              <div className="col-xl-4 col-lg-4 col-12">
                <p className={`mb-0 ms-2`}>Contact Type</p>
                <InputDropdown />
              </div>
              <div className="col-xl-2 col-lg-2 col-12">
                <div className=" d-flex justify-content-evenly">
                  {" "}
                  <p className={` mb-1 ms-0 pt-5  `}>
                    {" "}
                    Individual
                    <input type="radio" className={`ms-2  `} />
                  </p>
                  <p className={`mb-1 ms-1 pt-5 `}>
                    {" "}
                    Company
                    <input type="radio" className={`ms-2`} />
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <p className={`mb-0 ms-0`}>Name</p>
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-2 col-xl-2 col-12 mt-2 px-3">
                <div className="profile__custom_size">
                  <Profileupload />
                </div>
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Business Name</p>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Tax Number</p>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Opening Balance</p>
                <InputType />
              </div>
            </div>

            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Payment Period</p>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Payment Period Condition</p>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Business Type</p>
                <InputDropdown />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Email</p>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Phone</p>
                <PhoneInputt />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>Mobile</p>
                <PhoneInputt />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-12">
                <p className={`mb-0 ms-0`}>Fax</p>
                <InputType />
              </div>
              <div className="col-xl-8 col-lg-8 col-12">
                <p className={`mb-0 ms-0`}>Website</p>
                <InputType />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-6 col-lg-6 col-12">
                <p className={`mb-0 ms-0`}>Address</p>
                <TextArea />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-12">
                <p className={`mb-0 ms-0`}>City</p>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>State</p>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-2 ms-0`}>Country</p>
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
                <p className="ms-1">Account Name</p>
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className="ms-1">Bank Name</p>
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <p className="ms-1">Account Number</p>
                <InputType placeholder="Name" />
              </div>
            </div>
            <div className="row mx-5 py-4 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <p className={`mb-0 ms-0`}>IFSC</p>
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

            <div className="row px-5 ">
              <div className="col-12 d-flex justify-content-end ">
                <p>
                  <input type="radio" className="" />
                  <span className="ms-1"> Set default</span>
                </p>
              </div>
            </div>

            <div className="row mx-5 py-3">
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

            <div className="row justify-content-center">
              {[...Array(contact)].map((_, i) => (
                <AddContact key={i} />
              ))}
            </div>

            <div className="row mx-4 ">
              <div className="col-12 d-flex justify-content-end ">
                <div className="ms-1">
                  <Button
                    btnType="secondary"
                    appendIcon={
                      <PlusCircleFilled className="ms-2 supplier_plusicon__size" />
                    }
                    rounded={true}
                    onClick={() => setContact(contact + 1)}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-12 d-flex justify-content-center">
                <Button>Add Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supplier;
