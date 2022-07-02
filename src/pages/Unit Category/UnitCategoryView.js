import React from 'react'
import Layout from "Layout/Layout";

function UnitCategoryView() {
  return (
    <div>
      <Layout>
        <div className="container-fluid">
          <div className="row py-4 ">
            <div className="col-xl-12 col-lg-12 col-12">
              <div className="row mt-5">
                <div className="col-xl-3 col-lg-3 col-12">
                  <div className="border-end text-center py-4  ">
                    <div className="">
                      <h4>Unit Category Name</h4>
                      <div className="d-flex justify-content-center mt-3">
                        {/* <p className="view_category_accountType ">
                          Income Account
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-12">
                  <div className="viewprof_btn__radius "></div>
                  <div className="row py-4">
                    <div className="col-xl-5 col-lg-5 col-12">
                      <h6 className="h4__color">Description</h6>
                      <p className="p_color">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default UnitCategoryView