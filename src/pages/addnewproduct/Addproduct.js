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
import { Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import CustomModal from "components/modal/CustomModal";
import { BsFillPlusCircleFill } from "react-icons/bs";

function Addproduct() {
  const [deleteRow, setDeleterow] = useState(0);
  const [count, setCount] = useState(0);
  const [alternateUnit, setalternateUnit] = useState(false);
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [contactPersonData, setContactPersonData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [brandshow, setBrandshow] =useState(false);
  const handlebrandClose = () =>setBrandshow(false);
  const handlebrandShow = () => setBrandshow(true);

  const [categoryshow , setcategoryshow] = useState(false);
  const handlecategoryClose =() => setcategoryshow(false);
  const handlecategoryShow = ()=> setcategoryshow(true);

  const [subcategoryshow, setsubcategoryshow] = useState(false);
  const handlesubcategoryClose = () => setsubcategoryshow(false);
  const handlesubcategoryShow = () => setsubcategoryshow(true);

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

  const handleChange = (event) => {
    setalternateUnit(event.target.checked);
  };

  const AddValue = () => (
    <div className="row py-3">
      <div className="col-xl-3 col-lg-3 col-12">
        <InputDropdown />
      </div>
      <div className="col-xl-3 col-lg-3 col-12 ms-2">
        <InputType />
      </div>
      <div className="col-xl-3 col-lg-3 col-12 ms-1  mt-3">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radiobut"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Set Default
          </label>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-12 ">
        <Button
          className="delte_btn__style"
          // onClick={() => setDeleterow(delete - 1)}
          prependIcon={<RiDeleteBin5Line />}
        ></Button>
      </div>
    </div>
  );

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

            <div className="row  py-2 ">
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Product Name</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Product Type</label>
                <InputDropdown />
              </div>
              <div className="col-xl-4 col-lg-4 col-4">
                <label className={`mb-0 ms-0`}>Product SKU</label>
                <InputType />
              </div>
            </div>

            <div className="row  py-4 ">
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

              <div className="col-xl-3 col-lg-3 col-12 ">
                <label className={`mb-0 ms-0`}>Basic Unit</label>

                <InputDropdown />
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                {/* <Button
                  btnType="terneryicon"
                  className="ms-0 product_plusicon__size"
                  prependIcon={<PlusCircleFilled />}
                  onClick={handleShow}
                ></Button> */}

                <PlusCircleFilled
                  onClick={handleShow}
                  className="ms-2 product_plusicon__size"
                />
              </div>

              <CustomModal
                // onHide={handleClose}
                show={show}
                btnOnclick={handleClose}
                modalTitle="Add Unit Type"
              >
                <div className="row">
                  <div className="">
                    <label>Name</label>
                    <InputType />
                  </div>
                  <div className="">
                    <label>Description</label>
                    <InputType />
                  </div>
                  <div className="">
                    <label>Unit Category</label>
                    <InputDropdown />
                  </div>
                  <div className="row py-4">
                    <label>Status</label>
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
                          Active
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
                          Deactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-xl-12 col-lg-12 col-12  d-flex justify-content-center">
                      <Button rounded={true}>Add Unit Type</Button>
                    </div>
                  </div>
                </div>
              </CustomModal>

              <div className="col-xl-4 col-lg-4 col-12 pt-3">
                {/* <p className={`mb-0 ms-0`}>Business Type</p> */}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={alternateUnit}
                    onChange={handleChange}
                    // id="alternate"
                    // name="alternate"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Alternate Unit
                  </label>
                </div>
              </div>
            </div>
            {alternateUnit && (
              <div className="row py-3 mx-5">
                <h5 className="erp__h5_color">Alternative Units</h5>
                <div className="row py-3">
                  <div className="col-xl-3 col-lg-3 col-12">
                    <InputDropdown />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <InputType />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12 mt-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radiobut"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Set Default
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <Button
                      prependIcon={<AiOutlinePlus />}
                      fullhalfrounded={true}
                      onClick={() => setCount(count + 1)}
                    >
                      Add value
                    </Button>
                  </div>
                </div>
                <div className="row ">
                  {[...Array(count)].map((_, i) => (
                    <AddValue key={i} />
                  ))}
                </div>
              </div>
            )}

            <div className="row  py-2">
              <div className="col-xl-4 col-lg-4 col-12">
                <label className={`mb-0 ms-0`}>Bar code</label>
                <InputDropdown />
              </div>
              {/* <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled className="ms-2 product_plusicon__size" />
              </div> */}
              <div className="col-xl-3 col-lg-3 col-12">
                <label className={`mb-0 ms-0`}>Brand</label>
                <InputDropdown />
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled
                  onClick={handlebrandShow}
                  className="ms-2 product_plusicon__size"
                />
              </div>

              <CustomModal
                onHide={handlebrandClose}
                show={brandshow}
                modalTitle="Add Brand"
              >
                <div className="row">
                  <div className="">
                    <label>Name</label>
                    <InputType />
                  </div>
                  <div className="">
                    <label>Description</label>
                    <InputType />
                  </div>

                  <div className="row py-2">
                    <label>Status</label>
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
                          Active
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
                          Deactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-xl-12 col-lg-12 col-12  d-flex justify-content-center">
                      <Button rounded={true}>Add Brand</Button>
                    </div>
                  </div>
                </div>
              </CustomModal>

              <div className="col-xl-4 col-lg-4 col-12">
                <label className={`mb-0 ms-0`}>Dimension</label>
                <InputType />
              </div>
            </div>
            <div className="row  py-4">
              <div className="col-xl-3 col-lg-3 col-12">
                <label className={`mb-0 ms-0`}>Select Category</label>
                <InputDropdown />
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled
                  onClick={handlecategoryShow}
                  className="ms-2 product_plusicon__size"
                />
              </div>

              <CustomModal
                onHide={handlecategoryClose}
                show={categoryshow}
                modalTitle="Add Category"
              >
                <div className="row">
                  <div className="">
                    <label>Name</label>
                    <InputType />
                  </div>
                  <div className="">
                    <label>Code</label>
                    <InputType />
                  </div>
                  <div className="">
                    <label>Description</label>
                    <InputType />
                  </div>

                  <div className="row py-4">
                    <label>Status</label>
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
                          Active
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
                          Deactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-xl-12 col-lg-12 col-12  d-flex justify-content-center">
                      <Button rounded={true} className="px-5">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </CustomModal>

              <div className="col-xl-3 col-lg-3 col-12">
                <label className={`mb-0 ms-0`}>Select Sub Category</label>
                <InputDropdown />
              </div>
              <div className="col-xl-1 col-lg-1 col-12 pt-4">
                <PlusCircleFilled
                  onClick={handlesubcategoryShow}
                  className="ms-2 product_plusicon__size"
                />
              </div>

              <CustomModal
                onHide={handlesubcategoryClose}
                show={subcategoryshow}
                modalTitle="Add Brand"
              >
                <div className="row">
                  <div className="">
                    <label>Name</label>
                    <InputType />
                  </div>
                  <div className="">
                    <label>Code</label>
                    <InputType />
                  </div>
                  <div className="">
                    <label>Description</label>
                    <InputType />
                  </div>

                  <div className="row py-4">
                    <label>Status</label>
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
                          Active
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
                          Deactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label>Select Parent Category</label>
                    <InputDropdown />
                  </div>
                  <div className="row py-3">
                    <div className="col-xl-12 col-lg-12 col-12   d-flex justify-content-center">
                      <Button className="px-5" rounded={true}>
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </CustomModal>
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
            <div className="row   ">
              <div className=" col-12 ">
                <h5 className="erp__h5_color">Invoicing Policy</h5>
              </div>
            </div>
            <div className="row  py-1">
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

            <div className="row  py-4">
              <div className="col-xl-4 col-lg-4 col-12">
                <label className={`mb-0 ms-0`}>Product Price</label>
                <InputType />
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <label className={`mb-0 ms-0`}>Selling Price</label>
                <InputDropdown />
              </div>
            </div>
            <div className="row   ">
              <div className=" col-12 ">
                <h5 className="ms-0 erp__h5_color">Control Purchase Bills</h5>
              </div>
            </div>
            <div className="row  py-4">
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
              <div className="row  py-2">
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className={`mb-0 ms-0`}>Tax</label>
                  <InputType />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className={`mb-0 ms-0`}>Warranty</label>
                  <InputDropdown />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className={`mb-0 ms-0`}>Customer Lead Time</label>
                  <InputDropdown />
                </div>
              </div>
              <div className="row ">
                <div className=" col-12 ">
                  <h5 className="ms-0 erp__h5_color">Supplier</h5>
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className={`mb-0 ms-0`}>Name</label>
                  <InputType
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label className={`mb-0 ms-0`}>Mobile Number</label>
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

                <div className="row  py-2">
                  <div className="col-xl-7 col-lg-7 col-12">
                    <Table responsive bordered size="sm">
                      <thead className="prodtable__head__bgcolor">
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
