import Header from "components/header/Header";
import Slidebar from "components/Slidebar/Slidebar";
import React, { useState } from "react";
import "./layout.scss";

function Layout(props) {
  const { children } = props;
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <div>
        <Header onMenuClick={() => {
          setShowMenu(!showMenu)
        }} />
      </div>
      <div className="d-flex">
        <div className={`${showMenu ? 'sidebarWrapper' : 'd-none'}`}>
          <Slidebar />
        </div>
        <div className={`${showMenu ? 'contentWrapper' : 'w-100'}`}>
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
