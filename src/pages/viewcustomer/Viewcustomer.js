import Button from "components/button/Button";
import Header from "components/header/Header";
import Profileupload from "components/profilepicture/Profileupload";
import React, { useState } from "react";
import "./viewcustomer.scss";
import { Accordion, Card } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

function Viewcustomer() {
  const [activeTabs, setActiveTabs] = useState({
    moredetails: false,
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="row ">
              <Header />
            </div>

            <div className="row mt-5 mx-5">
              <div className="col-xl-3 col-lg-3 col-12">
                <div className="border-end">
                  <Profileupload />
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-12">
                <div className="viewprof_btn__radius">
                  <Button btnType="secondary" rounded={true}>
                    Customer Info
                  </Button>
                </div>
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-12">
                    <h4>Address</h4>
                    <p>testaddresstestaddress</p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <h4>Email</h4>
                    <p>testareon@gmail.com</p>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-12">
                    <h4>Phone</h4>
                    <p>+91 8136738903</p>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-xl-3 col-lg-3 col-12">
                    <h4>Business Name</h4>
                    <p>testaddresstestaddress</p>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-12">
                    <h4>Website </h4>
                    <p>testareon@gmail.com</p>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-12">
                    <h4>Mobile</h4>
                    <p>+91 8136738903</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-3 col-12 ">
              <div className="">
               <button className="view__custom__moredetails">More Details</button>
              </div>


                {/* <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
              </div>
            </div>

            {/* <Accordion>
              <Card className="mb-2 rounded">
                <Accordion.Toggle
                  onClick={() =>
                    setActiveTabs({
                      ...activeTabs,
                      generalDetails: !activeTabs.generalDetails,
                    })
                  }
                  as={Card.Header}
                  eventKey="0"
                  className="primary-bl-bg text-white"
                >
                  <div className="d-flex justify-content-between content">
                    <p className="mb-0 text-uppercase">General Details</p>
                    
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                 
                </Accordion.Collapse>
              </Card>
            </Accordion> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewcustomer;

//IoIosArrowForward
