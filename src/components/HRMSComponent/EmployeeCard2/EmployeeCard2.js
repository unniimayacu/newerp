import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './EmployeeCard2.scss'

function EmployeeCard2(props) {
  return (
    <div>
      <div className="container-fluid  " onClick={props.onClick}>
        <div className="row">
          <div className="card  employee_card_2 mt-3 ">
            <div className="container_fluid">
              <div className="row pt-3  ">
                <div className='d-flex justify-content-between'>
                  <div className="col-6 d-flex justify-content-start mt-2">
                    <h5>
                      {props.emp_card_2_heading}{" "}
                      <AiOutlineArrowRight color="#0288f9" />
                    </h5>
                  </div>
                  
                  <div className="col-6 d-flex justify-content-end">
                    <div className="text-center">
                      <h1 className={`${props.empcard2_amount}`}>
                        ₹{props.emp_card2_amount}{" "}
                      </h1>
                      <div className={`mx-4 ${props.empcard2_pending}`}>
                        <p className={`${props.empcard2_req_or_pending}`}>
                          {props.emp_card2_req_or_pending}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard2