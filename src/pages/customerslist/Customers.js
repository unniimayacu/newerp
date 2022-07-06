import Button from "components/button/Button";
import Newcontact from "components/customersnewcontact/Newcontact";
import Header from "components/header/Header";
import Table from "components/table/Table";
import React, { useMemo } from "react";
import "./customers.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Makedata from "components/ddatas/Customerdatas";
import Layout from "Layout/Layout";
// import { RiFileSearchFill } from "react-icons/ri";
// import { BsPencilSquare } from "react-icons/bs";
// import { AiFillPrinter } from "react-icons/ai";
// import {Form } from "react-bootstrap"

// const actionIcons = () => {
//   return (
//     <div className="d-flex align-items-center">
//       <span className="cust_icon_edit ms-2">
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
// }
// const activeSwitch =() =>{
//   return (
//     <div className="custswitch_color">
//       <Form.Check type="switch" id="custom-switch"  />
//     </div>
//   );
// }

// const riskcategoryred = () => {
//   return <div className="cust_riskred_color  "></div>;
// };
// const riskcategorygreen = () => {
//   return <div className="cust_riskgreen_color  "></div>;
// };
// const riskcategoryyellow = () => {
//   return <div className=" cust_riskyellow_color"></div>;
// };

const contactperson = () => {
  return <div className="product_heading__space">CONTACT PERSON</div>;
};
const paymentperiod = () => {
  return <div className="product_heading__space">PAYMENT PERIOD</div>;
};
const creditLimit = () => {
  return <div className="product_heading__space">CREDIT LIMIT</div>;
};
const paymentType = () => {
  return <div className="product_heading__space">PAYMENT TYPE</div>;
};
const ueamount = () => {
  return <div className="product_heading__space">UE AMOUNT</div>;
};
const invoicedamount = () => {
  return <div className="product_heading__space">INVOICED AMOUNT</div>;
};

function Customers() {
  // const data = useMemo(
  //   () => [
  //     {
  //       slno: 1,
  //       col1: "ann",
  //       col2: "Contact Person",
  //       col3: "Email",
  //       col4: "Phone",
  //       col5: "Payment Period",
  //       col6: "Tax Number",
  //       col7: "Credit Limit",
  //       col8: "Payment Type",
  //       col9: "Ue Amount",
  //       col10: "Invoiced Amount",
  //       col11: riskcategoryred(),
  //       col12: "RoI",
  //       col13: actionIcons(),
  //       col14: activeSwitch(),
  //     },
  //   ],
  //   []
  // );
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
        Header: contactperson(),
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
        Header: paymentperiod(),
        accessor: "col5",
      },
      {
        Header: "TAX NUMBER",
        accessor: "col6",
      },
      {
        Header: creditLimit(),
        accessor: "col7",
      },
      {
        Header: paymentType(),
        accessor: "col8",
      },
      {
        Header: ueamount(),
        accessor: "col9",
      },
      {
        Header: invoicedamount(),
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
  const data = React.useMemo(() => Makedata(), []);

  return (
    // <div className="container-fluid">
    <Layout>
      <div className="container mt-2">
        <div className="row p-2 mt-3">
          <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
            <div className="d-flex gap-2">
              <h5 className="erp__h5_color ">Customers</h5>
              {/* <Link to={ROUTES.CREATEEMPLOYEE}> */}
              <Button
                className=""
                rounded={true}
                appendIcon={<AiOutlinePlus />}
              >
                New Contact
              </Button>
              {/* </Link> */}
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
        {/* <div className="row  border-bottom ">
          <div className="d-flex justify-content-start  col-xl-6 col-lg-6 col-12   py-3 ">
            <h5 className="ms-0">Customers</h5>
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
          {/* <div className="row "> */}
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
          />
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </Layout>
    // </div>
  );
}

export default Customers;

//RiFileSearchFill
//BsPencilSquare
