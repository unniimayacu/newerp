import React from 'react'
import Layout from "Layout/Layout";
import "./SectorMaster.scss";

function SectorMaster() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_sectormaster">
          <div className="row mt-3">
            <h6 className="sectormaster_view_heading">Sector Master</h6>
            <div className="row mt-4 justify-content-between">
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Sector Name
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 sectormaster_sub_p_color">
                      DBX-COK-DBX
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Sector Start Place
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 sectormaster_sub_p_color">DBX</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Sector End Place
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 sectormaster_sub_p_color">COX</td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Employee Category
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 sectormaster_sub_p_color">
                      Worker
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Rate
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 sectormastersub_p_color">1150</td>
                  </tr>

                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Status
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 sectormaster_sub_active_p_color">
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

export default SectorMaster






      //  <div className=" d-flex">
      //           <div className="col-2">
      //             <div className="">
      //               <p className="sectormaster_p_color">Sector Name</p>
      //             </div>
      //           </div>
      //           <div className="col-1">:</div>
      //           <div className="col-6">
      //             <div className="">
      //               <p className="sectormaster_sub_p_color">DBX-COK-DBX</p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="row justify-content-between">
      //         <div className=" d-flex">
      //           <div className="col-2">
      //             <div className="">
      //               <p className="sectormaster_p_color">Sector Start Place</p>
      //             </div>
      //           </div>
      //           <div className="col-1">:</div>
      //           <div className="col-6">
      //             <div className="">
      //               <p className="sectormaster_sub_p_color">DBX</p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="row justify-content-between">
      //         <div className=" d-flex">
      //           <div className="col-2">
      //             <div className="">
      //               <p className="sectormaster_p_color">Sector End Place</p>
      //             </div>
      //           </div>
      //           <div className="col-1">:</div>
      //           <div className="col-6">
      //             <div className="">
      //               <p className="sectormaster_sub_p_color">COK</p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="row justify-content-between">
      //         <div className=" d-flex">
      //           <div className="col-2">
      //             <div className="">
      //               <p className="sectormaster_p_color">Employee Category</p>
      //             </div>
      //           </div>
      //           <div className="col-1">:</div>
      //           <div className="col-6">
      //             <div className="">
      //               <p className="sectormaster_sub_p_color">Worker</p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="row justify-content-between">
      //         <div className=" d-flex">
      //           <div className="col-2">
      //             <div className="">
      //               <p className="sectormaster_p_color">Rate</p>
      //             </div>
      //           </div>
      //           <div className="col-1">:</div>
      //           <div className="col-6">
      //             <div className="">
      //               <p className="sectormaster_sub_p_color">1150</p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
         

      //       <div className="row justify-content-between">
      //         <div className=" d-flex">
      //           <div className="col-2">
      //             <div className="">
      //               <p className="sectormaster_p_color">Status</p>
      //             </div>
      //           </div>
      //           <div className="col-1 d-flex justify-content-start">:</div>
      //           <div className="col-6 ms-0">
      //             <div className="">
      //               <p className="sectormaster_sub_active_p_color">Active</p>
      //             </div>
      //           </div>
      //         </div>