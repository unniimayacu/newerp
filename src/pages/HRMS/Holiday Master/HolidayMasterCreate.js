import React from 'react'
import { Link } from "react-router-dom";
import "./HolidayMaster.scss";
import { ROUTES } from "routes";
import Button from "components/button/Button";

import InputType from "components/Input type/InputType";

import Layout from "Layout/Layout";
import TextArea from 'components/Text Area/TextArea';
import DatePicker from 'components/Datepicker/DatePicker';

function HolidayMasterCreate() {
  return (
    <div>
      <Layout>
        <div className="container p-5 container_holiday">
          <div className="row mt-3">
            <h6 className="holiday_view_heading">Holiday Master</h6>
            <div className="row mt-5">
              <div className="col-4">
                <div>
                  <p className="holiday_p_color">Holiday Name</p>
                  <InputType />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="holiday_p_color">Date</p>
                  <DatePicker />
                </div>
              </div>

              <div className="col-4">
                <div>
                  <p className="holiday_p_color">Description</p>
                  <TextArea />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.HOLIDAYMASTER}>
                  <Button halfrounded={true}>Create</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default HolidayMasterCreate