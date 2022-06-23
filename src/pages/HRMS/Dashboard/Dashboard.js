import EmployeeCard2 from 'components/HRMSComponent/EmployeeCard2/EmployeeCard2';
import EmployeeCard from 'components/HRMSComponent/Employee_Card/EmployeeCard';
import React from 'react'
import { BsCalendar2Range, BsSearch } from 'react-icons/bs';
import { MdGroups } from "react-icons/md";
import { RiFileList2Fill } from 'react-icons/ri';
import './Dashboard.scss'

function Dashboard() {
  return (
    <div className="container_fluid dashboard_container_color ">
      <div className="container dashboard_container_color ">
        <div className="row justify-content-center dashboard_row">
          <div className="row mt-5">
            <div className="col-4">
              <div className="input_search">
                <label>
                  <input
                    type="search"
                    id="search"
                    placeholder="Search"
                    className="hrms_input_search"
                  />
                  <BsSearch />
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <h4>Employee</h4>
            <div className="card mt-5 border-0">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-4">
                    <EmployeeCard
                      icon={<MdGroups color="#0288f9" fontSize={30} />}
                      Employee_heading="Total Employees"
                      Employee_number="20957"
                    />
                  </div>
                  <div className="col-4">
                    <EmployeeCard
                      icon={<RiFileList2Fill color="#0288f9" fontSize={30} />}
                      Employee_heading="Staffs"
                      Employee_number="6777"
                    />
                  </div>
                  <div className="col-4">
                    <EmployeeCard
                      icon={<BsCalendar2Range color="#0288f9" fontSize={30} />}
                      Employee_heading="Workers"
                      Employee_number="4355"
                    />
                  </div>
                  <div className="col-4">
                    <EmployeeCard
                      icon={<RiFileList2Fill color="#0288f9" fontSize={30} />}
                      Employee_heading="Vacation"
                      Employee_number="66"
                    />
                  </div>
                  <div className="col-4">
                    <EmployeeCard
                      icon={<BsCalendar2Range color="#0288f9" fontSize={30} />}
                      Employee_heading="Unpaid Leaves"
                      Employee_number="35"
                    />
                  </div>
                  <div className="col-4">
                    <EmployeeCard
                      icon={<MdGroups color="#0288f9" fontSize={30} />}
                      Employee_heading="Absentees"
                      Employee_number="777"
                    />
                  </div>
                  <div className="col-4">
                    <EmployeeCard
                      icon={<BsCalendar2Range color="#0288f9" fontSize={30} />}
                      Employee_heading="Document Expired"
                      Employee_number="907"
                    />
                  </div>
                  <div className="col-4">
                    <EmployeeCard
                      icon={<MdGroups color="#0288f9" fontSize={30} />}
                      Employee_heading="Renewals in One Month"
                      Employee_number="435"
                    />
                  </div>
                  <div className="col-4">
                    <EmployeeCard
                      icon={<RiFileList2Fill color="#0288f9" fontSize={30} />}
                      Employee_heading="Renewals in Three Months"
                      Employee_number="8876"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-6 ms-0 ps-0">
              <EmployeeCard2
                emp_card_2_heading="Current Fund Required For Next Payroll "
                emp_card2_amount=" 75000"
                empcard2_amount="empcard2amount"
                empcard2_req_or_pending="emp_card2_req"
                emp_card2_req_or_pending=" Required"
              />
            </div>
            <div className="col-6 pe-0 me-0">
              <EmployeeCard2
                emp_card_2_heading="Pending Amount in Last Payroll "
                emp_card2_amount=" 2000"
                empcard2_amount="empcard2amount"
                empcard2_req_or_pending="emp_card2_pending"
                empcard2_pending="empcard2pending"
                emp_card2_req_or_pending=" Pending"
              />
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <h4>Pending Leaves</h4>
          </div>

          {/* {" "} */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard