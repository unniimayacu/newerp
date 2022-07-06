import EmployeeCard2 from 'components/HRMSComponent/EmployeeCard2/EmployeeCard2';
import EmployeeCard3 from 'components/HRMSComponent/EmployeeCard3/EmployeeCard3';
import EmployeeCard4 from 'components/HRMSComponent/EmployeeCard4/EmployeeCard4';
import EmployeeModalview from 'components/HRMSComponent/EmployeeModalview/EmployeeModalview';
import EmployeeCard from 'components/HRMSComponent/Employee_Card/EmployeeCard';
import BarCharts from 'components/HRMSComponent/Hrms_BarChart/BarCharts';
import LineCharts from 'components/HRMSComponent/LineChart_hrms/LineCharts';
import Layout from 'Layout/Layout';
import {React,useState} from 'react'
import { BsCalendar2Range, BsSearch } from 'react-icons/bs';
import { MdGroups } from "react-icons/md";
import { RiFileList2Fill } from 'react-icons/ri';
import './Dashboard.scss'

function Dashboard() {
   const [modal1Show, setModal1Show] = useState(false);
   const [modal2Show, setModal2Show] = useState(false);
   const [modal3Show, setModal3Show] = useState(false);
   const [modal4Show, setModal4Show] = useState(false);
   const [modal5Show, setModal5Show] = useState(false);
   
  return (
    <div className="container-fluid m-0 p-0 dashboard_container_color ">
      <Layout>
        <div className="container-fluid  dashboard_container_color pb-2">
          <div className="row justify-content-center dashboard_row">
            <div className="row mt-5">
              <div className="col-xl-3 col-lg-4 ">
                <div className="input_search ">
                  <label className="d-flex justify-content-between align-items-center">
                    <input
                      type="search"
                      id="search"
                      placeholder="Search"
                      className="hrms_input_search"
                    />
                    {/* <div className='justify-content-end'> */}
                    <BsSearch className="ms-3" />
                    {/* </div> */}
                  </label>
                </div>
              </div>
              <div className="col-xl-9 col-lg-11 "></div>
            </div>
            <div className="row mt-5 justify-content-center">
              <h4>Employee</h4>
              <div className="col-12">
                <div className="card mt-5  border-0">
                  <div className="container-fluid">
                    <div className="row ms-2 me-2 mt-2 mb-5 justify-content-center">
                      <div className="col-xl-4 col-lg-6 mt-5">
                        <EmployeeCard
                          onClick={() => setModal1Show(true)}
                          icon={<MdGroups color="#0288f9" fontSize={30} />}
                          Employee_heading="Total Employees"
                          Employee_number="20957"
                        />
                        <EmployeeModalview
                          show={modal1Show}
                          onHide={() => setModal1Show(false)}
                          totalEmployee
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6  mt-5">
                        <EmployeeCard
                          onClick={() => setModal1Show(true)}
                          icon={
                            <RiFileList2Fill color="#0288f9" fontSize={30} />
                          }
                          Employee_heading="Staffs"
                          Employee_number="6777"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6  mt-5">
                        <EmployeeCard
                          onClick={() => setModal1Show(true)}
                          icon={
                            <BsCalendar2Range color="#0288f9" fontSize={30} />
                          }
                          Employee_heading="Workers"
                          Employee_number="4355"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6  mt-5">
                        <EmployeeCard
                          onClick={() => setModal1Show(true)}
                          icon={
                            <RiFileList2Fill color="#0288f9" fontSize={30} />
                          }
                          Employee_heading="Vacation"
                          Employee_number="66"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6  mt-5">
                        <EmployeeCard
                          onClick={() => setModal1Show(true)}
                          icon={
                            <BsCalendar2Range color="#0288f9" fontSize={30} />
                          }
                          Employee_heading="Unpaid Leaves"
                          Employee_number="35"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6  mt-5">
                        <EmployeeCard
                          onClick={() => setModal1Show(true)}
                          icon={<MdGroups color="#0288f9" fontSize={30} />}
                          Employee_heading="Absentees"
                          Employee_number="777"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6  mt-5">
                        <EmployeeCard
                          onClick={() => setModal5Show(true)}
                          icon={
                            <BsCalendar2Range color="#0288f9" fontSize={30} />
                          }
                          Employee_heading="Document Expired"
                          Employee_number="907"
                        />
                        <EmployeeModalview
                          show={modal5Show}
                          onHide={() => setModal5Show(false)}
                          Document
                          document_exp
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6  mt-5">
                        <EmployeeCard
                          icon={<MdGroups color="#0288f9" fontSize={30} />}
                          Employee_heading="Renewals in One Month"
                          Employee_number="435"
                        />
                      </div>
                      <div className="col-xl-4 col-lg-6  mt-5">
                        <EmployeeCard
                          icon={
                            <RiFileList2Fill color="#0288f9" fontSize={30} />
                          }
                          Employee_heading="Renewals in Three Months"
                          Employee_number="8876"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-xl-6 col-lg-12 ">
                <EmployeeCard2
                  emp_card_2_heading="Current Fund Required For Next Payroll "
                  emp_card2_amount=" 75000"
                  empcard2_amount="empcard2amount"
                  empcard2_req_or_pending="emp_card2_req"
                  emp_card2_req_or_pending=" Required"
                />
              </div>
              <div className="col-xl-6 col-lg-12 ">
                <EmployeeCard2
                  onClick={() => setModal3Show(true)}
                  emp_card_2_heading="Pending Amount in Last Payroll "
                  emp_card2_amount=" 2000"
                  empcard2_amount="empcard2amount"
                  empcard2_req_or_pending="emp_card2_pending"
                  empcard2_pending="empcard2pending"
                  emp_card2_req_or_pending=" Pending"
                />
                <EmployeeModalview
                  show={modal3Show}
                  onHide={() => setModal3Show(false)}
                  totalRefund
                />
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <h4>Pending Leaves</h4>
            </div>
            <div className="row mt-4 justify-content-center">
              <div className="col-xl-3 col-lg-6 mt-3">
                <EmployeeCard3
                  onClick={() => setModal2Show(true)}
                  progress_value="25"
                  progress="progress black"
                />
                <EmployeeModalview
                  show={modal2Show}
                  onHide={() => setModal2Show(false)}
                  pending_leaves
                />
              </div>
              <div className="col-xl-3 col-lg-6 mt-3">
                <EmployeeCard3
                  onClick={() => setModal2Show(true)}
                  progress_value="00"
                  progress="progress green"
                />
              </div>
              <div className="col-xl-3 col-lg-6 mt-3">
                <EmployeeCard3
                  onClick={() => setModal2Show(true)}
                  progress_value="02"
                  progress="progress blue "
                />
              </div>
              <div className="col-xl-3 col-lg-6 mt-3">
                <EmployeeCard3
                  onClick={() => setModal2Show(true)}
                  progress_value="05"
                  progress="progress pearlblue"
                />
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className=" col-xl-7 col-lg-12">
                <h4>Department Wise Staff List</h4>
                <div className="card mt-5 border-0 chart_card">
                  <div className="mt-5">
                    <LineCharts />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-12">
                <h4>List of Profiles Not Completed</h4>
                <div className="card mt-5 border-0 chart_card">
                  <div className="mt-5">
                    <BarCharts />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6">
                <div>
                  <EmployeeCard4
                    onClick={() => setModal4Show(true)}
                    EmployeeCard4_heading="Visa Expired Employees"
                    EmployeeCard4_count="20957"
                    EmployeeCard4_cls="colum_empCard4_color"
                  />
                  <EmployeeModalview
                    show={modal4Show}
                    onHide={() => setModal4Show(false)}
                    visa
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <EmployeeCard4
                    onClick={() => setModal4Show(true)}
                    EmployeeCard4_heading="Insurance Expired Employees"
                    EmployeeCard4_count="20957"
                    EmployeeCard4_cls="colum2_empCard4_color"
                  />
                </div>
              </div>
            </div>
            {/* {" "} */}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Dashboard