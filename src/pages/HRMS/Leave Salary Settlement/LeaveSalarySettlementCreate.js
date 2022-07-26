import React from 'react'
import { Link } from "react-router-dom";
import "./LeaveSalarySettlement.scss";
import { ROUTES } from "routes";
import Button from "components/button/Button";

import InputType from "components/Input type/InputType";

import Layout from "Layout/Layout";
import TextArea from "components/Text Area/TextArea";
import DatePicker from "components/Datepicker/DatePicker";
import InputDropdown from 'components/Input dropdown/InputDropdown';


function LeaveSalarySettlementCreate() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_leave_salary">
          <div className="row ">
            <h6 className="leave_salary_view_heading">
              Leave Salary Settlement
            </h6>
            <div className="row py-3">
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Employee</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Date</p>
                  <DatePicker />
                </div>
              </div>

              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Last Leave Settlement Date</p>
                  <DatePicker />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Leave Start Date</p>
                  <DatePicker />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">End Date</p>
                  <DatePicker />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">No of Days</p>
                  <InputType />
                </div>
              </div>
              <div className="col-6 py-3">
                <div>
                  <p className="holiday_p_color">
                    Leave Salary Period Start Date
                  </p>
                  <DatePicker />
                </div>
              </div>
              <div className="col-6 py-3">
                <div>
                  <p className="holiday_p_color">End Date</p>
                  <DatePicker />
                </div>
              </div>
              <div className="col-6 py-3">
                <div>
                  <p className="holiday_p_color">Leave Salary Eligible Days</p>
                  <InputType />
                </div>
              </div>
              <div className="col-6 py-3">
                <div>
                  <p className="holiday_p_color">Unpaid Leaves</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Other Amounts</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Addition or Deduction</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Remarks</p>
                  <TextArea />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Total Salary Amount</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Air Ticket Fare</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color">Total Amount to be Paid</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4 py-3">
                <div>
                  <p className="holiday_p_color ">Status</p>
                  <InputDropdown />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.LEAVESALARYSETTLEMENT}>
                  <Button halfrounded={true}>Create</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default LeaveSalarySettlementCreate