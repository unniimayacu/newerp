import Button from "components/button/Button";
import Header from "components/header/Header";
import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";
import PhoneInputt from "components/Phone input/PhoneInput";
import TextArea from "components/Text Area/TextArea";
import {React,useState} from "react";
import { CgProfile } from "react-icons/cg";
// import { PlusCircleFilled } from "@ant-design/icons";
import styles from "./addnewcustomer.module.scss";
import FileUpload from "components/File uploader/FileUpload";
import Editor from "components/Text Editor/Editor";
import Layout from "Layout/Layout";
import { BsFillPlusCircleFill } from "react-icons/bs";

const AddContact = () => (
  <p>
    <div className="row mt-3 justify-content-center">
      <div className={`${styles.setdefault}`}>
        <label htmlFor="radioo">
          <p>
            <input type="radio" name="setdefault" id="radioo" className="me-2" />
            Set default
          </p>
        </label>
      </div>
      <div className="row ">
        <div className={`col-3  mt-3 ${styles.columndiv}`}>
          <div className="mt-2">
            <p className={`mb-1  ${styles.ptype}`}>Name</p>
            <InputType className={`${styles.contactinput}`} />
          </div>
        </div>
        <div className={`col-3  mt-3 ${styles.columndiv}`}>
          <div className="mt-2">
            <p className={`mb-1  ${styles.ptype}`}>Mobile</p>
            <PhoneInputt className={`${styles.contactphone}`} />
          </div>
        </div>
        <div className={`col-3   mt-3 ${styles.columndiv}`}>
          <div className="mt-2">
            <p className={`mb-1  ${styles.ptype}`}>Email</p>
            <InputType className={`${styles.contactinput}`} />
          </div>
        </div>
        <div className={`col-3   mt-3 ${styles.columndiv}`}>
          <div className="mt-2">
            <p className={`mb-1  ${styles.ptype}`}>Department</p>
            <InputType className={`${styles.contactinput}`} />
          </div>
        </div>
      </div>
    </div>
  </p>
);


const AddElement = () => (
  <p>
    <div className="row justify-content-start">
      <div className={`col-5  mt-3 ${styles.columndiv}`}>
        <div className="mt-2  ">
          <p className={`mb-1  ${styles.ptype}`}>Address</p>
          <TextArea />
        </div>
      </div>
      <div className={`col-5  mt-3 ${styles.columndiv}`}>
        <div className="mt-2   ">
          <p className={`mb-1  ${styles.ptype}`}>Shipping Address</p>
          <TextArea />
        </div>
      </div>
    </div>
  </p>
);



