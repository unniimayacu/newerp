import React from 'react'
import './EmployeeCard.scss'
import ProgressBar from "@ramonak/react-progress-bar";
import { MdGroups } from "react-icons/md";

function EmployeeCard(props) {
  return (
    <div>
      <div className="container-fluid p-0 m-0  hrms_card1">
        <div className="card hrms_card  px-1"  onClick={props.onClick}>
          <div className="card-body ">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-12 colum_card_small">
                  <div className="mdgroup_rounded">{props.icon}</div>
                  <div>
                    <p className="small_card_heading">
                      {props.Employee_heading}
                    </p>
                    <p className="small_card_number m-0">
                      {props.Employee_number}
                    </p>
                  </div>
                </div>
                <div className="col-12 px-3 mt-3">
                  <ProgressBar
                    completed=" "
                    className="wrapper"
                    barContainerClassName="container_progress"
                    completedClassName="barCompleted"
                    labelClassName="label"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard