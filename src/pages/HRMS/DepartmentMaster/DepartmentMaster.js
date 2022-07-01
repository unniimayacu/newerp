import React from 'react'
import Layout from "Layout/Layout";

function DepartmentMaster() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_department">
          <div className="row mt-3">
            <h6 className="department_view_heading">Department</h6>
            <div className="row mt-4 justify-content-between">
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Department Code
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 department_sub_p_color">
                      JK-2232242225
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Name
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 department_sub_p_color">
                      Purchase
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Details
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 department_sub_p_color">
                      lorem ispum is dummy text regards on the purpose
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Status
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 department_sub_active_p_color">
                      Active
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th
                      className="border-0 department_sec_heading_color_blue"
                      scope="row"
                    >
                      Department Head
                    </th>
                  </tr>
                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Employee ID
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 department_sub_p_color">
                      JK-2232242225
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Employee Name
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 department_sub_p_color">
                      John Wick
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

export default DepartmentMaster






  // <div className=" d-flex">
  //               <div className="col-2">
  //                 <div className="">
  //                   <p className="department_p_color">Department Code</p>
  //                 </div>
  //               </div>
  //               <div className="col-1">:</div>
  //               <div className="col-6">
  //                 <div className="">
  //                   <p className="department_sub_p_color">JK-2232242225</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="row justify-content-between">
  //             <div className=" d-flex">
  //               <div className="col-2">
  //                 <div className="">
  //                   <p className="department_p_color">Name</p>
  //                 </div>
  //               </div>
  //               <div className="col-1">:</div>
  //               <div className="col-6">
  //                 <div className="">
  //                   <p className="department_sub_p_color">Purchase</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="row justify-content-between">
  //             <div className=" d-flex">
  //               <div className="col-2">
  //                 <div className="">
  //                   <p className="department_p_color">Details</p>
  //                 </div>
  //               </div>
  //               <div className="col-1">:</div>
  //               <div className="col-6">
  //                 <div className="">
  //                   <p className="department_sub_p_color">
  //                     lorem ispum is dummy text regards on the purpose
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="row justify-content-between">
  //             <div className=" d-flex">
  //               <div className="col-2">
  //                 <div className="">
  //                   <p className="department_p_color">Status</p>
  //                 </div>
  //               </div>
  //               <div className="col-1 d-flex justify-content-start">:</div>
  //               <div className="col-6 ms-0">
  //                 <div className="">
  //                   <p className="department_sub_active_p_color">Active</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="row justify-content-between">
  //             <p className="department_sec_heading_color_blue mt-2">Department Head</p>
  //             <div className=" d-flex">
  //               <div className="col-2">
  //                 <div className="">
  //                   <p className="department_p_color">Employee ID</p>
  //                 </div>
  //               </div>
  //               <div className="col-1">:</div>
  //               <div className="col-6">
  //                 <div className="">
  //                   <p className="department_sub_p_color">JK-2232242225</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="row justify-content-between">
  //             <div className=" d-flex">
  //               <div className="col-2">
  //                 <div className="">
  //                   <p className="department_p_color">Employee Name</p>
  //                 </div>
  //               </div>
  //               <div className="col-1">:</div>
  //               <div className="col-6">
  //                 <div className="">
  //                   <p className="department_sub_p_color">John Wick</p>
  //                 </div>
  //               </div>
  //             </div>