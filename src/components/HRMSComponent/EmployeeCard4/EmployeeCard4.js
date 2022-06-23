import React from 'react'
import './EmployeeCard4.scss'
function EmployeeCard4(props) {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="card">
            <div className="container_fluid">
              <div className="row">
                <div className="col-7  text-center">
                  <div className="mt-5">
                    <h5>{props.EmployeeCard4_heading}</h5>
                  </div>
                </div>
                <div className={`col-5 text-center  ${props.EmployeeCard4_cls}`}>
                  <div className="mt-5 pb-3">
                    <h5>{props.EmployeeCard4_count}</h5>
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

export default EmployeeCard4