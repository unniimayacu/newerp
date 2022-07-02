
import { React, useMemo,useState } from "react";
import Button from "components/button/Button";
import { AiOutlinePlus } from "react-icons/ai";

import { FiUpload } from "react-icons/fi";
import Newcontact from "components/customersnewcontact/Newcontact";
import Table from "components/table/Table";

import Categorydata from "components/ddatas/Categorydata";

import Layout from "Layout/Layout";
import CustomModal from "components/modal/CustomModal";
import InputType from "components/Input type/InputType";
import TextArea from "components/Text Area/TextArea";
import InputDropdown from "components/Input dropdown/InputDropdown";
import './Category.scss'

function Category() {


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "CATEGORY NAME",
        accessor: "col1",
      },
      {
        Header: "CODE",
        accessor: "col2",
      },
      {
        Header: "DESCRIPTION",
        accessor: "col3",
      },
      {
        Header: "PARENT CATEGORY",
        accessor: "col4",
      },
      {
        Header: "ACTION",
        accessor: "col5",
      },
      {
        Header: "ACTIVE",
        accessor: "col6",
      },
    ],
    []
  );
  const data = useMemo(() => Categorydata(), []);

  return (
    <div>
      <div className="">
        {/* <div className="row justify-content-center">
          <Header />
          <Slidebar />
        </div> */}
        <Layout>
          {/* <div className="row justify-content-center">
            <Header />
          </div> */}

          <div className="container mt-2 justify-content-center">
            <div className="row justify-content-center">
              <div className="row p-2 mt-3">
                <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                  <div className="d-flex gap-2">
                    <h5 className="erp__h5_color ">Category</h5>
                    {/* <Link to={ROUTES.CREATEEMPLOYEE}> */}
                    <Button
                      className=""
                      rounded={true}
                      appendIcon={<AiOutlinePlus />}
                    >
                      New Category
                    </Button>
                    {/* </Link> */}
                    <Button rounded={true} appendIcon={<FiUpload />}>
                      Upload Via CSV
                    </Button>
                  </div>
                </div>
                <div className="  col-xl-4 col-lg-4 col-md-3 col-12">
                  <div className="d-flex justify-content-end">
                    <Newcontact />
                  </div>
                </div>
              </div>

              {/* <div className="row pb-3 ps-0 pe-0  border-bottom">
                <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-12 col-12 mt-3 p-0 d-flex gap-2">
                  <div className="">
                    <h4>Category</h4>
                  </div>
                  <div className=" m-0 p-0 d-flex  gap-2">
                    <Button appendIcon={<AiOutlinePlus />} onClick={handleShow}>
                      New Category
                    </Button>
                    
                    <Button
                  
                    >
                      Upload Via CSV <FiUpload />
                    </Button>
                  </div>
                  <CustomModal
                    onHide={handleClose}
                   
                    btnOnclick={handleClose}
                    show={show}
                    modalTitle="Add New Category"
                    classname="heading_custom_model"
                  >
                    <div className="container ">
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <p className="category_model_p_color">
                              Category Name
                            </p>
                            <InputType />
                          </div>
                        </div>
                        <div className="col-6">
                          <div>
                            <p className="category_model_p_color">Code</p>
                            <InputType />
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <div>
                            <p className="category_model_p_color">
                              Description
                            </p>
                            <TextArea />
                          </div>
                        </div>
                        <div className="col-6 mt-2">
                          <div>
                            <p className="category_model_p_color">
                              Parent Category
                            </p>
                            <InputDropdown />
                          </div>
                        </div>
                        <div className="col-6 mt-2">
                          <div className="mt-4 d-flex justify-content-start">
                            <label
                              htmlFor="active"
                              className="me-3 mt-1 d-flex  justify-content-start"
                            >
                              <p className="me-2 mt-3 category_model_sub_p_color">
                                Income Account
                              </p>
                              <input
                                type="radio"
                                id="active"
                                name="statusType"
                              />
                            </label>
                            <label
                              htmlFor="inactive"
                              className="me-3 mt-1 d-flex justify-content-center text-center"
                            >
                              <p className="me-2 mt-3 category_model_sub_p_color">
                                Expence Account
                              </p>
                              <input
                                type="radio"
                                id="inactive"
                                name="statusType"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-12 mt-5 d-flex justify-content-center py-4">
                          <Button rounded={true}>Add</Button>
                        </div>
                      </div>
                    </div>
                  </CustomModal>
                </div>
                <div className="d-flex justify-content-end col-xxl-6 col-xl-5 col-lg-6 col-md-6 col-12 mt-3 p-0">
                  <Newcontact />
                </div>
              </div> */}
            </div>

            <div className="row mt-5 justify-content-center">
              <div>
                <Table
                  data={data}
                  columns={columns}
                  PageSize={true}
                  pagination={true}
                  Sorted={true}
                  className={true}
                  responsive={true}
                  pagecenter={true}
                  // Tbody_style={true}
                />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Category;

//AiOutlineClose