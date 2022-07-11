import React , {useState, useMemo }from 'react'
import Button from "components/button/Button";
import Newcontact from "components/customersnewcontact/Newcontact";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import Table from "components/table/Table";
import Makedata from "components/ddatas/Dataas";
import Layout from "Layout/Layout";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { Form } from "react-bootstrap";
import CustomModal from "components/modal/CustomModal";
import InputDropdown from "components/Input dropdown/InputDropdown";
import InputType from "components/Input type/InputType";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";

function Unittypelist() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const actionIcons = () => {
      return (
        <div className="d-flex align-items-center justify-content-center gap-2 ">
          <span className="erp_edit_delte_icon__size ">
            <BsPencilSquare />
          </span>

          <span className="erp_edit_delte_icon__size">
            <Link to={ROUTES.VIEWUNITTYPE}>
              <RiFileSearchFill />
            </Link>
          </span>
          <span className="erp_edit_delte_icon__size">
            <AiFillPrinter />{" "}
          </span>
        </div>
      );
    };
    const activeSwitch = () => {
      return (
        <div className="erp_status_switch-color">
          <Form.Check type="switch" id="custom-switch" />
        </div>
      );
    };

    const columns = useMemo(
      () => [
        {
          Header: "Sl.No",
          accessor: "slno",
        },
        {
          Header: "UNIT TYPE",
          accessor: "col2",
        },
        {
          Header: " SYMBOL",
          accessor: "col3",
        },

        {
          Header: "UNIT CATEGORY",
          accessor: "col4",
        },
        {
          Header: "ACTION",
          accessor: "col5",
        },
        {
          Header: "STATUS",
          accessor: "col6",
        },
      ],
      []
    );

    const data = useMemo(
      () => [
        {
          slno: 1,
          col2: "Kilogram",
          col3: "Kg",
          col4: "Weight",
          col5: actionIcons(),
          col6: activeSwitch(),
        },
        {
          slno: 2,
          col2: "Centimeter",
          col3: "Cm",
          col4: "length",
          col5: actionIcons(),
          col6: activeSwitch(),
        },
      ],
      []
    );

  return (
    <>
      <Layout>
        <div className="container mt-2 ">
          <div className="row p-0">
            {/* <div className="row "></div> */}

            <div className="row p-2 mt-3 ">
              <div className="col-xl-8 col-lg-8 col-md-9 col-12 p-0">
                <div className="d-flex gap-2">
                  <h5 className="erp__h5_color ">Unit Types</h5>
                  {/* <Link to={ROUTES.CREATEEMPLOYEE}> */}
                  <Button
                    className=""
                    appendIcon={<AiOutlinePlus />}
                    rounded={true}
                    onClick={handleShow}
                  >
                    New Unit Types
                  </Button>
                  {/* </Link> */}
                  <Button appendIcon={<FiUpload />} rounded={true}>
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

            <CustomModal
              show={show}
              btnOnclick={handleClose}
              modalTitle="Add New Unit Type"
            >
              <div className="row">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-12">
                    <label>Unit Type</label>
                    <InputType />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12">
                    <label>Symbol</label>
                    <InputDropdown />
                  </div>
                  <div className="row py-3">
                    <div className="col-xl-6 col-lg-6 col-12">
                      <label>Unit Category</label>
                      <InputDropdown />
                    </div>
                  </div>
                </div>

                <div className="row py-4 mt-3">
                  <div className="col-xl-12 col-lg-12 col-12  d-flex justify-content-center">
                    <Button className="px-5" rounded={true}>Add </Button>
                  </div>
                </div>
              </div>
            </CustomModal>

            <div className="row mt-5 justify-content-center">
              <div className="text-center">
                <Table
                  data={data}
                  columns={columns}
                  PageSize={true}
                  pagination={true}
                  Sorted={false}
                  className={true}
                  responsive={true}
                  pagecenter={true}
                />
              </div>

              <div className="row"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Unittypelist