import React, { useMemo } from "react";
import Button from "components/button/Button";
import { Accordion, Card } from "react-bootstrap";
import Layout from "Layout/Layout";
import "./viewproduct.scss"
function Viewproduct() {
  return (
    <>
      <Layout>
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row mt-5 mx-5 ">
              <div className="col-xl-4 col-lg-4 col-12 mt-0 p-0 border-end">
                <div className=" ">
                  <div className="d-flex justify-content-center ">
                    <div className="p-4  product__img "></div>
                  </div>
                  <div>
                    <h5>Savtest Name</h5>
                    <p>Reon technologies</p>
                    <p>savtest@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-12 mt-5 p-4">
                <div className="viewprof_btn__radius">
                  <Button btnType="secondary" rounded={true}>
                    Product Details
                  </Button>
                </div>
                <div className="row py-3">
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="d-flex">
                      <h6 className="h4__color  ">Product Type : </h6>
                      <div className=" ">
                        <p className="viewproduct_p__color ms-1"> Single</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <h6 className="h4__color  ">Product SKU : </h6>
                      <div className=" ">
                        <p className="viewproduct_p__color ms-1">
                          {" "}
                          SKUhjH7Bgh8
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <h6 className="h4__color  ">Base Unit : </h6>
                      <div className=" ">
                        <p className="viewproduct_p__color ms-1"> Nos</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <h6 className="h4__color  ">Alternative Unit : </h6>
                      <div className=" ">
                        <p className="viewproduct_p__color ms-1"> Kg</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="d-flex">
                      <h6 className="h4__color  ">Bar Code Type : </h6>
                      <div className=" ">
                        <p className="viewproduct_p__color ms-1">Barcode</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <h6 className="h4__color  ">Category: </h6>
                      <div className=" ">
                        <p className="viewproduct_p__color ms-1"> Nos</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <h6 className="h4__color  ">Sub Category : </h6>
                      <div className=" ">
                        <p className="viewproduct_p__color ms-1"> Kg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-3 mx-4">
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
                                <h5> Dimensions</h5>
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
                                <h5>Invoicing Policy</h5>
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
                                <h5>Control purchase Bills</h5>
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
                      {/* <div className="row px-4">
                        <div className="col-xl-11 col-lg-11 col-12">
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                <h5 className="view__supplier__h5_color">
                                  {" "}
                                  Product Details
                                </h5>
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
                      {/* <div className="row px-4">
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
                      </div> */}
                      {/* <div className="row px-4">
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
                      </div> */}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="row mx-5 ">
              <div className="col-xl-12 col-lg-12 col-12">
                <h4 className="view__supplier__moredetails">Your Notes</h4>
                <div className="py-2">
                  <p className="px-4">
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sunt veniam, alias laudantium commodi beatae omnis dolores
                    illo aspernatur ex saepe sit perferendis nesciunt vitae
                    labore dolor adipisci repudiandae assumenda voluptatum!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Viewproduct