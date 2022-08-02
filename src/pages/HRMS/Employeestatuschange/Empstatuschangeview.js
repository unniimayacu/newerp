import React from 'react'
import Layout from "Layout/Layout";

function Empstatuschangeview() {
  return (
    <>
      <Layout>
        <div className="container  container_designation">
          <div className="row py-3">
            <div className="card shadow-sm border border-2">
              <div className="row mt-2 py-1">
                <h5 className="erp__h5_color">Employee Status change</h5>
              </div>
              <div className="row py-4 justify-content-between">
                <div className="col-xl-6 col-lg-6 col-md-9 col-12">
                  <table class="table">
                    <thead></thead>
                    <tbody>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          Employee
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          Worker
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          Employee Name
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          John
                        </td>
                      </tr>

                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          Date
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          02/07/2022
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          Working Status
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          Resignation
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          Last Working Date
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          04/07/2022
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Empstatuschangeview