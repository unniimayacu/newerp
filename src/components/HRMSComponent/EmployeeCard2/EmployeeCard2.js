import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './EmployeeCard2.scss'

function EmployeeCard2(props) {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="card  employee_card_2 mt-3 ">
            <div className="container_fluid">
              <div className="row pt-3 ms-3">
                <div className="col-5 mt-2">
                  <h5>
                    {props.emp_card_2_heading}{" "}
                    <AiOutlineArrowRight color="#0288f9" />
                  </h5>
                </div>
                <div className="col-2"></div>
                <div className="col-5">
                  <div className="text-center">
                    <h1 className={`${props.empcard2_amount}`}>
                      ₹{props.emp_card2_amount}{" "}
                    </h1>
                    <div className={`mx-5 ${props.empcard2_pending}`}>
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
  );
}

export default EmployeeCard2