import React from 'react'
import "./viewsaleorder.scss";
import Layout from "Layout/Layout";
import Button from "components/button/Button";
import { AiFillPrinter } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { Tabs, Card, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { BsChevronDown } from "react-icons/bs";
function Viewsaleorder() {


   function CustomToggle({ children, eventKey }) {
     const decoratedOnClick = useAccordionButton(eventKey, () =>
       console.log("totally custom!")
     );

     return (
       <div
         type="button"
         style={{ backgroundColor: "white" }}
         onClick={decoratedOnClick}
       >
         {children}
       </div>
     );
   }


  return (
    <>
      <Layout>
        <div className="container">
          <div className="row py-4 ">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className=" d-flex justify-content-between">
                <h4>View Sales order</h4>
                <Button
                  className="px-4"
                  rounded={true}
                  appendIcon={<AiFillPrinter />}
                >
                  Print
                </Button>
              </div>
            </div>

            <div className="row py-4">
              <div className="text-center">
                <Table responsive bordered size="sm">
                  <thead className="tablethread">
                    <tr className="tablerow">
                      <th className="tablehead">Sales Enquiry Number</th>
                      <th className="tablehead">Customer</th>
                      <th className="tablehead">Branch/warehouse</th>
                      <th className="tablehead">Date</th>
                      <th className="tablehead">Date Valid till</th>
                    </tr>
                  </thead>
                  <tbody className="py-3">
                    <tr className="tablerow1 p-2">
                      <td className="tablerow1 p-3  ">
                        <span className="view__enquiry__number">Sl-B676H</span>
                      </td>
                      <td className="tablerow1 p-3">Customer</td>
                      <td className=" tablerow1 p-3">Branch</td>
                      <td className=" tablerow1 p-3">12/03/2022</td>
                      <td className="tablerow1 p-3">12/03/2022</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Accordion defaultActiveKey="0">
                  <div className="card shadow-sm border-0 p-3  ">
                    <CustomToggle eventKey="0">
                      <div
                        className={`d-flex justify-content-between align-items-center px-3 p-2 card__bg_color `}
                      >
                        <h5 className={` `}>Shipping</h5>
                        <span>
                          <BsChevronDown className={``} />
                        </span>
                      </div>
                    </CustomToggle>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body className={` `}>
                        <Table responsive bordered size="sm">
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">Shipping Address</th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <div>
                                <td className="tablerow ">
                                  test addresdss tetxtt addresws
                                </td>
                              </div>
                              <div>
                                <td className="tablerow ">
                                  test addresdss tetxtt addresws
                                </td>
                              </div>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </div>

                  <div className="card shadow-sm border-0 p-3 ">
                    <CustomToggle eventKey="1">
                      <div
                        className={`d-flex justify-content-between align-items-center px-3  p-2 card__bg_color `}
                      >
                        <h5>Payment</h5>
                        <span>
                          <BsChevronDown className={``} />
                        </span>
                      </div>
                    </CustomToggle>

                    <Accordion.Collapse eventKey="1">
                      <Card.Body className={` `}>
                        <div className="row">
                          <Table responsive bordered size="sm">
                            <thead className="tablethread">
                              <tr className="tablerow">
                                <th className="tablehead1 py-1">
                                  Payment term
                                </th>
                              </tr>
                            </thead>
                            <tbody className="">
                              <tr className="tablerow ">
                                <td className="tablerow ">Payment term</td>
                              </tr>
                            </tbody>

                            <thead className="tablethread ">
                              <tr className="tablerow ">
                                <th className="tablehead1 py-3 ">
                                  Payment Method
                                </th>
                              </tr>
                            </thead>
                            <tbody className="py-1 ">
                              <tr className="tablerow ">
                                <td className="tablerow py-0 ">Cash</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </div>
                  <div className="card shadow-sm border-0 p-3 ">
                    <CustomToggle eventKey="2">
                      <div
                        className={`d-flex justify-content-between align-items-center px-3 p-2 card__bg_color `}
                      >
                        <h5>Delivery</h5>
                        <span>
                          <BsChevronDown className={``} />
                        </span>
                      </div>
                    </CustomToggle>

                    <Accordion.Collapse eventKey="2">
                      <Card.Body className={` `}>
                        <Table responsive bordered size="sm">
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">Contact Person</th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <td className="tablerow ">name</td>
                            </tr>
                          </tbody>
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">
                                Authorized Sales Person
                              </th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <td className="tablerow ">name</td>
                            </tr>
                          </tbody>
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">
                                Expected date of Delivery
                              </th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <td className="tablerow  erp_status_active_p_color">
                                11/06/2022
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </div>

                  <div className="card shadow-sm border-0 p-3 ">
                    <CustomToggle eventKey="3">
                      <div
                        className={`d-flex justify-content-between align-items-center px-3  p-2 card__bg_color`}
                      >
                        <h5>Sale</h5>
                        <span>
                          <BsChevronDown className={``} />
                        </span>
                      </div>
                    </CustomToggle>

                    <Accordion.Collapse eventKey="3">
                      <Card.Body className={` `}>
                        <Table responsive bordered size="sm">
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">Contact Person</th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <td className="tablerow ">name</td>
                            </tr>
                          </tbody>
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">
                                Authorized Sales Person
                              </th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <td className="tablerow ">name</td>
                            </tr>
                          </tbody>
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">
                                Expected date of Delivery
                              </th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <td className="tablerow  erp_status_active_p_color">
                                11/06/2022
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </div>

                  <div className="card  border-0 p-3 ">
                    <CustomToggle eventKey="4">
                      <div
                        className={`d-flex justify-content-between align-items-center px-3  p-2 card__bg_color`}
                      >
                        <h5>Others</h5>
                        <span>
                          <BsChevronDown className={``} />
                        </span>
                      </div>
                    </CustomToggle>

                    <Accordion.Collapse eventKey="4">
                      <Card.Body className={` `}>
                        <Table responsive bordered size="sm">
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">Payment term</th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <td className="tablerow ">Payment term</td>
                            </tr>
                          </tbody>
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1">Payment Method</th>
                            </tr>
                          </thead>
                          <tbody className="py-1">
                            <tr className="tablerow ">
                              <td className="tablerow ">Cash</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>

            <div className="row py-4">
              <div className="">
                <h4>Product Details</h4>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-xl-12 col-lg-12 col-12">
                <Table responsive size="sm">
                  <thead className="table__head__color_salesenquiry ">
                    <tr>
                      <th className="text_size p-2 ">PRODUCT</th>
                      <th className="text_size p-2">QTY</th>
                      <th className="text_size p-2 ">UOM</th>
                      <th className="text_size p-2 ">PRICING</th>
                      <th className="text_size p-2 ">UNIT PRICE</th>
                      <th className="text_size p-2 ">DISCOUNT</th>
                      <th className="text_size p-2 ">TAX</th>
                      <th className="text_size p-2 ">TAX AMT</th>
                      <th className="text_size p-2 ">NET RATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>product name</td>
                      <td>20</td>
                      <td>Kg</td>
                      <td>p1</td>
                      <td>100/kg</td>
                      <td>N/A</td>
                      <td>3%</td>
                      <td>30</td>
                      <td>1000</td>
                    </tr>
                  </tbody>

                  <tr>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>300 </td>
                    <td> </td>
                    <td>30 </td>
                    <td>1000 </td>
                  </tr>
                </Table>
              </div>
            </div>

            <div className="row">
              <h4>Your Notes</h4>
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quasi cum, odio deserunt blanditiis, nam assumenda rerum
                  mollitia necessitatibus pariatur debitis? Sint architecto
                  iusto tempore adipisci enim ipsam dignissimos odit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Viewsaleorder;