import Layout from 'Layout/Layout';
import React from 'react'
import './ViewCategory.scss'

function ViewCategory() {
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
                      <h4>Category Name</h4>
                      <div className="d-flex justify-content-center mt-3">
                        <p className="view_category_accountType ">
                          Income Account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-12">
                  <div className="viewprof_btn__radius "></div>
                  <div className="row py-4">
                    <div className="col-xl-3 col-lg-3 col-12 ">
                      <div className="text-center">
                        <h6 className="h4__color ">Code</h6>
                        <p className="p_code_color ">COXCOD2341</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12">
                      <div className="text-center">
                        <h6 className="h4__color">Parent Category</h6>
                        <p className="p_color">parent Category</p>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-12">
                      <h6 className="h4__color">Description</h6>
                      <p className="p_color">
                        testaddresstestaddresse, thrissur,irinjalakuda,
                        dsfgdyfgeytfetfeudu,dfgsdfgf gufgudgdf,gyufyuweywywd
                        uisdwudduisudisd
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

export default ViewCategory