// import Category from 'pages/Category/Category';
// import Category from "pages/Category/Category";
import React, { useEffect, useRef, useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaBars } from "react-icons/fa";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
// import { Siderbardata } from "./Siderbardata";
import dashboard from "./img/Group 3.svg";
import award from "./img/Icon awesome-award.svg";
import work from "./img/Icon material-work.svg";
import star from "./img/Icon awesome-star.svg";
import emp from "./img/Icon awesome-users.svg";
import time from "./img/Icon ionic-ios-timer.svg";
import sector from "./img/Icon material-verified-user.svg";
import { ROUTES } from "routes/index";
// import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./slider.scss";
import { AiOutlineCaretDown } from "react-icons/ai";

function Slidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-100 navWrapper h-100">
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items px-0 mt-3">
            <li className="list_style">
              <div className="row " data-bs-target="dashboard">
                <Link
                  // className="col-12 col-lg-6 text-center navigation__left-item navigation__link"
                  className="nav-textcolor "
                  to={ROUTES.DASHBOARD}
                  id="dashboard"
                >
                  <div className="d-flex gap-2  px-3 p-3  ">
                    <div>
                      <img src={dashboard} alt="" height={17} width={17} />
                    </div>
                    <label className="">Dashboard</label>
                  </div>
                </Link>
              </div>
            </li>

            <li
              className={
                open ? "list_style  items_hrms open" : "list_style  items_hrms "
              }
            >
              <div className="nav-textcolor">
                <div className="   p-3 ">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => setOpen(!open)}
                  >
                    <span>Human Resource</span>
                    <AiOutlineCaretDown className="toggle_btn" />
                  </div>
                </div>
              </div>
              <nav>
                <ul className="nav-menu-items hrms_content px-0 ">
                  <li className="list_style">
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.DEPARTMENTMASTERVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={star} alt="" height={17} width={17} />
                          </div>
                          <label>Department</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.DESIGNATIONVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={award} alt="" height={17} width={17} />
                          </div>
                          <label>Designation</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    <div className="row py-0 ">
                      <Link className="nav-textcolor" to={ROUTES.EMPLOYEELIST}>
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={emp} alt="" height={17} width={17} />
                          </div>
                          <label>Employee Master</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.EMPLOYEECATEGORYVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={work} alt="" height={17} width={17} />
                          </div>
                          <label>Employee Category</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  {/* <li className="list_style">
                  {" "}
                  <div className="row py-0 ">
                    <Link
                      className="nav-textcolor"
                      to={ROUTES.EMPLOYEECATEGORYVIEW}
                    >
                      <div className="d-flex gap-2 px-3 p-3 ">
                        <div>
                          <img src={work} alt="" height={17} width={17} />
                        </div>
                        <label>Employee Category</label>
                      </div>
                    </Link>
                  </div>
                </li> */}
                  <li className="list_style">
                    {" "}
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.OVERTIMEMASTERVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={time} alt="" height={17} width={17} />
                          </div>
                          <label>OverTime Rate Master</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    {" "}
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.SECTORMASTERVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={sector} alt="" height={17} width={17} />
                          </div>
                          <label>Sector Master</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    {" "}
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.LEAVETYPEMASTERVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={time} alt="" height={17} width={17} />
                          </div>
                          <label>Leave Type Master</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    {" "}
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.EMPCATEGORYLEAVELIST}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={time} alt="" height={17} width={17} />
                          </div>
                          <label>Employee Category Leaves</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.HOLIDAYMASTERVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={sector} alt="" height={17} width={17} />
                          </div>
                          <label>Holiday Master</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    {" "}
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.HOLIDAYMASTERVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={sector} alt="" height={17} width={17} />
                          </div>
                          <label>Holiday Master</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    {" "}
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.CATEGORYWISEWEEKENDMASTERVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={sector} alt="" height={17} width={17} />
                          </div>
                          <label>Category Wise Weekend Master</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    {" "}
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.LEAVEAPPLICATIONLIST}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={sector} alt="" height={17} width={17} />
                          </div>
                          <label>Leave Application</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="list_style">
                    {" "}
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.LEAVESALARYSETTLEMENTVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={sector} alt="" height={17} width={17} />
                          </div>
                          <label>Leave Salary Settlement</label>
                        </div>
                      </Link>
                    </div>
                  </li>
                  {/* <li></li> */}
                </ul>
              </nav>
            </li>

            {/* <NavDropdown
              title="gshdg"
              id={`offcanvasNavbarDropdown-expand`}
              className="flex-grow-1 border-0"
            >
              <Nav.Item href="#action3"></Nav.Item>
              <Nav.Item href="#action4"></Nav.Item>

              <Nav.Item href="#action5"></Nav.Item>
              <Nav.Item href="#action6"></Nav.Item>
              <Nav.Item href="#action7"></Nav.Item>
              <Nav.Item href="#action8"></Nav.Item>
              <Nav.Item href="#action9"></Nav.Item>
              <Nav.Item href="#action10"></Nav.Item>
              <Nav.Item href="#action11"></Nav.Item>
              <Nav.Item href="#action12"></Nav.Item>
              <Nav.Item href="#action13"></Nav.Item>
              <Nav.Item href="#action14"></Nav.Item>
              <Nav.Item href="#action15"></Nav.Item>
            </NavDropdown> */}

            <Nav.Item eventKey="active">
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.CATEGORY}>
                  <div className="  px-3 p-3 ">
                    <label> Category</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.UNITCATEGORY}>
                  <div className="  px-3 p-3 ">
                    <label> Unit Category</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.VIEWCATEGORY}>
                  <div className="  px-3 p-3 ">
                    <label> View Category</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.ADDNEWCUSTOMER}>
                  <div className="  px-3 p-3 ">
                    <label> Add Customer</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.VIEWCUSTOMER}>
                  <div className="  px-3 p-3 ">
                    <label>View Customer</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.CUSTOMERS}>
                  <div className="  px-3 p-3 ">
                    <label> Customerlist</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.ADDPRODUCT}>
                  <div className="  px-3 p-3 ">
                    <label>Add Product</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.VIEWPRODUCT}>
                  <div className="  px-3 p-3 ">
                    <label> View Product</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.PRODUCTS}>
                  <div className="  px-3 p-3 ">
                    <label> ProductList</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.ADDSUPPLIER}>
                  <div className="  px-3 p-3 ">
                    <label> Add Supplier</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              <div className="row py-0 ">
                <Link className="nav-textcolor" to={ROUTES.UNITTYPE}>
                  <div className="  px-3 p-3 ">
                    <label> UnitType List</label>
                  </div>
                </Link>
              </div>
            </Nav.Item>

            {/* {Siderbardata.map((item, index) => {
              return (
                <li key={index} className={`${item.cName} px-0`}>
                  <Link to={item.path} activeClassName="selected">
                    <span>
                      {item.icon} {item.title}
                    </span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Slidebar;

{
  /* //  <nav className={slidebar ? 'nav-menu active' : 'nav-menu'}>
//             <ul className='nav-menu-items'>
//               <li className='navbar-toggle'>
//                 <Link to='#' className='menu-bars'>
//                   <AiOutlineClose />
//                 </Link>
//               </li>
//             </ul>
//           </nav> */
}

