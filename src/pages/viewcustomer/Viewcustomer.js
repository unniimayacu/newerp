import Button from "components/button/Button";
import Header from "components/header/Header";
import Profileupload from "components/profilepicture/Profileupload";
import React, { useState ,useMemo} from "react";
import "./viewcustomer.scss";
import { Accordion, Card } from "react-bootstrap";
import { IoIosArrowForward ,IoMdSearch} from "react-icons/io";

import { TbDownload } from "react-icons/tb";
import Profile from "components/Add profile/Profile";
import Table from "components/table/Table";
import Layout from "Layout/Layout";





const actionIcons = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      {/* <label htmlFor="file"> */}
        <span className=" customericon__size  ">
          <IoMdSearch />
        </span>
        <span className="customericon__size  ms-2">
          <TbDownload />{" "}
        </span>
      {/* </label>
      <input type="file" id="file" name="file" style={{ display: "none" }} /> */}
    </div>
  );
};

function Viewcustomer() {
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
        Header: <h6 className="customer_h6__color">Customer Name</h6>,
        accessor: "col1",
      },
      {
        Header: <h6 className="customer_h6__color">Product SKU</h6>,
        accessor: "col2",
      },
      {
        Header: <h6 className="customer_h6__color"> Price</h6>,
        accessor: "col3",
      },
      {
        Header: <h6 className="customer_h6__color">Stock</h6>,
        accessor: "col4",
      },
    ],
    []
  );

  const datadoc = useMemo(
    () => [
      {
        col1: <p className="customer_table_p">Testgtt</p>,
        col2: actionIcons(),
      },
    ],
    []
  );
  const columnsdoc = useMemo(
    () => [
      {
        Header: <p className="customer_h6__color">Document Name</p>,
        accessor: "col1",
      },
      {
        Header: <h6 className="customer_h6__color"></h6>,
        accessor: "col2",
      },
    ],
    []
  );
  const datacont = useMemo(
    () => [
      {
        col1: <p className="customer_table_p">Testess</p>,
        col2: <p className="customer_table_p">873892223</p>,
        col3: <p className="customer_table_p">testt@gmail.com</p>,
        col4: <p className="customer_table_p">Lorenm ipsim</p>,
      },
    ],
    []
  );
  const columnscont = useMemo(
    () => [
      {
        Header: <h6 className="customer_h6__color">Name</h6>,
        accessor: "col1",
      },
      {
        Header: <h6 className="customer_h6__color">Mobile</h6>,
        accessor: "col2",
      },
      {
        Header: <h6 className="customer_h6__color">Email</h6>,
        accessor: "col3",
      },
      {
        Header: <h6 className="customer_h6__color">Department</h6>,
        accessor: "col4",
      },
    ],
    []
  );

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-12 col-lg-12 col-12">
              {/* <div className="row ">
                <Header />
              </div> */}

              <div className="row mt-5">
                <div className="col-xl-3 col-lg-3 col-12">
                  <div className="border-end text-center">
                    <Profile />
                    <div>
                      <h4>Savtest Name</h4>
                      <div className="">
                        <p>Reon technologies p L.T.D</p>
                        <p className="h4__color">savtest@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-12">
                  <div className="viewprof_btn__radius">
                    <Button btnType="secondary" rounded={true}>
                      Customer Info
                    </Button>
                  </div>
                  <div className="row py-4">
                    <div className="col-xl-5 col-lg-5 col-12">
                      <h4 className="h4__color">Address</h4>
                      <p className="p_color">
                        testaddresstestaddresse, thrissur,irinjalakuda,
                        dsfgdyfgeytfetfeudu,dfgsdfgf gufgudgdf,gyufyuweywywd
                        uisdwudduisudisd
                      </p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-12">
                      <h4 className="h4__color">Email</h4>
                      <p className="p_color">testareon@gmail.com</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12">
                      <h4 className="h4__color">Phone</h4>
                      <p className="p_color">+91 8136738903</p>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-xl-3 col-lg-3 col-12">
                      <h4 className="h4__color">Business Name</h4>
                      <p className="p_color">testaddresstestaddress</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-12">
                      <h4 className="h4__color">Website </h4>
                      <p className="p_color">testareon@gmail.com</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-12">
                      <h4 className="h4__color">Mobile</h4>
                      <p className="p_color">+91 8136738903</p>
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
                            <Accordion defaultActiveKey={0} flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  <h5>Address</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div>
                                    <p className="accordion_p_header">
                                      Shipping Address
                                    </p>
                                    <p className="accordion_p_content">
                                      testaddresstestaddress,09testsavadress,
                                      ghjnbmvc
                                    </p>
                                  </div>
                                  <div>
                                    <p className="accordion_p_header">
                                      Other Address
                                    </p>
                                    <p className="accordion_p_content"></p>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        </div>
                        <div className="row px-4">
                          <div className="col-xl-11 col-lg-11 col-12">
                            <Accordion defaultActiveKey={0} flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  <h5> Account Details</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div>
                                    <p className="accordion_p_header">
                                      Account Name
                                    </p>
                                    <p className="accordion_p_content">
                                      ReonTechonology
                                    </p>
                                  </div>
                                  <div>
                                    <p className="accordion_p_header">
                                      Bank Name
                                    </p>
                                    <p className="accordion_p_content">
                                      ReonTechonology
                                    </p>
                                  </div>
                                  <div>
                                    <p className="accordion_p_header">
                                      Account Number
                                    </p>
                                    <p className="accordion_p_content">
                                      333453627787908766
                                    </p>
                                  </div>
                                  <div>
                                    <p className="accordion_p_header">
                                      IFSC code
                                    </p>
                                    <p className="accordion_p_content">
                                      reon12kor234
                                    </p>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        </div>
                        <div className="row px-4">
                          <div className="col-xl-11 col-lg-11 col-12">
                            <Accordion defaultActiveKey={0} flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  <h5>Payment Details</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div>
                                    <p className="accordion_p_header">
                                      Tax Number
                                    </p>
                                    <p className="accordion_p_content">
                                      11234234
                                    </p>
                                  </div>
                                  <div>
                                    <p className="accordion_p_header">
                                      Openning Balance
                                    </p>
                                    <p className="accordion_p_content">
                                      10000000
                                    </p>
                                  </div>
                                  <div>
                                    <p className="accordion_p_header">
                                      Payment Period
                                    </p>
                                    <p className="accordion_p_content">4</p>
                                  </div>
                                  <div>
                                    <p className="accordion_p_header">
                                      Payment Period Condition
                                    </p>
                                    <p className="accordion_p_content">Month</p>
                                  </div>
                                  <div>
                                    <p className="accordion_p_header">
                                      Trade Type
                                    </p>
                                    <p className="accordion_p_content">Local</p>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        </div>
                        <div className="row px-4">
                          <div className="col-xl-11 col-lg-11 col-12">
                            <Accordion defaultActiveKey={0} flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  <h5>Other Info</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <h6 className="accordion_p_header">
                                    Country
                                  </h6>
                                  <p className="accordion_p_content">India</p>
                                  <h6 className="accordion_p_header">State</h6>
                                  <p className="accordion_p_content">Kerala</p>
                                  <h6 className="accordion_p_header">City</h6>
                                  <p className="accordion_p_content">Ekm</p>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        </div>
                        {/* <div className="row px-4">
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
                      </div> */}
                        <div className="row px-4">
                          <div className="col-xl-11 col-lg-11 col-12">
                            <Accordion defaultActiveKey={0} flush>
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
                            <Accordion defaultActiveKey={0} flush>
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

              <div className="row mx-3 mt-5">
                <div className="col-xl-12 col-lg-12 col-12 ">
                  <div className="">
                    <h4 className="view__supplier__moredetails">Your Notes</h4>

                    <p className="px-5 accordion_p_content mt-3">
                      {" "}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sunt veniam, alias laudantium commodi beatae omnis dolores
                      illo aspernatur ex saepe sit perferendis nesciunt vitae
                      labore dolor adipisci repudiandae assumenda voluptatum!
                    </p>
                  </div>
                </div>
              </div>
              {/* {" "} */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Viewcustomer;

//IoIosArrowForward




//  const [activeTabs, setActiveTabs] = useState({
//    moredetails: false,
//  });