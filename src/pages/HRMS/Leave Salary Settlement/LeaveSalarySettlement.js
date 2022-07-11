import React from 'react'
import Layout from "Layout/Layout";
import "./LeaveSalarySettlement.scss";

function LeaveSalarySettlement() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_leave_salary">
          <div className="row mt-3">
            <h6 className="leave_salary_view_heading">
              Leave Salary Settlement
            </h6>
            <div className="row mt-4 justify-content-between">
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Employee
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      John Wick [ID:HER231435FDV]
                    </td>
                    <th className="border-0" scope="row">
                      Other Amount
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      3000.00
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Date
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      22/03/2022
                    </td>
                    <th scope="row" className="border-0">
                      Addition or Deduction
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      Addition
                    </td>
                  </tr>

                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Leave Start Date
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      22/03/2022
                    </td>
                    <th scope="row" className="border-0">
                      Remarks
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      Salary Advance
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      End Date
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      22/03/2022
                    </td>
                    <th scope="row" className="border-0">
                      Total Leave Salary Amount
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      35000.00
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      Leave Salary Period Start Date
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      22/03/2022
                    </td>
                    <th scope="row" className="border-0">
                      Air Ticket Fare
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      1500.00
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th scope="row" className="border-0">
                      End Date
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      22/03/2022
                    </td>
                    <th scope="row" className="border-0">
                      Total Amount to be Paid
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">
                      39500.00
                    </td>
                  </tr>

                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Leave Salary Eligible Days
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">22</td>
                    <th className="border-0" scope="row">
                      Status
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0  pending_hrms_dummy">
                      Pending
                    </td>
                  </tr>
                  <tr className="border-0">
                    <th className="border-0" scope="row">
                      Unpaid Leaves
                    </th>
                    <td className="border-0">:</td>
                    <td className="border-0 leave_salary_sub_p_color">0</td>
                  </tr>
                  <tr className="border-0"></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default LeaveSalarySettlement