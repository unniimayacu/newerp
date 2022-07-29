import InputDropdown from 'components/Input dropdown/InputDropdown';
import React from 'react'
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import Button from "components/button/Button";
import { PlusCircleFilled } from "@ant-design/icons";
import InputType from "components/Input type/InputType";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";

function Settlementpayelementcreate() {
  //  const activeSwitch = () => {
  //    return (
  //      <div className="erp_status_switch-color">
  //        <Form.Check type="switch" id="custom-switch" />
  //      </div>
  //    );
  //  };

     const [noofRows, setNoofRows] = useState(0);
  return (
    <>
      <Layout>
        <div className="container mt-3 justify-content-center ">
          <div className="row p-0 justify-content-center">
            <div className="card shadow-sm border border-2">
              <div className="row p-1 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 py-2 p-0">
                  <div className="d-flex gap-1">
                    <h5 className="erp__h5_color erp-lg__h5_size erp-md__h5_Size ">
                      {" "}
                      Settlement Pay Element
                    </h5>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-4 col-lg-4 col-12">
                  <label>Settlement Type</label>
                  <InputDropdown />
                </div>
              </div>
              <div className="row py-4 justify-content-center">
                <div className="text-center">
                  <div className="col-xl-8 col-lg-8 col-12">
                    <div className="card shadow-sm">
                      <Table responsive size="sm">
                        <thead className="table__head__color ">
                          <tr>
                            <th className="  p-2 ">Earnings</th>

                            <th className="supplier__product_color p-2 ">
                              Active
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td className="p-2">
                              <div className="row">
                                <div className="col-xl-2 col-lg-2 col-12"></div>
                                <div className="col-xl-8 col-lg-8 col-12  d-flex justify-content-center">
                                  <InputDropdown />{" "}
                                </div>
                                <div className="col-xl-2 col-lg-2 col-12"></div>
                              </div>
                            </td>

                            <td className="p-3">
                              <div className="erp_status_switch-color">
                                <Form.Check type="switch" id="custom-switch" />
                              </div>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2">
                              <div className="row">
                                <div className="col-xl-2 col-lg-2 col-12"></div>
                                <div className="col-xl-8 col-lg-8 col-12  d-flex justify-content-center">
                                  <InputDropdown />{" "}
                                </div>
                                <div className="col-xl-2 col-lg-2 col-12"></div>
                              </div>
                            </td>

                            <td className="p-3">
                              <div className="erp_status_switch-color">
                                <Form.Check type="switch" id="custom-switch" />
                              </div>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2">
                              <div className="row">
                                <div className="col-xl-2 col-lg-2 col-12"></div>
                                <div className="col-xl-8 col-lg-8 col-12  d-flex justify-content-center">
                                  <InputDropdown />{" "}
                                </div>
                                <div className="col-xl-2 col-lg-2 col-12"></div>
                              </div>
                            </td>

                            <td className="p-3">
                              <div className="erp_status_switch-color">
                                <Form.Check type="switch" id="custom-switch" />
                              </div>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2">
                              <div className="row">
                                <div className="col-xl-2 col-lg-2 col-12"></div>
                                <div className="col-xl-8 col-lg-8 col-12  d-flex justify-content-center">
                                  <InputDropdown />{" "}
                                </div>
                                <div className="col-xl-2 col-lg-2 col-12"></div>
                              </div>
                            </td>

                            <td className="p-3">
                              {" "}
                              <div className="erp_status_switch-color">
                                <Form.Check type="switch" id="custom-switch" />
                              </div>{" "}
                            </td>
                          </tr>

                          <tr></tr>
                          {[...Array(noofRows)].map(
                            (elementInArray, index, text) => {
                              return (
                                <tr>
                                  <td className="p-2">
                                    <div className="row">
                                      <div className="col-xl-2 col-lg-2 col-12"></div>
                                      <div className="col-xl-8 col-lg-8 col-12  d-flex justify-content-center">
                                        <InputDropdown />{" "}
                                      </div>
                                      <div className="col-xl-2 col-lg-2 col-12"></div>
                                    </div>
                                  </td>

                                  <td className="p-3">
                                    {" "}
                                    <div className="erp_status_switch-color">
                                      <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </Table>
                    </div>
                    <div className="py-2"></div>
                    <div className="col-12">
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

                    <div className="row mt-2 py-3">
                      <div className="col-12 d-flex justify-content-center">
                        <Link to={ROUTES.SETTLEMENTPAYELEMENTVIEW}>
                          <Button halfrounded={true} className="px-3">
                            Create
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-3"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Settlementpayelementcreate