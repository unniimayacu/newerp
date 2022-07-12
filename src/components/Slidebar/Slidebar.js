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
import "./slider.scss";

function Slidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  

  return (
    <>
      <div className="w-100 navWrapper h-100">
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items px-0 mt-3">
            <div className="row  ">
              <Link
                // className="col-12 col-lg-6 text-center navigation__left-item navigation__link"
                className="nav-textcolor"
                to={ROUTES.DASHBOARD}
              >
                <div className="d-flex gap-2  px-3 p-3  ">
                  <div>
                    <img src={dashboard} alt="" height={17} width={17} />
                  </div>
                  <label className="">Dashboard</label>
                </div>
              </Link>
            </div>

            <li>
              <div className="row py-0 ">
                <Link className="nav-textcolor" to="/">
                  <div className="  px-3 p-3 ">
                    <div className="d-flex ">
                      <span>Human Resource</span>
                    </div>
                  </div>
                </Link>
              </div>
            </li>

            

            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.DEPARTMENTMASTERVIEW}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={star} alt="" height={17} width={17} />
                  </div>
                  <label>Department</label>
                </div>
              </Link>
            </div>

            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.DESIGNATIONVIEW}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={award} alt="" height={17} width={17} />
                  </div>
                  <label>Designation</label>
                </div>
              </Link>
            </div>
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
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.EMPLOYEECATEGORYVIEW}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={work} alt="" height={17} width={17} />
                  </div>
                  <label>Employee Category</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.OVERTIMEMASTERVIEW}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={time} alt="" height={17} width={17} />
                  </div>
                  <label>OverTime Rate Master</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.SECTORMASTERVIEW}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={sector} alt="" height={17} width={17} />
                  </div>
                  <label>Sector Master</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.LEAVETYPEMASTERVIEW}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={time} alt="" height={17} width={17} />
                  </div>
                  <label>Leave Type Master</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.EMPCATEGORYLEAVELIST}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={time} alt="" height={17} width={17} />
                  </div>
                  <label>Employee Category Leaves</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.HOLIDAYMASTERVIEW}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={sector} alt="" height={17} width={17} />
                  </div>
                  <label>Holiday Master</label>
                </div>
              </Link>
            </div>
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

            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.LEAVEAPPLICATIONLIST}>
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={sector} alt="" height={17} width={17} />
                  </div>
                  <label>Leave Application </label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link
                className="nav-textcolor"
                to={ROUTES.LEAVEAPPLICATIONAPPROVAL}
              >
                <div className="d-flex gap-2 px-3 p-3 ">
                  <div>
                    <img src={sector} alt="" height={17} width={17} />
                  </div>
                  <label>Leave Application Approval </label>
                </div>
              </Link>
            </div>

            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.CATEGORY}>
                <div className="  px-3 p-3 ">
                  <label> Category</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.UNITCATEGORY}>
                <div className="  px-3 p-3 ">
                  <label> Unit Category</label>
                </div>
              </Link>
            </div>

            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.ADDNEWCUSTOMER}>
                <div className="  px-3 p-3 ">
                  <label> Add Customer</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.VIEWCUSTOMER}>
                <div className="  px-3 p-3 ">
                  <label>View Customer</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.CUSTOMERS}>
                <div className="  px-3 p-3 ">
                  <label> Customerlist</label>
                </div>
              </Link>
            </div>

            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.ADDPRODUCT}>
                <div className="  px-3 p-3 ">
                  <label>Add Product</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.VIEWPRODUCT}>
                <div className="  px-3 p-3 ">
                  <label> View Product</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.PRODUCTS}>
                <div className="  px-3 p-3 ">
                  <label> ProductList</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.ADDSUPPLIER}>
                <div className="  px-3 p-3 ">
                  <label> Add Supplier</label>
                </div>
              </Link>
            </div>
            <div className="row py-0 ">
              <Link className="nav-textcolor" to={ROUTES.UNITTYPE}>
                <div className="  px-3 p-3 ">
                  <label> UnitType List</label>
                </div>
              </Link>
            </div>
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

//  <nav className={slidebar ? 'nav-menu active' : 'nav-menu'}>
//             <ul className='nav-menu-items'>
//               <li className='navbar-toggle'>
//                 <Link to='#' className='menu-bars'>
//                   <AiOutlineClose />
//                 </Link>
//               </li>
//             </ul>
//           </nav>

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
