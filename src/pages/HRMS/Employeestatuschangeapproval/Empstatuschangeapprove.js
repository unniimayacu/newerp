import React from 'react'
import Layout from "Layout/Layout";
import InputType from "components/Input type/InputType";
import InputDropdown from "components/Input dropdown/InputDropdown";
import DatePicker from "components/Datepicker/DatePicker";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import Button from "components/button/Button";

function Empstatuschangeapprove() {
  return (
    <>
      <Layout>
        <div className="container mt-3 justify-content-center ">
          <div className="row p-0 justify-content-center">
            <div className="card shadow-sm border border-2">
              <div className="row p-1 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 py-2 p-0">
                  <div className="d-flex gap-1">
                    <h5 className="erp__h5_color erp-lg__h5_size erp-md__h5_Size ">
                      {" "}
                      Employee Status Change approval
                    </h5>
                  </div>
                </div>
              </div>

              <div className="row py-3">
                <div className="col-xl-4 col-lg-4 col-12">
                  <label>Employee </label>
                  <InputDropdown />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label>Employee Name</label>
                  <InputType placeholder="John" />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label>Date </label>
                  <DatePicker />
                </div>
              </div>

              <div className="row py-3">
                <div className="col-xl-4 col-lg-4 col-12">
                  <label>Working Status </label>
                  <InputDropdown />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label>Last Working Date </label>
                  <DatePicker />
                </div>
                <div className="col-xl-4 col-lg-4 col-12">
                  <label> Status </label>
                  <InputDropdown />
                </div>
              </div>

              <div className="row  py-5">
                <div className="col-12 d-flex justify-content-center">
                  {/* <Link to={ROUTES.EMPSTATUSCHANGEVIEW}> */}
                    <Button halfrounded={true} className="px-3">
                      Approved
                    </Button>
                  {/* </Link> */}
                </div>
              </div>
              <div className="py-2"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Empstatuschangeapprove