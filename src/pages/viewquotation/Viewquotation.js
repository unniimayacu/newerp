
import Layout from "Layout/Layout";
import React from "react";
import "./viewquotation.scss";
import Button from "components/button/Button";
import { AiFillPrinter } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { Tabs, Tab, Nav, Accordion } from "react-bootstrap";

function Viewquotation() {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row py-4 ">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className=" d-flex justify-content-between">
                <h4>View Quotation</h4>
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
                      <th className="tablehead">Quotation No</th>
                      <th className="tablehead">Customer</th>
                      <th className="tablehead">Branch/warehouse</th>
                      <th className="tablehead">Date</th>
                      <th className="tablehead">Date Valid till</th>
                    </tr>
                  </thead>
                  <tbody className="py-3">
                    <tr className="tablerow1 p-2">
                      <td className="tablerow1 p-3  ">
                        <span className="view__enquiry__number">22</span>
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
              <div className="">
                <h4>More Details</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h5>Shipping</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
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
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h5>Payment</h5>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h5>Delivery</h5>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h5>Sales</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table responsive bordered size="sm">
                        <thead className="tablethread">
                          <tr className="tablerow">
                            <th className="tablehead1">Sales Team</th>
                          </tr>
                        </thead>
                        <tbody className="py-1">
                          <tr className="tablerow ">
                            <td className="tablerow ">test sales</td>
                          </tr>
                        </tbody>
                        <thead className="tablethread">
                          <tr className="tablerow">
                            <th className="tablehead1">Fiscal Position</th>
                          </tr>
                        </thead>
                        <tbody className="py-1">
                          <tr className="tablerow ">
                            <td className="tablerow ">test position</td>
                          </tr>
                        </tbody>
                        <thead className="tablethread">
                          <tr className="tablerow">
                            <th className="tablehead1">sales enquiry</th>
                          </tr>
                        </thead>
                        <tbody className="py-1">
                          <tr className="tablerow ">
                            <td className="tablerow ">test sales</td>
                          </tr>
                        </tbody>
                        <thead className="tablethread">
                          <tr className="tablerow">
                            <th className="tablehead1">Service</th>
                          </tr>
                        </thead>
                        <tbody className="py-1">
                          <tr className="tablerow ">
                            <td className="tablerow ">test service</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <h5>Others</h5>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                  </Accordion.Item>
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
                <Table responsive size="sm" className="text-center">
                  <thead className="table__head__color_salesenquiry ">
                    <tr>
                      <th className="text_size p-2 ">Sl</th>
                      <th className="text_size p-2">PRODUCT </th>
                      <th className="text_size p-2 ">QTY</th>
                      <th className="text_size p-2 ">UOM</th>
                      <th className="text_size p-2 ">PRICING</th>
                      <th className="text_size p-2 ">DISCOUNT</th>
                      <th className="text_size p-2 ">TAX %</th>
                      <th className="text_size p-2 ">TAX AMOUNT</th>
                      <th className="text_size p-2 ">NET RATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Zd12eoksDEFRF hehdujhdu whdeuuwujsw</td>
                      <td>20</td>
                      <td>Kg</td>
                      <td>1843</td>
                      <td>N/A</td>
                      <td>3%</td>
                      <td>30</td>
                      <td>1000</td>
                    </tr>
                  </tbody>
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

export default Viewquotation