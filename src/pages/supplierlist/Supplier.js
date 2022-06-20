// import React from 'react'
import Button from "components/button/Button";
import Newcontact from "components/customersnewcontact/Newcontact";
import Header from "components/header/Header";
import Table from "components/table/Table";
import React, { useMemo } from "react";
import "./supplier.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

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

  //  const {
  //   //  canPreviousPage,
  //   //  canNextPage,
  //   //  pageOptions,
  //   //  pageCount,
  //   //  gotoPage,
  //   //  nextPage,
  //    previousPage,
  //    setPageSize,
  //    state: { pageIndex, pageSize },
  //  } = useTable(
  //    {
  //      columns,
  //      data,
  //      initialState: { pageIndex: 2 },
  //    },
  //    usePagination
  //  );
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row ">
              {/* <div className=""> */}
              <Header />
              {/* </div> */}
            </div>
            <div className="container">
              <div className="row mt-5 border-bottom ">
                <div className="d-flex justify-content-start  col-xl-6 col-lg-6 col-12   py-3 ">
                  <h5 className="ms-0">Supplier</h5>
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
              </div>
              <div className="row mt-5">
               
                <div className="container">
                  <div className="row ">
                    {/* <div className="col-xl-12 col-xl-12  col-12"> */}
                    <Table
                      data={data}
                      columns={columns}
                      // paginate={true}
                      issorted={true}
                      // responsive={true}
                    />

                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supplier