{
  /* <ProSidebar>
          <Menu iconShape="square">
            <Link to="/category" clasName="menu-bars">
              <MenuItem icon>Category</MenuItem>
            </Link>
            <SubMenu title="Components" icon>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar> */
}
{
  /* <div className="navbar">
          <Link to="#" className="menu_bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div> */
}

{
  /* <li> */
}
{
  /* <div className="row py-0 ">
                <Link className="nav-textcolor" to="#">
                  <div className="  px-3 p-3 ">
                    <div className="d-flex ">
                      <span>Human Resource</span>
                    </div>
                  </div>
                </Link>
              </div> */
}
{
  /* <nav */
}
{
  /* // show={setSubnav}
              // className={subnav ? "ul_resourse active" : "ul_resourse"}
              // > */
}
{
  /* //   <ul> */
}
{
  /* <li className="list_style">
                    <div className="row py-0 ">
                      <Link
                        className="nav-textcolor"
                        to={ROUTES.DEPARTMENTMASTERVIEW}
                      >
                        <div className="d-flex gap-2 px-3 p-3 ">
                          <div>
                            <img src={star} alt="" height={17} width={17} />
                          </div>
                          <label>Department</label>
                        </div>
                      </Link>
                    </div>
                  </li> */
}
{
  /* <li className="list_style"> </li>
                  <li className="list_style"> </li>
                  <li className="list_style"> </li>
                  <li className="list_style"></li>
                  <li className="list_style"> </li>
                  <li className="list_style"> </li>
                  <li className="list_style"></li>
                  <li className="list_style"></li>
                  <li className="list_style"></li>
                  <li className="list_style"></li>
                  <li className="list_style"> </li>
                </ul>
              </nav>
            </li> */
}
