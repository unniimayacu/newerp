// import Category from 'pages/Category/Category';
import Category from "pages/Category/Category";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { Siderbardata } from "./Siderbardata";
// import styles from'./slidebar.module.scss'
import "./slider.scss";

function Slidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="w-100 navWrapper h-100">
        {/* <ProSidebar>
          <Menu iconShape="square">
            <Link to="/category" clasName="menu-bars">
              <MenuItem icon>Category</MenuItem>
            </Link>
            <SubMenu title="Components" icon>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar> */}
        {/* <div className="navbar">
          <Link to="#" className="menu_bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items px-0 mt-3">
            {Siderbardata.map((item, index) => {
              return (
                <li key={index} className={`${item.cName} px-0`}>
                  <Link to={item.path} activeClassName="selected">
                    <span>
                      {item.icon} {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
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
