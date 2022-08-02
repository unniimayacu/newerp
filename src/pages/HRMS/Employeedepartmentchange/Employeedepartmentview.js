import React from 'react'
import Layout from "Layout/Layout";

function Employeedepartmentview() {
  return (
    <>
      <Layout>
        <div className="container  container_designation">
          <div className="row py-3">
            <div className="card shadow-sm border border-2">
              <div className="row mt-2 py-1">
                <h5 className="erp__h5_color">Employee Department change</h5>
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
                          Current Department
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          Finance
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          Current Designation
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          Employee
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          New Department
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          Sales
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          New Designation
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          Manager
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          With Effective Form
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          05/07/2022
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          Remarks
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 designation_sub_p_color">
                          Simply dummy text of printing
                        </td>
                      </tr>
                      <tr className="border-0">
                        <th scope="row" className="border-0">
                          Status
                        </th>
                        <td className="border-0">:</td>
                        <td className="border-0 erp_status_active_p_color">
                          Approved
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

export default Employeedepartmentview