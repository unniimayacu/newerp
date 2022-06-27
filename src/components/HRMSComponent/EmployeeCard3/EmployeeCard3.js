import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs';
import './EmployeeCard3.scss'

function EmployeeCard3(props) {
  return (
    <div>
      <div className="container" onClick={props.onClick}>
        <div className="row justify-content-center">
          <div className="card align-items-center p-3 pb-0 border-0 employee_card3">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-center mt-3">
                  <div className="col-md-3 col-sm-6 col-lg-8 col-xl-12">
                    <div className={` ${props.progress}`}>
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value">{props.progress_value}</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-5 mb-0 pb-0">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-between ">
                      <BsFillCircleFill color="whitesmoke" fontSize={25} />
                      <p className="ms-2">Total</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <BsFillCircleFill color="#10cea2" fontSize={25} />
                      <p className="ms-2">Pending Leaves</p>
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

export default EmployeeCard3