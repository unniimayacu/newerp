import Layout from "Layout/Layout";
import React from "react";
import "./viewsalesenquiry.scss";
import Button from "components/button/Button";
import { AiFillPrinter } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { Tabs, Tab,Nav, Accordion } from "react-bootstrap";

function Viewsalesenquiry() {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row py-4 ">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className=" d-flex justify-content-between">
                <h4>View Sales Enquiry</h4>
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
                        <span className="view__enquiry__number">02</span>
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
                      <h5>Payment</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <Table responsive bordered size="sm">
                          <thead className="tablethread">
                            <tr className="tablerow">
                              <th className="tablehead1 py-1">Payment term</th>
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
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h5>Shipping</h5>
                    </Accordion.Header>
                    <Accordion.Body>
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
                <Table responsive size="sm">
                  <thead className="table__head__color_salesenquiry ">
                    <tr>
                      <th className="text_size p-2 ">Sl</th>
                      <th className="text_size p-2">PRODUCT SKU</th>
                      <th className="text_size p-2 ">NAME</th>
                      <th className="text_size p-2 ">REQUIRED QTY</th>
                      <th className="text_size p-2 ">UOM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Zd12eoks</td>
                      <td>Product Name</td>
                      <td>10</td>
                      <td>Kg</td>
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

export default Viewsalesenquiry;

           {
             /* <Tabs
              defaultActiveKey="Payment"
              id="uncontrolled-tab-example"
              className="mb-3 "
            >
              <Tab eventKey="Payment" title="Payment" className="active__tab">
                <Table responsive bordered size="sm">
                  <thead className="tablethread">
                    <tr className="tablerow">
                      <th className="tablehead1 py-1">Payment term</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="tablerow ">
                      <td className="tablerow ">Payment term</td>
                    </tr>
                  </tbody>

                  <thead className="tablethread ">
                    <tr className="tablerow ">
                      <th className="tablehead1 py-3 ">Payment Method</th>
                    </tr>
                  </thead>
                  <tbody className="py-1 ">
                    <tr className="tablerow ">
                      <td className="tablerow py-0 ">Cash</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>

              <Tab
                eventKey="shipping"
                title="Shipping "
                className="active__tab"
              >
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
              </Tab>
              <Tab eventKey="delivery" title="Delivery" className="active__tab">
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
                      <th className="tablehead1">Authorized Sales Person</th>
                    </tr>
                  </thead>
                  <tbody className="py-1">
                    <tr className="tablerow ">
                      <td className="tablerow ">name</td>
                    </tr>
                  </tbody>
                  <thead className="tablethread">
                    <tr className="tablerow">
                      <th className="tablehead1">Expected date of Delivery</th>
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
              </Tab>
              <Tab eventKey="others" title="Others " className="active__tab">
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
              </Tab>
            </Tabs> */
           }

{
  /* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav variant="tabs" className="flex-column">
                <div className="row">
                  <div className="col-xl-3 col-xl-3 col-12">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Payment</Nav.Link>
                    </Nav.Item>
                  </div>
                  <div className="col-xl-3 col-xl-3 col-12">
                    <Nav.Item>
                      <Nav.Link eventKey="second">Shipping</Nav.Link>
                    </Nav.Item>
                  </div>
                  <div className="col-xl-3 col-xl-3 col-12">
                    <Nav.Item>
                      <Nav.Link eventKey="third">Delivery</Nav.Link>
                    </Nav.Item>
                  </div>
                  <div className="col-xl-3 col-xl-3 col-12">
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Others</Nav.Link>
                    </Nav.Item>
                  </div>
                </div>
              </Nav>

              <Tab.Content>
                <div className="row">
                  <div className="col-xl-3 col-xl-3 col-12">
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                  </div>
                  <div className="col-xl-3 col-xl-3 col-12">
                    <Tab.Pane eventKey="second">
                      <Table responsive bordered size="sm">
                        <thead className="tablethread">
                          <tr className="tablerow">
                            <th className="tablehead1">Shipping Address</th>
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
                    </Tab.Pane>
                  </div>
                  <div className="col-xl-3 col-xl-3 col-12">
                    <Tab.Pane eventKey="third">
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
                    </Tab.Pane>
                  </div>
                  <div className="col-xl-3 col-xl-3 col-12">
                    <Tab.Pane eventKey="fourth">
                      <Table responsive bordered size="sm">
                        <thead className="tablethread">
                          <tr className="tablerow">
                            <th className="tablehead1">Customer Reference</th>
                          </tr>
                        </thead>
                        <tbody className="py-1">
                          <tr className="tablerow ">
                            <td className="tablerow ">Customer </td>
                          </tr>
                        </tbody>
                        <thead className="tablethread">
                          <tr className="tablerow">
                            <th className="tablehead1">Reference date</th>
                          </tr>
                        </thead>
                        <tbody className="py-1">
                          <tr className="tablerow ">
                            <td className="tablerow "> 11/06/2022</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab.Pane>
                  </div>
                </div>
              </Tab.Content>
            </Tab.Container> */
}