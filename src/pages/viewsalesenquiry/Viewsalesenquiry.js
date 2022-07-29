import Layout from "Layout/Layout";
import React from "react";
import "./viewsalesenquiry.scss";
import Button from "components/button/Button";
import { AiFillPrinter } from "react-icons/ai";
import { Table } from "react-bootstrap";
function Viewsalesenquiry() {
  return (
    <div>
      <Layout>
        <div className="container">
          <div className="row py-4 ">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className=" d-flex justify-content-between">
                <h4>View Sales Enquiry</h4>
                <Button
                  className="px-4"
                  rounded={true}
                  appendIcon={<AiFillPrinter />}
                >
                  Print
                </Button>
              </div>
            </div>
            <div className="row py-4">
              <div className="text-center">
                <Table responsive bordered size="sm">
                  <thead className="tablethread">
                    <tr className="tablerow">
                      <th className="tablehead">Sales Enquiry Number</th>
                      <th className="tablehead">Customer</th>
                      <th className="tablehead">Branch/warehouse</th>
                      <th className="tablehead">Date</th>
                      <th className="tablehead">Date Valid till</th>
                    </tr>
                  </thead>
                  <tbody className="py-3">
                    <tr className="tablerow1 p-2">
                      <td className="tablerow1 p-2  ">
                        <span className="view__enquiry__number">02</span>
                      </td>
                      <td className="tablerow1 p-2">Customer</td>
                      <td className=" tablerow1 p-2">Branch</td>
                      <td className=" tablerow1 p-2">12/03/2022</td>
                      <td className="tablerow1 p-2">12/03/2022</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Viewsalesenquiry;
