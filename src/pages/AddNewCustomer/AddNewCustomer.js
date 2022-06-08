import Header from "components/header/Header";
import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";
import React from "react";
import { CgProfile } from "react-icons/cg";
import styles from "./addnewcustomer.module.scss";

function AddNewCustomer() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row mt-5 ps-5 pe-5">
          <div className="d-flex justify-content-start  col-xl-6 col-lg-6 col-12   py-3 ">
            <h5 className="ms-0">Add New Customer</h5>
          </div>
        </div>
        <div className="row ps-5 pe-5">
          <div className={`col-4 ${styles.columndiv}`}>
            <div className="mt-5 pt-4">
              <p className={`mb-0 ms-2 `}>Contact Type</p>
              <InputDropdown />
            </div>
          </div>
          <div className="col-4 ">
            <div className="mt-5 pt-4">
              <p className={`mb-1 `}>Name</p>
              <InputType />
            </div>
          </div>
          <div className="col-4 ">
            <div className="d-flex justify-content-evenly ">
              <div className="mt-5 pt-5 d-flex justify-content-evenly">
                {" "}
                <p className={`mb-1 `}>
                  {" "}
                  Individual
                  <input type="radio" className={`ms-2`} />
                </p>
                <p className={`mb-1 `}>
                  {" "}
                  Company
                  <input type="radio" className={`ms-2`} />
                </p>
              </div>
              <div>
                <p>Profile</p>
                <label htmlFor="file">
                  <div
                    className={`card p-5 bg-whitesmoke border-0 ${styles.profilecard}`}
                  >
                    <CgProfile fontSize={50} color="lightgray" />
                  </div>
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </label>
                <p>Browse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewCustomer;
