// import React from 'react'
import { React, useMemo } from "react";
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";

import { FiUpload } from "react-icons/fi";
import DesignationData from "../../../components/ddatas/Hrms_Dummy_datas/HrmsdesignationTabledata";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";

import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";

function Payelementmasterview() {
  const columns = useMemo(
    () => [
      {
        Header: "Type",
        accessor: "Type",
      },
      {
        Header: "Element Name",
        accessor: "Element",
      },
      {
        Header: "Active",
        accessor: "Active",
      },
    ],
    []
  );
//    const data = useMemo(() => DesignationData(), []);
    const data = useMemo(
      () => [
        {
          Type: "fixed earnings",
          Element: "basic",
          Active: "yes",
        },
        {
          Type: "fixed earnings",
          Element: "basic",
          Active: "yes",
        },
        {
          Type: "fixed earnings",
          Element: "basic",
          Active: "yes",
        },
      ],
      []
    );
  return (
    <>
      <Layout>
        <div className="container mt-2 justify-content-center ">
          <div className="row justify-content-center">
            <div className="card shadow-sm border border-2">
              <div className="row p-2 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                  <div className="d-flex gap-2">
                    <h5 className="erp__h5_color "> Pay Element master</h5>
                  </div>
                </div>
              </div>

              <div className="row mt-5 justify-content-center mx-3">
                <div className="card shadow-sm">
                  <div className="text-center">
                    <Table
                      data={data}
                      columns={columns}
                      PageSize={false}
                      pagination={false}
                      Sorted={false}
                      className={true}
                      responsive={true}
                      pagecenter={false}
                      Tbody_style={true}
                    />
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

export default Payelementmasterview