function AddNewCustomer() {

 const [count, setCount] = useState(0);

 const [contact, setContact] = useState(0);


  return (
    <div>
      <div className="container-fluid">
        {/* <div className="row">
          <Header />
        </div> */}
        <Layout>
          <div className="container">
            <div className="row mt-5 justify-content-center">
              {/* <div className="d-flex justify-content-start  col-xl-6 col-lg-6 col-12   py-3 "> */}
              <h4 className="ms-0">Add New Customer</h4>
              {/* </div> */}
            </div>

            <div className="row  justify-content-center">
              <div className={`col-4  ${styles.columndiv}`}>
                <div className="mt-5 pt-4">
                  <p className={`mb-0  ${styles.ptype}`}>Contact Type</p>
                  <InputDropdown dropdown={`${styles.drop}`} />
                </div>
              </div>
              <div className={`col-4  ${styles.columndiv}`}>
                <div className="mt-5 pt-4">
                  <p className={`mb-1  ${styles.ptype}`}>Name</p>
                  <InputType />
                </div>
              </div>
              <div className={`col-4  ${styles.columndiv}`}>
                <div className="d-flex justify-content-evenly ">
                  <div className="mt-5 pt-5 d-flex justify-content-evenly">
                    {" "}
                    <label htmlFor="individual">
                      <p className={`mb-1 pt-3  ${styles.ptype}`}>
                        {" "}
                        Individual
                        <input
                          type="radio"
                          id="individual"
                          name="radio"
                          className={`ms-2`}
                        />
                      </p>
                    </label>
                    <label htmlFor="company">
                      <p className={`mb-1 ms-2 pt-3  ${styles.ptype}`}>
                        {" "}
                        Company
                        <input
                          type="radio"
                          id="company"
                          name="radio"
                          className={`ms-2`}
                        />
                      </p>
                    </label>
                  </div>
                  <div className=" ">
                    <p className={`  ${styles.ptype}`}>Profile Picture</p>
                    <label htmlFor="file">
                      <div
                        className={`card p-3 bg-whitesmoke border-0 ${styles.profilecard}`}
                      >
                        <CgProfile fontSize={50} color="lightgray" />
                      </div>
                      <input
                        type="file"
                        id="file"
                        accept="image/*"
                        style={{ display: "none" }}
                      />
                    </label>
                    <p className={`  ${styles.browse}`}>Browse</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="row justify-content-center">
                <div className={`col-4  ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Business Name</p>
                    <InputType />
                  </div>
                </div>
                <div className={`col-4  ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Tax Number</p>
                    <InputType />
                  </div>
                </div>
                <div className={`col-4  ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Openning Balance</p>
                    <InputType />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Payment Period</p>
                    <InputType />
                  </div>
                </div>
                <div className={`col-4  ${styles.columndiv}`}>
                  <div className="mt-4 ">
                    <p className={`mb-0  ${styles.ptype}`}>
                      Payment Period Condition
                    </p>
                    <InputDropdown dropdown={`${styles.drop}`} />
                  </div>
                </div>
                <div className={`col-4  ${styles.columndiv}`}>
                  <div className=" mt-4">
                    <p className={`mb-0  ${styles.ptype}`}>Business Type</p>
                    <InputDropdown dropdown={`${styles.drop}`} />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className={`col-4 mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Email</p>
                    <InputType />
                  </div>
                </div>
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Phone</p>
                    <PhoneInputt />
                  </div>
                </div>
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Mobile</p>
                    <PhoneInputt />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center ">
                <div className={`col-4   mt-3 ${styles.columndiv}`}>
                  <div className="mt-2 ">
                    <p className={`mb-1  ${styles.ptype}`}>Fax</p>
                    <InputType />
                  </div>
                </div>
                <div className={`col-8  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Website</p>
                    <InputType className={`${styles.inputtype}`} />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className={`col-5  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2 ">
                    <p className={`mb-1  ${styles.ptype}`}>Address</p>
                    <TextArea />
                  </div>
                </div>
                <div className={`col-5  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Shipping Address</p>
                    <TextArea />
                  </div>
                </div>
                <div className="col-1"></div>
                <div
                  className={`col-1 ms-0 p-0 mt-5  justify-content-center mb-0  ${styles.columndiv}`}
                >
                  <Button
                    // appendIcon={}
                    btnType="white"
                    halfrounded={true}
                    onClick={() => setCount(count + 1)}
                  >
                    <div className="d-flex  m-0 p-0">
                      <p className="mt-1 ms-0 mb-2 p-1">Add</p>
                      <BsFillPlusCircleFill
                        className="mt-2 ms-1"
                        fontSize={20}
                      />
                    </div>
                  </Button>
                </div>
              </div>
              <div className="row ">
                {[...Array(count)].map((_, i) => (
                  <AddElement key={i} />
                ))}
              </div>
              <div className="row justify-content-center">
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2 ">
                    <p className={`mb-2  ${styles.ptype}`}>City</p>
                    <InputType />
                  </div>
                </div>
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>State</p>
                    <InputDropdown dropdown={`${styles.drop}`} />
                  </div>
                </div>
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Country</p>
                    <InputDropdown dropdown={`${styles.drop}`} />
                  </div>
                </div>
              </div>
              <div className="row mt-3 justify-content-center">
                
              </div>


              <div className="row mt-3  justify-content-center">
                <h6 className={`${styles.bankheading}`}>
                  Bank Account Details
                </h6>
              </div>
              <div className="row justify-content-center">
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2 ">
                    <p className={`mb-1  ${styles.ptype}`}>Account Name</p>
                    <InputType />
                  </div>
                </div>
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Account Number</p>
                    <InputType />
                  </div>
                </div>
                <div className={`col-4 mt-3 ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Bank Name</p>
                    <InputType />
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className={`col-4  mt-3 ${styles.columndiv}`}>
                  <div className="mt-2 ">
                    <p className={`mb-1  ${styles.ptype}`}>IBAN Code</p>
                    <InputType />
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div
                  className={`col-12 d-flex justify-content-center mt-5 ${styles.columndiv}`}
                >
                  <div>
                    <FileUpload />
                    <p className={`${styles.multipledocument}`}>
                      You can Add Multiple Documents
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className={`col-12  mt-3  ${styles.columndiv}`}>
                  <div className="mt-2">
                    <p className={`mb-1  ${styles.ptype}`}>Note</p>
                    <Editor className="mt-5" />
                  </div>
                </div>
              </div>
              <div className="row  mt-5 pt-5 justify-content-center">
                <h6 className={` mt-5 ${styles.bankheading}`}>
                  Contact Person
                </h6>
              </div>
              <div className="row mt-3  justify-content-center">
                <div className={`${styles.setdefault}`}>
                  <label htmlFor="radio">
                    <p>
                      <input
                        type="radio"
                        name="setdefault"
                        id="radio"
                        className="me-2"
                      />
                      Set default
                    </p>
                  </label>
                </div>
                <div className="row justify-content-center">
                  <div className={`col-3  mt-3 ${styles.columndiv}`}>
                    <div className="mt-2">
                      <p className={`mb-1  ${styles.ptype}`}>Name</p>
                      <InputType className={`${styles.contactinput}`} />
                    </div>
                  </div>
                  <div className={`col-3  mt-3 ${styles.columndiv}`}>
                    <div className="mt-2">
                      <p className={`mb-1  ${styles.ptype}`}>Mobile</p>
                      <PhoneInputt className={`${styles.contactphone}`} />
                    </div>
                  </div>
                  <div className={`col-3  mt-3 ${styles.columndiv}`}>
                    <div className="mt-2">
                      <p className={`mb-1  ${styles.ptype}`}>Email</p>
                      <InputType className={`${styles.contactinput}`} />
                    </div>
                  </div>
                  <div className={`col-3   mt-3 ${styles.columndiv}`}>
                    <div className="mt-2">
                      <p className={`mb-1  ${styles.ptype}`}>Department</p>
                      <InputType className={`${styles.contactinput}`} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {[...Array(contact)].map((_, i) => (
                  <AddContact key={i} />
                ))}
              </div>
              <div className="row mt-3 justify-content-center">
                <div className={`${styles.setdefault}`}>
                  <Button
                    btnType="white"
                    halfrounded={true}
                    onClick={() => setContact(contact + 1)}
                  >
                    <div className="d-flex  m-0 p-0">
                      <p className="mt-1 mb-2 p-1">Add</p>
                      <BsFillPlusCircleFill
                        className="ms-1 mt-2 "
                        fontSize={20}
                      />
                    </div>
                  </Button>
                </div>
              </div>

              <div className="row mt-5 justify-content-center">
                <div className="d-flex justify-content-center">
                  <Button halfrounded={true}>Add Contact</Button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default AddNewCustomer;
