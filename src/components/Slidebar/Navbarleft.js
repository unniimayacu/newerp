import React from "react";
import dashboard from "./img/Group 3.svg";
function Navbarleft() {
  return (
    <>
      <div className="navWrapper navbar w-100 h-100">
        <div className="row">
          <div className="d-flex">
              <img src={dashboard} alt="" height={15} width={15} />{" "}
           <label>Dashboard</label>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbarleft;
