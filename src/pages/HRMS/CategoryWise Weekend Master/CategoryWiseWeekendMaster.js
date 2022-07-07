import Layout from 'Layout/Layout'
import React from 'react'

function CategoryWiseWeekendMaster() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_category_wise">
          <div className="row mt-3">
            <h6 className="category_wise_view_heading">
              Category wise Weekend Master
            </h6>
            <div className="row mt-4 justify-content-between">
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Employee Category
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 category_wise_sub_p_color">
                      Worker
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Weekends
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 category_wise_sub_p_color">
                      Sunday
                    </td>
                  </tr>

                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Status
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 category_wise_sub_active_p_color">
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

export default CategoryWiseWeekendMaster