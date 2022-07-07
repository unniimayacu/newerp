import React from 'react'
import Layout from "Layout/Layout";
import "./empcategoryleaves.scss";
function Empcategoryleaves() {
  return (
    <>
      <Layout>
        <div className="container  container_designation">
          <div className="row py-3">
            <h5 className="erp__h5_color">Employee Category Leaves</h5>
            <div className="row py-4 justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                <table class="table">
                  <thead></thead>
                  <tbody>
                    <tr className="border-0">
                      <th scope="row" className="border-0">
                        Leave Type
                      </th>
                      <td className="border-0">:</td>
                      <td className="border-0 designation_sub_p_color">
                        Casual
                      </td>
                    </tr>
                    <tr className="border-0">
                      <th scope="row" className="border-0">
                        Employee Category
                      </th>
                      <td className="border-0">:</td>
                      <td className="border-0 designation_sub_p_color">
                        Worker
                      </td>
                    </tr>

                    <tr className="border-0">
                      <th className="border-0" scope="row">
                        Status
                      </th>
                      <td className="border-0">:</td>
                      <td className="border-0 designation_sub_active_p_color">
                        Active
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Empcategoryleaves