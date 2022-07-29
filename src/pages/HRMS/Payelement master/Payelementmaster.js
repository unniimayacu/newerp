import React from 'react'
import Layout from "Layout/Layout";
import "./payelement.scss";
// import Table from "components/table/Table";
import { Table } from "react-bootstrap";

import InputDropdown from 'components/Input dropdown/InputDropdown';
import Button from "components/button/Button";
import { PlusCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import { useState } from "react";
import InputType from 'components/Input type/InputType';
function Payelementmaster() {

   const [noofRows, setNoofRows] = useState(0);
    // const actionIcons = () => {
    //   return (
    //     <div className="d-flex align-items-center justify-content-center gap-2">
    //       <span className="erp_edit_delte_icon__size  ">
    //         <Link to={ROUTES.CREATELEAVEAPPLICATION}>
    //           <BsPencilSquare />
    //         </Link>
    //       </span>
    //       <span className="erp_edit_delte_icon__size ">
    //         <RiFileSearchFill />{" "}
    //       </span>
    //       <span className="erp_edit_delte_icon__size ">
    //         <MdDelete />{" "}
    //       </span>
    //     </div>
    //   );
    // };
    // const statusApproval = () => {
    //   return (
    //     <div className="">
    //       <p className="erp_status_active_p_color">Approved</p>
    //     </div>
    //   );
    // };

    // const statusReject = () => {
    //   return (
    //     <div className="">
    //       <p className="erp_hrms_status_reject_p_color">Rejected</p>
    //     </div>
    //   );
    // };
    //  const columns = useMemo(
    //    () => [
    //      {
    //        Header: "EMPLOYEE ",
    //        accessor: "col1",
    //      },
    //      {
    //        Header: "DATE",
    //        accessor: "col2",
    //      },

    //      {
    //        Header: "LEAVE APPLIED START DATE",
    //        accessor: "col3",
    //      },
    //      {
    //        Header: "END DATE",
    //        accessor: "col4",
    //      },
    //      {
    //        Header: "LEAVE TYPE",
    //        accessor: "col5",
    //      },
    //      {
    //        Header: "ACTION",
    //        accessor: "col6",
    //      },
    //      {
    //        Header: "STATUS",
    //        accessor: "col7",
    //      },
    //    ],
    //    []
    //  );

    //  const data = useMemo(
    //    () => [
    //      {
    //        col1: "John Wick[id-jefn34jdefn3]",
    //        col2: "02/03/22",
    //        col3: "02/03/22",
    //        col4: "12/03/22",
    //        col5: "casual Leave",
    //        col6: actionIcons(),
    //        col7: statusApproval(),
    //      },
    //      {
    //        col1: "John Wick[id-jefn34jdefn3]",
    //        col2: "02/03/22",
    //        col3: "02/03/22",
    //        col4: "12/03/22",
    //        col5: "Sick Leave",
    //        col6: actionIcons(),
    //        col7: statusReject(),
    //      },
    //    ],
    //    []
    //  );
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
                      Pay Element master
                    </h5>
                  </div>
                </div>
              </div>

              <div className="row py-4 justify-content-center">
                <div className="text-center">
                  <div className="card shadow-sm">
                    <Table responsive size="sm">
                      <thead className="table__head__color ">
                        <tr>
                          <th className="supplier__product_color p-2 ">Type</th>
                          <th className="supplier__product_color p-2">
                            Element Name
                          </th>
                          <th className="supplier__product_color p-2 ">
                            Active
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td className="p-2">
                            <div className="">
                              <InputDropdown />{" "}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className=" col-12 d-flex justify-content-center align-items-center">
                              <InputType />
                            </div>
                          </td>
                          <td className="p-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">
                            <InputDropdown />{" "}
                          </td>
                          <td className="p-2">
                            <div className=" col-12 d-flex justify-content-center align-items-center">
                              <InputType />
                            </div>
                          </td>
                          <td className="p-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">
                            <InputDropdown />{" "}
                          </td>
                          <td className="p-2">
                            <div className=" col-12 d-flex justify-content-center align-items-center">
                              <InputType />
                            </div>
                          </td>
                          <td className="p-3">
                            {" "}
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">
                            <InputDropdown />{" "}
                          </td>
                          <td className="p-2">
                            <div className=" col-12 d-flex justify-content-center align-items-center">
                              <InputType />
                            </div>
                          </td>
                          <td className="p-3">
                            {" "}
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">
                            <InputDropdown />{" "}
                          </td>
                          <td className="p-2">
                            <div className=" col-12 d-flex justify-content-center align-items-center">
                              <InputType />
                            </div>
                          </td>
                          <td className="p-3">
                            {" "}
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </td>
                        </tr>
                        <tr></tr>
                        {[...Array(noofRows)].map(
                          (elementInArray, index, text) => {
                            return (
                              <tr>
                                {/* <th scope="row">{index}</th> */}
                                <td className="p-2">
                                  <InputDropdown />{" "}
                                </td>
                                <td className="p-2">
                                  <div className=" col-12 d-flex justify-content-center align-items-center">
                                    <InputType />
                                  </div>
                                </td>
                                <td className="p-3">
                                  {" "}
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
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
                </div>
              </div>
              <div className="row mt-2 py-3">
                <div className="col-12 d-flex justify-content-center">
                  <Link to={ROUTES.PAYELEMENTMASTERVIEW}>
                    <Button halfrounded={true} className="px-3">
                      Create
                    </Button>
                  </Link>
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

export default Payelementmaster