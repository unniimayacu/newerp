import Button from "components/button/Button";
import InputType from "components/Input type/InputType";
import Layout from "Layout/Layout";
import React, { useState } from "react";
import "./empcategoryleaves.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";

function Createleavetype() {

const [isCheckAll, setIsCheckAll] = useState(false);
const [isCheck, setIsCheck] = useState([]);
const [list, setList] = useState([]);


 const handleSelectAll = (e) => {
   setIsCheckAll(!isCheckAll);
   setIsCheck(list.map((li) => li.id));
   if (isCheckAll) {
     setIsCheck([]);
   }
 };
 const handleClick = (e) => {
   const { id, checked } = e.target;
   setIsCheck([...isCheck, id]);
   if (!checked) {
     setIsCheck(isCheck.filter((item) => item !== id));
   }
 };
 
  //  console.log(isCheck);

  return (
    <>
      <Layout>
        <div className="container container_designation">
          <div className="row mt-3">
            <h5 className="erp__h5_color">Create Leave Type Master</h5>
            <div className="row py-4">
              <div className="col-xl-4 col-lg-4 col-md-4 col-12 mx-3">
                <label>Employee category</label>
                <InputType />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-12">
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
                  <tbody
                    
                  >
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
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <Link to={ROUTES.EMPCATEGORYLEAVES}>
                  <Button rounded={true}>Create</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Createleavetype;
