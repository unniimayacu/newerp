import React, { useMemo } from "react";
import Button from "components/button/Button";
import Header from "components/header/Header";
import Profile from "components/Add profile/Profile";
// import React, { useState } from "react";
import "./viewsupplier.scss";
import { Accordion, Card } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import Table from "components/table/Table";

const actionIcons = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <span className=" suppliericon__size  ">
        <IoMdSearch />
      </span>
      <span className="suppliericon__size  ms-2">
        <TbDownload />{" "}
      </span>
    </div>
  );
};

function Viewsupplier() {
  const data = useMemo(
    () => [
      {
        col1: "testtttdh",
        col2: "khjdidd",
        col3: "rrifroi",
        col4: "sdrvrm",
      },
      {
        col1: "testtttdh",
        col2: "khjdidd",
        col3: "rrifroi",
        col4: "sdrvrm",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: <h6 className="supplir_h6__color">Product Name</h6>,
        accessor: "col1",
      },
      {
        Header: <h6 className="supplir_h6__color">Product SKU</h6>,
        accessor: "col2",
      },
      {
        Header: <h6 className="supplir_h6__color"> Price</h6>,
        accessor: "col3",
      },
      {
        Header: <h6 className="supplir_h6__color">Stock</h6>,
        accessor: "col4",
      },
    ],
    []
  );

  const datadoc = useMemo(
    () => [
      {
        col1: "testgtt",
        col2: actionIcons(),
      },
    ],
    []
  );
  const columnsdoc = useMemo(
    () => [
      {
        Header: <p className="supplir_h6__color">Document Name</p>,
        accessor: "col1",
      },
      {
        Header: <h6 className="supplir_h6__color"></h6>,
        accessor: "col2",
      },
    ],
    []
  );
  const datacont = useMemo(
    () => [
      {
        col1: "testt",
        col2: "873892223",
        col3: "testt@gmail.com",
        col4: "Lorenm ipsim",
      },
    ],
    []
  );
  const columnscont = useMemo(
    () => [
      {
        Header: <h6 className="supplir_h6__color">Name</h6>,
        accessor: "col1",
      },
      {
        Header: <h6 className="supplir_h6__color">Mobile</h6>,
        accessor: "col2",
      },
      {
        Header: <h6 className="supplir_h6__color">Email</h6>,
        accessor: "col3",
      },
      {
        Header: <h6 className="supplir_h6__color">Department</h6>,
        accessor: "col4",
      },
    ],
    []
  );
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row ">
              <Header />
            </div>

            <div className="row mt-4 mx-5">
              
              <div className="col-xl-3 col-lg-3 col-12 mt-0 p-0">
                <div className="border-end ">
                  <Profile />
                  <div>
                    <h4>Savtest Name</h4>
                    <p>Reon technologies</p>
                    <p>savtest@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-12 mt-5 p-4">
                <div className="viewprof_btn__radius">
                  <Button btnType="secondary" rounded={true}>
                    Supplier Info
                  </Button>
                </div>
                <div className="row py-4">
                  <div className="col-xl-5 col-lg-5 col-12">
                    <h4 className="h4__color">Address</h4>
                    <p>testaddresstestaddress</p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <h4 className="h4__color">Email</h4>
                    <p>testareon@gmail.com</p>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <h4 className="h4__color">Phone</h4>
                    <p>+91 8136738903</p>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-xl-3 col-lg-3 col-12">
                    <h4 className="h4__color">Business Name</h4>
                    <p>testaddresstestaddress</p>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-12">
                    <h4 className="h4__color">Website </h4>
                    <p>testareon@gmail.com</p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <h4 className="h4__color">Mobile</h4>
                    <p>+91 8136738903</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-xl-12 col-lg-12 col-12 ">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h4 className="view__supplier__moredetails">
                        More Details
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="row px-4">
                        <div className="col-xl-11 col-lg-11 col-12">
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <h5> Account Details</h5>
                              </Accordion.Header>
                              <Accordion.Body>
                                <p>Account Name</p>
                                <p>Bank Name</p>
                                <p>Account Number</p>
                                <p>IFSC code</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                      <div className="row px-4">
                        <div className="col-xl-11 col-lg-11 col-12">
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <h5>Payment Details</h5>
                              </Accordion.Header>
                              <Accordion.Body>
                                <p>Account Name</p>
                                <p>Bank Name</p>
                                <p>Account Number</p>
                                <p>IFSC code</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                      <div className="row px-4">
                        <div className="col-xl-11 col-lg-11 col-12">
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <h5>Other Info</h5>
                              </Accordion.Header>
                              <Accordion.Body>
                                <h6>Country</h6>
                                <p>India</p>
                                <h6>State</h6>
                                <p>Kerala</p>
                                <h6>City</h6>
                                <p>Ekm</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                      <div className="row px-4">
                        <div className="col-xl-11 col-lg-11 col-12">
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <h5> Product Details</h5>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="row">
                                  <div className="col-xl-7 col-lg-7 col-12">
                                    <Table
                                      data={data}
                                      columns={columns}
                                      paginate={false}
                                      Pagination={false}
                                      PageSize={false}
                                    />
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                      <div className="row px-4">
                        <div className="col-xl-11 col-lg-11 col-12">
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <h5>Attached Document</h5>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="col-xl-6 col-lg-6 col-12">
                                  <Table
                                    data={datadoc}
                                    columns={columnsdoc}
                                    paginate={false}
                                    Pagination={false}
                                    PageSize={false}
                                  />
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                      <div className="row px-4">
                        <div className="col-xl-11 col-lg-11 col-12">
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <h5> Contact Person </h5>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="col-xl-6 col-lg-6 col-12">
                                  <Table
                                    data={datacont}
                                    columns={columnscont}
                                    paginate={false}
                                    Pagination={false}
                                    PageSize={false}
                                  />
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-12">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h4 className="view__supplier__moredetails">
                        Your Notes
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="px-5">
                        {" "}
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sunt veniam, alias laudantium commodi beatae omnis
                        dolores illo aspernatur ex saepe sit perferendis
                        nesciunt vitae labore dolor adipisci repudiandae
                        assumenda voluptatum!
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewsupplier;

//BsFillTelephoneFill
//TbDownload
//IoMdSearch