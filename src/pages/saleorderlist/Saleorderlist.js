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
import Makedata from "components/ddatas/Saleorderdata";

function Saleorderlist() {
         const columns = useMemo(
           () => [
             {
               Header: "ACTION",
               accessor: "action",
             },
             {
               Header: "Sl.No",
               accessor: "slno",
             },
             {
               Header: "ORDER NO:",
               accessor: "col1",
             },
             {
               Header: "DATE",
               accessor: "col2",
             },
             {
               Header: "CUSTOMER",
               accessor: "col3",
             },
             {
               Header: "BRANCH/WAREHOUSE",
               accessor: "col4",
             },
             {
               Header: "SALES PERSON",
               accessor: "col5",
             },
             {
               Header: "TOTAL AMOUNT",
               accessor: "col6",
             },
              {
                Header: "INVOICE STATUS",
                accessor: "status",
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
            <div className="row p-2 mt-3  ">
              <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                <div className="d-flex gap-2">
                  <h5 className="erp__h5_color ">Sale Order List</h5>
                  <Link to={ROUTES.ADDSALEORDER}>
                    <Button
                      className=""
                      rounded={true}
                      appendIcon={<AiOutlinePlus />}
                    >
                      New Sale Order
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

export default Saleorderlist