import InputType from "components/Input type/InputType";
import Layout from "Layout/Layout";
import React from "react";
import "./empcategoryleaves.scss";
function Createleavetype() {
  return (
    <>
      <Layout>
        <div className="container container_designation">
          <div className="row mt-3">
            <h5 className="erp__h5_color">Create Leave Type Master</h5>
            <div className="row py-4">
              <div className="col-xl-4 col-lg-4 col-12 mx-3">
                <label>Employee category</label>
                <InputType />
              </div>
              <div className="col-xl-3 col-lg-3 col-12">
                <label>List of Leave</label>
                <table class="table table-bordered">
                  <thead>
                    <tr className="">
                      <td className="border-right-0">
                        <div class="form-check d-flex gap-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label className="text-sm">Select All</label>
                        </div>
                      </td>
                      <td>leave type</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="border-right-0">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>

                      <td className="">Casual</td>
                    </tr>
                    <tr className="">
                      <td className="border-right-0">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>

                      <td className="">Sick</td>
                    </tr>
                    <tr className="">
                      <td className="border">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>

                      <td className="">Hajj</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-xl-4 col-lg-4 col-12"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Createleavetype;
