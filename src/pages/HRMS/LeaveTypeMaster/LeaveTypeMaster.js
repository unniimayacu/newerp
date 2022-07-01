import React from 'react'
import "./LeaveTypeMaster.scss";
import Layout from "Layout/Layout";

function LeaveTypeMaster() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_leavetypemaster">
          <div className="row mt-3">
            <h6 className="leavetypemaster_view_heading">Leave Type Master</h6>
            <div className="row mt-4 justify-content-between">
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Leave Type
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leavetypemaster_sub_p_color">
                      Casual Leave
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Leave Category
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leavetypemaster_sub_p_color">
                      Paid
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Eligible Days
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leavetypemaster_sub_p_color">4</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Follow Leave Approval System
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leavetypemaster_sub_p_color">
                      yes
                    </td>
                  </tr>

                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Status
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leavetypemaster_sub_active_p_color">
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

export default LeaveTypeMaster





// {
//   iv className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="leavetypemaster_p_color">Leave Type</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="leavetypemaster_sub_p_color">Casual</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="leavetypemaster_p_color">Leave Category</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="leavetypemaster_sub_p_color">Paid</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="leavetypemaster_p_color">Eligible Days</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="leavetypemaster_sub_p_color">4</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="leavetypemaster_p_color">
//                       Follow Leave Approval System
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="leavetypemaster_sub_p_color">yes</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="leavetypemaster_p_color">Status</p>
//                   </div>
//                 </div>
//                 <div className="col-1 d-flex justify-content-start">:</div>
//                 <div className="col-5 ms-0">
//                   <div className="">
//                     <p className="leavetypemaster_sub_active_p_color">Active</p>
//                   </div>
//                 </div>
//               </div>
// }