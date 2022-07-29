
import Button from "components/button/Button";
import Newcontact from "components/customersnewcontact/Newcontact";
import Header from "components/header/Header";
import Table from "components/table/Table";
import React, { useMemo } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import Makedata from "components/ddatas/Saleenquirydata";
function Salesenquirylist() {

     const columns = useMemo(
       () => [
         {
           Header: "Sl.No",
           accessor: "slno",
         },
         {
           Header: "SALE ENQUIRY NO:",
           accessor: "col1",
         },
         {
           Header: "CUSTOMER",
           accessor: "col2",
         },
         {
           Header: "DATE",
           accessor: "col3",
         },
         {
           Header: "BRANCH/WAREHOUSE",
           accessor: "col4",
         },
         {
           Header: "CREATED BY",
           accessor: "col5",
         },
         {
           Header: "EXPECTED DELIVERY DATE",
           accessor: "col6",
         },
         {
           Header: "ACTION",
           accessor: "col7",
         },
         
        
       ],
       []
     );
      const data = React.useMemo(() => Makedata(), []);
      
        // const data = useMemo(
        //   () => [
        //     {
        //       slno: "1",
        //       col1: "233",
        //       col2: "johnwilson",
        //       col3: "22/03/22",
        //       col4: "actionI",
        //       col5: "activeSwi",
        //       col6: "28/09/22",
        //       col7: "activeSwi",
        //     },
        //     {
        //       slno: "2",
        //       col1: "243",
        //       col2: "Joy mathew",
        //       col3: "28/09/22",
        //       col4: "actionI",
        //       col5: "activeSwi",
        //       col6: "28/09/22",
        //       col7: "activeSwi",
        //     },
        //   ],
        //   []
        // );

  return (
    <>
      <Layout>
        <div className="container  mt-2">
          <div className="row p-0">
            <div className="row p-2 mt-3">
              <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                <div className="d-flex gap-2">
                  <h5 className="erp__h5_color ">Sale Enquiry</h5>
                  <Link to={ROUTES.ADDSUPPLIER}>
                    <Button
                      className=""
                      rounded={true}
                      appendIcon={<AiOutlinePlus />}
                    >
                      New Sale Enquiry
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="  col-xl-4 col-lg-4 col-md-3 col-12">
                <div className="d-flex justify-content-end">
                  <Newcontact />
                </div>
              </div>
            </div>

            <div className="row mt-4">
              {/* <div className="container"> */}
              <div className="col-xl-12 col-xl-12  col-12  ">
                <div className="text-center">
                  <Table
                    data={data}
                    columns={columns}
                    PageSize={true}
                    pagination={true}
                    Sorted={true}
                    className={true}
                    responsive={true}
                    pagecenter={true}
                    // Tbody_style={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Salesenquirylist