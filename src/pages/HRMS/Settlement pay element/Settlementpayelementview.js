import React from "react";
import Layout from "Layout/Layout";
import { Table } from "react-bootstrap";

function Settlementpayelementview() {

    
  return (
    <>
      <Layout>
        <div className="container  container_empcategory">
          <div className="row mt-3">
            <div className="card shadow-sm border border-2">
              <h5 className=" py-3 erp__h5_color">Settlement Pay Element</h5>
              <div className="row mt-4 justify-content-between">
                <div className="row">
                  <div className=" col-xl-4 col-lg-4 col-12">
                    <table class="table">
                      <thead></thead>
                      <tbody>
                        <tr className="border-0">
                          <th scope="row" className="border-0">
                            Settlement type
                          </th>
                          <td className="border-0">:</td>
                          <td className="border-0 empcategory_sub_p_color">
                            Leave salary settlement
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className=" col-xl-4 col-lg-4 col-12">
                    <table class="table">
                      <thead></thead>
                      <tbody>
                        <tr className="border-0">
                          <th scope="row" className="border-0">
                            Status
                          </th>
                          <td className="border-0">:</td>
                          <td className="border-0 erp_status_active_p_color">
                            Active
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row py-4 justify-content-center">
                <div className="text-center">
                  <div className="col-xl-4 col-lg-4 col-12">
                    <div className="card shadow ">
                      <Table responsive size="sm">
                        <thead className=" ">
                          <tr>
                            <th className=" p-1 ">Earnings</th>

                            <th className="p-1 ">Active</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Basic</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Basic</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Loan</td>
                            <td>Yes</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Settlementpayelementview;
