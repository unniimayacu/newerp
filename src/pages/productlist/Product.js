import Button from 'components/button/Button';
import Newcontact from 'components/customersnewcontact/Newcontact';
import Header from 'components/header/Header';
import React, { useMemo } from "react";
import {
  useTable,
  usePagination,

} from "react-table/dist/react-table.development";
import "./product.scss"
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { Form } from "react-bootstrap";
import Table from 'components/table/Table';
import Makedata from "components/ddatas/Dataas";


// const actionIcons = () => {
//   return (
//     <div className="d-flex align-items-center justify-content-center ">
//       <span className="cust_icon_edit  ">
//         <BsPencilSquare />
//       </span>
//       <span className="cust_icon_edit ms-2">
//         <RiFileSearchFill />{" "}
//       </span>
//       <span className="cust_icon_edit ms-2">
//         <AiFillPrinter />{" "}
//       </span>
//     </div>
//   );
// };
// const activeSwitch = () => {
//   return (
//     <div className="custswitch_color">
//       <Form.Check type="switch" id="custom-switch" />
//     </div>
//   );
// };
function Product() {

//   const data = useMemo(
//     () => [
//       {
//         slno: 1,
//         col1: "ann",
//         col2: "Contact Person",
//         col3: "Email",
//         col4: "Phone",
//         col5: "Payment Period",
//         col6: "Tax Number",
//         col7: "Credit Limit",
//         col8: "Payment Type",
//         col9: actionIcons(),
//         col10: activeSwitch(),
//       },
    
//     ],
//     []
//   );
  const columns = useMemo(
    () => [
      {
        Header: "Sl.No",
        accessor: "slno",
      },
      {
        Header: "PRODUCT",
        accessor: "col1",
      },
      {
        Header: "PRODUCT SKU",
        accessor: "col2",
      },
      {
        Header: "DIMENSION",
        accessor: "col3",
      },
      {
        Header: "SUPPLIER",
        accessor: "col4",
      },
      {
        Header: "PURCHASE QUANTITY",
        accessor: "col5",
      },
      {
        Header: "SALES QUANTITY",
        accessor: "col6",
      },
      {
        Header: "ONHAND",
        accessor: "col7",
      },
      {
        Header: "RECORDING QUANTITY",
        accessor: "col8",
      },
      {
        Header: "ACTION",
        accessor: "col9",
      },
      {
        Header: "ACTIVE",
        accessor: "col10",
      },
    ],
    []
  );

   const data = React.useMemo(()=>Makedata(),[])

//   const {
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 2 },
//     },
//     usePagination
//   );

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
            <div className="row mt-5 border-bottom ">
              <div className="d-flex justify-content-start  col-xl-6 col-lg-6 col-12   py-3 ">
                <h5 className="ms-0">Product List</h5>
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
              {/* <div className="col-4  ">
                <select
                  className="p-2 px-3 select__custom "
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show Entries | {pageSize}
                    </option>
                  ))}
                </select>
              </div> */}
              <div className="col-xl-12 col-xl-12  col-12"></div>
              <Table
                data={data}
                columns={columns}
               
                issorted={true}
              />
            </div>
            <div className="row">
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product

//{
    //     slno: 2,
    //     col1: "anna",
    //     col2: "Contact Person",
    //     col3: "Email",
    //     col4: "Phone",
    //     col5: "Payment Period",
    //     col6: "Tax Number",
    //     col7: "Credit Limit",
    //     col8: "Payment Type",
    //     // col9: "Ue Amount",
    //     // col10: "Invoiced Amount",
    //     // col11: "34",
    //     // col12: "RoI",
    //     col9: actionIcons(),
    //     col10: activeSwitch(),
    //   },
    //   {
    //     slno: 3,
    //     col1: "Name",
    //     col2: "Contact Person",
    //     col3: "Email",
    //     col4: "Phone",
    //     col5: "Payment Period",
    //     col6: "Tax Number",
    //     col7: "Credit Limit",
    //     col8: "Payment Type",
    //     // col9: "Ue Amount",
    //     // col10: "Invoiced Amount",
    //     // col11: "34",
    //     // col12: "RoI",
    //     col9: actionIcons(),
    //     col10: activeSwitch(),
    //   },