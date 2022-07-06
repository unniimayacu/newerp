import React from 'react'
import Layout from "Layout/Layout";
import "./HolidayMaster.scss";

function HolidayMaster() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_empcategory">
          <div className="row mt-3">
            <h6 className="empcategory_view_heading">Holiday Master</h6>
            <div className="row mt-4 justify-content-between">
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Holiday Name
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 empcategory_sub_p_color">Onam</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Description
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 empcategory_sub_p_color">
                      Iorem ispem id sometime is that of the part of the that
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Date
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 empcategory_sub_p_color">
                      22/03/2022
                    </td>
                  </tr>

                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Status
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 empcategory_sub_active_p_color">
                      Active
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default HolidayMaster