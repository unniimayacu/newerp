import React from 'react'
import Layout from "Layout/Layout";
import "./OverTimeMaster.scss";

function OverTimeMaster() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_otmaster">
          <div className="row mt-3">
            <h6 className="otmaster_view_heading">OverTime Rate Master</h6>
            <div className="row mt-4 justify-content-between">
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Emp Category
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 otmaster_sub_p_color">Worker</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Normal OT Hours
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 otmaster_sub_p_color">4</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Bonus OT Applicable
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 otmaster_sub_p_color">yes</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Normal OT Rate
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 otmaster_sub_p_color">1.25</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Bouns OT Rate
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 otmaster_sub_p_color">1.50</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Weekend Holiday OT Rate
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 otmaster_sub_p_color">1.50</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Public Holiday OT Rate
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 otmaster_sub_p_color">2.0</td>
                  </tr>

                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Status
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 otmaster_sub_active_p_color">
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

export default OverTimeMaster



// // {  <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="otmaster_p_color">Emp Category</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="otmaster_sub_p_color">Worker</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="otmaster_p_color">Normal OT Hours</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="otmaster_sub_p_color">4</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="otmaster_p_color">Bonus OT Applicable</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="otmaster_sub_p_color">yes</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="otmaster_p_color">Normal OT Rate</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="otmaster_sub_p_color">1.25</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="otmaster_p_color">Bonus OT Rate</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="otmaster_sub_p_color">1.50</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="otmaster_p_color">Weekend Holiday OT Rate</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="otmaster_sub_p_color">1.50</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="otmaster_p_color">Public Holiday OT Rate</p>
//                   </div>
//                 </div>
//                 <div className="col-1">:</div>
//                 <div className="col-5">
//                   <div className="">
//                     <p className="otmaster_sub_p_color">2.0</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="row justify-content-between">
//               <div className=" d-flex">
//                 <div className="col-3">
//                   <div className="">
//                     <p className="otmaster_p_color">Status</p>
//                   </div>
//                 </div>
//                 <div className="col-1 d-flex justify-content-start">:</div>
//                 <div className="col-5 ms-0">
//                   <div className="">
//                     <p className="otmaster_sub_active_p_color">Active</p>
//                   </div>
//                 </div>
//               </div>}