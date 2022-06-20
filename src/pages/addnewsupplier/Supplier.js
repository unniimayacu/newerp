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
import { Table,Modal } from "react-bootstrap";
import Layout from "Layout/Layout";


// const AddContact = () => (
//   <div className="col-12 mx-5 ">
//     <div className=" d-flex justify-content-end p-5 ">
//       <p>
//         <input type="radio" className="" />
//         <span className="ms-1"> Set default</span>
//       </p>
//     </div>
//     <div className="row mx-5 py-3">
//       <div className="col-xl-3 col-lg-3 col-12">
//         <InputType placeholder="Name" />
//       </div>
//       <div className="col-xl-3 col-lg-3 col-12">
//         <PhoneInputt />
//       </div>
//       <div className="col-xl-3 col-lg-3 col-12">
//         <InputType placeholder="Email" />
//       </div>
//       <div className="col-xl-3 col-lg-3 col-12">
//         <InputType placeholder="Department" />
//       </div>
//     </div>
//   </div>
// );

function Supplier() {
  const [product, setProduct] = useState("");
  const [productsku, setProductsku] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productstock, setProductstock] = useState("");

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

  const [noofRows, setNoofRows] = useState(0);
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [department, setDepartment] = useState("");

  const [contactPersonData, setContactPersonData] = useState([]);

  const addData = () => {
    console.log(name);
    setContactPersonData([
      ...contactPersonData,
      {
        name: name,
        phone,
        email,
        department,
      },
    ]);
  };
  console.log("contact person data : ", contactPersonData);
  // const tableRows = data.map((item) => {});

  // return item (
  //   <tr>
  //     <td>{item.name}</td>
  //     <td>{item.phone}</td>
  //     <td>{item.email}</td>
  //     <td>{item.department}</td>
  //   </tr>
  // );

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
              <div className="col-xl-3 col-lg-3 col-12">
                <div className=" d-flex justify-content-evenly mt-4">
                  <div class="form-check mb-0 ms-0   ">
                    <input
                      class="form-check-input  "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Individual
                    </label>
                  </div>
                  <div class="form-check mb-0 ms-0   ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Company
                    </label>
                  </div>
                  {/* <p className={` mb-1 ms-0 pt-5  `}>
                    {" "}
                    Individual
                    <input type="radio" className={`ms-2  `} />
                  </p>
                  <p className={`mb-1 ms-1 pt-5 `}>
                    {" "}
                    Company
                    <input type="radio" className={`ms-2`} />
                  </p> */}
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <p className={`mb-0 ms-0`}>Name</p>
                <InputType placeholder="Name" />
              </div>
              <div className="col-xl-2 col-xl-2 col-12 pt-3 d-flex justify-content-end  ">
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
            <div className="row mx-5 py-5 ">
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

            <div className="">
              <div className="row mx-5 py-2">
                <div className="col-xl-12 col-lg-12 col-12">
                  <h5 className="supplier__product_color py-4">
                    Product Details
                  </h5>
                </div>
                <Table responsive bordered size="sm">
                  <thead>
                    <tr>
                      <th className="supplier__product_color ">Product</th>
                      <th className="supplier__product_color">Product SKU</th>
                      <th className="supplier__product_color ">Price</th>
                      <th className="supplier__product_color ">Stock</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      {/* <td>dghd</td>
                      <td>def</td>
                      <td>333</td> */}
                    </tr>
                    {[...Array(noofRows)].map((elementInArray, index, text) => {
                      return (
                        <tr>
                          {/* <th scope="row">{index}</th> */}
                          <td>
                            <input
                              className="supplier_input__style"
                              onKeyDown={(event) => {
                                console.log(event);
                                if (event.keyCode === 9) {
                                  setProduct(
                                    { message: event.target.value },
                                    () => {
                                      alert(product.message);
                                    }
                                  );
                                }
                              }}
                              type={text}
                            />{" "}
                          </td>
                          <td>
                            <input
                              className="supplier_input__style"
                              onKeyDown={(event) => {
                                console.log(event);
                                if (event.keyCode === 9) {
                                  setProductsku(
                                    { message: event.target.value },
                                    () => {
                                      alert(productsku.message);
                                    }
                                  );
                                }
                              }}
                              type={text}
                            />{" "}
                          </td>
                          <td>
                            <input
                              className="supplier_input__style"
                              onKeyDown={(event) => {
                                console.log(event);
                                if (event.keyCode === 9) {
                                  setProductprice(
                                    { message: event.target.value },
                                    () => {
                                      alert(productprice.message);
                                    }
                                  );
                                }
                              }}
                              type={text}
                            />{" "}
                          </td>
                          <td>
                            <input
                              className="supplier_input__style"
                              onKeyDown={(event) => {
                                console.log(event);
                                if (event.keyCode === 9) {
                                  setProductstock(
                                    { message: event.target.value },
                                    () => {
                                      alert(productstock.message);
                                    }
                                  );
                                }
                              }}
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

            <div className="row ">
              <div className="col-xl-12 col-lg-12 col-12 ">
                <div className="d-flex justify-content-center">
                  {/* <Button>Add Product</Button> */}
                  <Button
                    btnType="ternary"
                    appendIcon={
                      <PlusCircleFilled className="ms-2 supplier_plusicon__size" />
                    }
                    onClick={handleShow}
                  >
                    Add New product
                  </Button>

                  <div className="ms-2">
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
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title> Add new products </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row py-2">
                      <input
                        className="supplier_input__style"
                        placeholder=" product"
                      />
                    </div>
                    <div className="row py-2">
                      <input
                        className="supplier_input__style"
                        placeholder=" productsku"
                      />
                    </div>
                    <div className="row py-2">
                      <input
                        className="supplier_input__style"
                        placeholder=" price"
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>

            <div className="row mx-5  ">
              <div className="col-12">
                <h5 className="supplier__product_color">
                  Bank Account Details
                </h5>
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
              <div className="col-xl-12 col-lg-12 col-12 ">
                <Editor />
              </div>
            </div>
            <div className="row mx-5 mt-5 py-4 ">
              <div className="col-12">
                <h5 className="supplier__product_color">Contact Person</h5>
              </div>
            </div>

            {/* <div className="row px-5 ">
              <div className="col-12 d-flex justify-content-end ">
                <p>
                  <input type="radio" className="" />
                  <span className="ms-1" value="" checked='checked' > Set default</span>
                </p>
              </div>
            </div> */}

            <div className="row mx-5 py-3">
              <div className="col-xl-3 col-lg-3 col-12">
                <InputType
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <PhoneInputt
                  // value={phone}
                  // onChange={(event) => setphone(event.target.value)}
                  value={phone.phone}
                  onChange={(phone) => setphone(phone)}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <InputType
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setemail(event.target.value)}
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <InputType
                  placeholder="Department"
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                />
              </div>
            </div>

            <div className="row justify-content-center">
              {/* {[...Array(contact)].map((_, i) => (
                <AddContact key={i} />
              ))} */}
            </div>

            <div className="row mx-4 py-4">
              <div className="col-12 d-flex justify-content-end ">
                <div className="ms-1">
                  <Button
                    btnType="secondary"
                    appendIcon={
                      <PlusCircleFilled className="ms-2 supplier_plusicon__size" />
                    }
                    rounded={true}
                    onClick={() => addData()}
                    // onClick={addData}
                  >
                    Add
                  </Button>
                  {/* submitted: {submitted} */}
                </div>
              </div>
            </div>

            <div className="row mx-5">
              <div className="col-xl-12 col-lg-12 col-12"></div>
              <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Default</th>
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
                          <td>{item.email} </td>
                          <td>{item.department} </td>
                          <td>
                            <input type="radio" name="radio" />{" "}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
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

{
  /* <tr>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{email} </td>
                    <td>{department} </td>
                    <td> </td>
                  </tr>
                  
                  {[...Array(submitted)].map((_, i, data,item) => (
                <addData key={i} />
                
              ))} 
                  
                  */
}
