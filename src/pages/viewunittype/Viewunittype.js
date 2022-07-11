import React from "react";
import Layout from "Layout/Layout";

function Viewunittype() {
  return (
    <>
      <Layout>
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row mt-5   ">
              <div className="col-xl-2 col-lg-2 col-12 mt-0 p-0 mx-3 border-end  ">
                <h5>Unit Type</h5>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-12  ">
                <table class="table">
                  <thead></thead>
                  <tbody>
                    <tr className="border-0  ">
                      <th scope="row" className="border-0">
                        Symbol
                      </th>
                      <td className="border-0">:</td>
                      <td className="border-0 department_sub_p_color">Kg</td>
                    </tr>
                    <tr className="border-0  ">
                      <th scope="row" className="border-0">
                        Unit Category
                      </th>
                      <td className="border-0">:</td>
                      <td className="border-0 department_sub_p_color">
                        Category
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

export default Viewunittype;
