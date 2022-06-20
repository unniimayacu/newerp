import Header from "components/header/Header";
import Slidebar from "components/Slidebar/Slidebar";
import React from "react";
import "./layout.scss";

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="d-flex">
        <div className="sidebarWrapper">
          <Slidebar />
        </div>
        <div className="contentWrapper">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
