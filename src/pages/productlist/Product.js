import Button from 'components/button/Button';
import Newcontact from 'components/customersnewcontact/Newcontact';
import Header from 'components/header/Header';
import React, { useMemo } from "react";
import "./product.scss"
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { Form } from "react-bootstrap";
import Table from 'components/table/Table';
import Makedata from "components/ddatas/Dataas";
import Layout from "Layout/Layout";


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


const productsku =()=>{
  return <div className="product_heading__space">PRODUCT SKU</div>;
}
const purchaseqty = () => {
  return <div className="product_heading__space">PURCHASE QTY</div>;
};
const salesqty = () => {
  return <div className="product_heading__space">SALES QTY</div>;
};

const recordingqty=()=>{
   return( 
   <div className="product_heading__space">SALES QTY</div>
   );
}
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
        Header: productsku(),
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
        Header: purchaseqty(),
        accessor: "col5",
      },
      {
        Header: salesqty(),
        accessor: "col6",
      },
      {
        Header: "ONHAND",
        accessor: "col7",
      },
      {
        Header: recordingqty(),
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

  return (
    <>
      {/* <div className="container-fluid"> */}
      <Layout>
        <div className="container mt-2 ">
          <div className="row p-0">
            {/* <div className="row "></div> */}

            <div className="row p-2 mt-3">
              <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                <div className="d-flex gap-1">
                  <h5 className="erp__h5_color ">Product List</h5>
                  {/* <Link to={ROUTES.CREATEEMPLOYEE}> */}
                  <Button
                    className=""
                    appendIcon={<AiOutlinePlus />}
                    rounded={true}
                  >
                    Add New Product
                  </Button>
                  {/* </Link> */}
                  <Button appendIcon={<FiUpload />} rounded={true}>
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
            {/* <div className="row mt-5 border-bottom ">
                <div className="  col-xl-6 col-lg-6 col-12   py-3 ">
                  <div className='d-flex'>
                    <h5 className="ms-0">Product List</h5>
                  
                    <Button className="ms-2" appendIcon={<AiOutlinePlus />}>
                      Add New Product{" "}
                    </Button>
                   
                    <div className="ms-3 ">
                      <Button appendIcon={<FiUpload />}>Upload Via CSV</Button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end col-xl-6 col-lg-6 col-12 py-3">
                  <Newcontact />
                </div>
              </div> */}

            <div className="row mt-5">
              {/* <div className="container">
                  <div className="row mx-2"> */}
              <div className="col-xl-12 col-xl-12  col-12"></div>
              <Table
                data={data}
                columns={columns}
                PageSize={true}
                pagination={true}
                Sorted={true}
                className={true}
                responsive={true}
                pagecenter={true}
                //  paginate={true}
                // issorted={true}
              />
              {/* </div>
                </div> */}
            </div>

            <div className="row"></div>
          </div>
        </div>
      </Layout>
      {/* </div> */}
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