import Button from "components/button/Button";
import Newcontact from "components/customersnewcontact/Newcontact";
import Header from "components/header/Header";
import Table from "components/table/Table";
import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
} from "react-table/dist/react-table.development";
import "./customers.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Dataas from "components/dummydata/Dataas";

const actionIcons = () => {
  return (
    <div className="d-flex align-items-center">
      <span>a</span><span>b</span><span>c</span>
    </div>
  );
}

function Customers() {
  const data = useMemo(
    () => [
      {
        slno: 1,
        col1: "Name",
        col2: "Contact Person",
        col3: "Email",
        col4: "Phone",
        col5: "Payment Period",
        col6: "Tax Number",
        col7: "Credit Limit",
        col8: "Payment Type",
        col9: "Ue Amount",
        col10: "Invoiced Amount",
        col11: "Risk Category",
        col12: "RoI",
        col13: actionIcons(),
        col14: "Active",
      },
      // {
      //   slno: 2,
      //   col1: "Name",
      //   col2: "Contact Person",
      //   col3: "Email",
      //   col4: "Phone",
      //   col5: "Payment Period",
      //   col6: "Tax Number",
      //   col7: "Credit Limit",
      //   col8: "Payment Type",
      //   col9: "Ue Amount",
      //   col10: "Invoiced Amount",
      //   col11: "Risk Category",
      //   col12: "RoI",
      //   col13: "Action",
      //   col14: "Active",
      // },
    ],
    []
  );
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
        Header: "CREDIT LIMIT",
        accessor: "col7",
      },
      {
        Header: "PAYMENT TYPE",
        accessor: "col8",
      },
      {
        Header: "UE AMOUNT",
        accessor: "col9",
      },
      {
        Header: "INVOICED AMOUNT",
        accessor: "col10",
      },
      {
        Header: "RISK CATEGORY",
        accessor: "col11",
      },
      {
        Header: "ROI",
        accessor: "col12",
      },
      {
        Header: "ACTION",
        accessor: "col13",
      },
      {
        Header: "ACTIVE",
        accessor: "col14",
      },
    ],
    []
  );
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-xl-12 col-lg-12 col-12">
          <div className="row ">
            {/* <div className=""> */}
            <Header />
            {/* </div> */}
          </div>
          <div className="row mt-5 border-bottom ">
            <div className="d-flex justify-content-start  col-xl-6 col-lg-6 col-12   py-3 ">
              <h5 className="ms-0">Customers</h5>
              <div className="ms-3 ">
                <Button appendIcon={<AiOutlinePlus />}>New Contact</Button>
              </div>
              <div className="ms-3 ">
                <Button appendIcon={<FiUpload />}>Upload Via CSV</Button>
              </div>
            </div>
            <div className="d-flex col-xl-6 col-lg-6 col-12 py-3">
              <Newcontact />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-4  ">
              <select
                className="p-2 px-3 select__custom "
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show Entries | {pageSize}
                  </option>
                ))}
              </select>
            </div>

            <Table data={data} columns={columns} />
          </div>
          <div className="row">
            <div className="d-flex  justify-content-center">
              <span
                onClick={() => gotoPage(0)}
                disabled={canPreviousPage}
                className="material-icons p-2 "
              >
                chevron_left
              </span>
              <span
                onClick={() => previousPage()}
                disabled={canPreviousPage}
                className="cust__icon  p-2 px-3"
              >
                1
              </span>
              <span
                onClick={() => nextPage()}
                disabled={canNextPage}
                className="  p-2 px-3"
              >
                2
              </span>
              <span
                onClick={() => nextPage()}
                disabled={canNextPage}
                className="p-2  px-3"
              >
                3
              </span>
              <span
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className="material-icons p-2"
              >
                chevron_right
              </span>
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;

//RiFileSearchFill
//BsPencilSquare

  // <Form.Check type="switch" id="custom-switch" label="Check this switch" />;