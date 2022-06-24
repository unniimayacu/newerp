import React from 'react'
import "./Designations.scss";

function Designation() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h6 className="designation_view_heading">Designation</h6>
          <div className='row '>
            <div className='col-3 d-flex justify-content-between'>
                <div>
                    <p>Designation Code</p>
                </div>
                :
                <div>
                    <p>
                        JK-2232242225
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designation