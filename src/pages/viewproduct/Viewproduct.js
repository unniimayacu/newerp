import React, { useMemo } from "react";
import Button from "components/button/Button";
import { Accordion, Card } from "react-bootstrap";
import Layout from "Layout/Layout";
import "./viewproduct.scss";
function Viewproduct() {
  return (
    <>
      <Layout>
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row mt-5 mx-5 ">
              <div className="col-xl-4 col-lg-4 col-12 mt-0 p-0 border-end ">
                {/* <div className=" "> */}
                <div className="d-flex justify-content-center ">
                  <div className="p-4  product__img ">
                    <span class="badge bg-primary  badge_text__position p-1 px-3 ">
                      SOLD
                    </span>
                  </div>
                </div>
                <div className=" mt-2 row viewproduct__erp__imgtext ">
                  <h5>Product Name</h5>

                  <div className="d-flex justify-content-center">
                    <h6 className="product_brandname__color  ">Brand Name </h6>
                    <div className=" ">
                      <h6 className="product_brandname__color ms-3"> Model</h6>
                    </div>
                  </div>

                  <p>SKU8mjfjnkm</p>
                </div>
                {/* </div> */}
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
                                <p>Purchase</p>
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
                                <h6>On Ordered Quantity</h6>
                                <p>Purchase Price</p>
                                <p>1000</p>
                                <p>Selling Price</p>
                                <p>1200</p>
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
                                <h6>On Ordered Quantity</h6>
                                <p>Tax</p>
                                <p>tax amount</p>
                                <p>Warranty</p>
                                <p>Months</p>
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

export default Viewproduct;
