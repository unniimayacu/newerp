import Layout from 'Layout/Layout'
import React from 'react'
import { Link } from "react-router-dom";
import "./CategoryWiseWeekendMaster.scss";
import { ROUTES } from "routes";
import Button from "components/button/Button";
import InputDropdown from 'components/Input dropdown/InputDropdown';

function CategoryWiseWeekendMasterCreate() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_category_wise">
          <div className="row mt-3">
            <h6 className="category_wise_view_heading">
              Category Wise Weekend Master
            </h6>
            <div className="row mt-5">
              <div className="col-4">
                <div>
                  <p className="category_wise_p_color">Employee Category</p>
                  <InputDropdown />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="category_wise_p_color">Weekends</p>
                  <InputDropdown />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.CATEGORYWISEWEEKENDMASTER}>
                  <Button rounded={true}>Create</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default CategoryWiseWeekendMasterCreate