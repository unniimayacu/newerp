// import React from 'react'
import Button from "components/button/Button";
import Newcontact from "components/customersnewcontact/Newcontact";
import Header from "components/header/Header";
import Table from "components/table/Table";
import React, { useMemo } from "react";
import "./supplier.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import Makedata from "components/ddatas/Supplierdata";
function Supplier() {
  const columns = useMemo(
    () => [
      {
        Header: "Sl.No",
        accessor: "slno",
      },
      {
        Header: "NAME",
        accessor: "col1",
      },
      {
        Header: "CONTACT PERSON",
        accessor: "col2",
      },
      {
        Header: "EMAIL",
        accessor: "col3",
      },
      {
        Header: "PHONE",
        accessor: "col4",
      },
      {
        Header: "PAYMENT PERIOD",
        accessor: "col5",
      },
      {
        Header: "TAX NUMBER",
        accessor: "col6",
      },
      {
        Header: "DUE AMOUNT",
        accessor: "col7",
      },
      {
        Header: "BILL AMOUNT",
        accessor: "col8",
      },
      {
        Header: "RISK CATEGORY",
        accessor: "col9",
      },
      {
        Header: "ROI",
        accessor: "col10",
      },
      {
        Header: "ACTION",
        accessor: "col11",
      },
      {
        Header: "ACTIVE",
        accessor: "col12",
      },
    ],
    []
  );
  const data = React.useMemo(() => Makedata(), []);

  return (
    <>
      <Layout>
        <div className="container  mt-2">
          <div className="row p-0">
            <div className="row p-2 mt-3">
              <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                <div className="d-flex gap-2">
                  <h5 className="erp__h5_color ">Supplier</h5>
                  <Link to={ROUTES.ADDSUPPLIER}>
                  <Button
                    className=""
                    rounded={true}
                    appendIcon={<AiOutlinePlus />}
                  >
                    New Contact
                  </Button>
                  </Link>
                  <Button rounded={true} appendIcon={<FiUpload />}>
                    Upload Via CSV
                  </Button>
                </div>
              </div>
              <div className="  col-xl-4 col-lg-4 col-md-3 col-12">
                <div className="d-flex justify-content-end">
                  <Newcontact />
                </div>
              </div>
            </div>

            {/* <div className="row mt-4 border-bottom ">
                <div className="d-flex justify-content-start  col-xl-6 col-lg-6 col-12   py-3 ">
                  <h4 className="ms-0">Supplier</h4>
                  <div className="ms-3 ">
                    <Button appendIcon={<AiOutlinePlus />}>New Contact</Button>
                  </div>
                  <div className="ms-3 ">
                    <Button appendIcon={<FiUpload />}>Upload Via CSV</Button>
                  </div>
                </div>
                <div className="d-flex justify-content-end col-xl-6 col-lg-6 col-12 py-3">
                  <Newcontact />
                </div>
              </div> */}

            <div className="row mt-4">
              {/* <div className="container"> */}
              <div className="row ">
                {/* <div className="col-xl-12 col-xl-12  col-12"> */}
                <Table
                  data={data}
                  columns={columns}
                  PageSize={true}
                  pagination={true}
                  Sorted={true}
                  className={true}
                  responsive={true}
                  pagecenter={true}
                  // paginate={true}
                  // issorted={true}
                  // responsive={true}
                />

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Supplier;