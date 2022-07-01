import React from 'react'
import Layout from "Layout/Layout";
import "./EmployeeCategory.scss";

function EmployeeCategory() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_empcategory">
          <div className="row mt-3">
            <h6 className="empcategory_view_heading">Employee Category</h6>
            <div className="row mt-4 justify-content-between">
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Category Code
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 empcategory_sub_p_color">
                      JK-2232242225
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Category
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 empcategory_sub_p_color">Worker</td>
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

export default EmployeeCategory



//     <div className=" d-flex">
            //     <div className="col-2">
            //       <div className="">
            //         <p className="empcategory_p_color">Category Code</p>
            //       </div>
            //     </div>
            //     <div className="col-1">:</div>
            //     <div className="col-6">
            //       <div className="">
            //         <p className="empcategory_sub_p_color">JK-2232242225</p>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            // <div className="row justify-content-between">
            //   <div className=" d-flex">
            //     <div className="col-2">
            //       <div className="">
            //         <p className="empcategory_p_color">Category</p>
            //       </div>
            //     </div>
            //     <div className="col-1">:</div>
            //     <div className="col-6">
            //       <div className="">
            //         <p className="empcategory_sub_p_color">Worker</p>
            //       </div>
            //     </div>
            //   </div>
            // </div>

            // <div className="row justify-content-between">
            //   <div className=" d-flex">
            //     <div className="col-2">
            //       <div className="">
            //         <p className="empcategory_p_color">Status</p>
            //       </div>
            //     </div>
            //     <div className="col-1 d-flex justify-content-start">:</div>
            //     <div className="col-6 ms-0">
            //       <div className="">
            //         <p className="empcategory_sub_active_p_color">Active</p>
            //       </div>
            //     </div>
            //   </div>