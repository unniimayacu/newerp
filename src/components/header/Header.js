import React from 'react'
import "./header.scss"
import {Navbar, NavDropdown, Nav, Container  } from 'react-bootstrap'
import { GrSearch, } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiBook } from "react-icons/fi";


function Header() {
  return (
    <>
      <Navbar expand="lg" className="navbar__color  p-4">
        {/* <Container> */}
          <Navbar.Brand href="#home" className="">
            <AiOutlineMenu className="header_icon__size" />{" "}
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div>
                <div className="headersearch__size">
                  {" "}
                  {/* <GrSearch /> */}
                  <div className="headerinputsearch">
                    {/* <GrSearch /> */}
                    <input
                      className="form-control search__border  "
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </Nav>
            <Nav className="me-5  ">
              <div className="plusicon_size">
                <FiBook />
              </div>
            </Nav>
            <Nav className="me-5  ">
              <div className="plusicon_size">
                <BsPlusCircleFill />
              </div>
            </Nav>
            <Nav className="me-5">
              <div className="plusicon_size">
                <FaBell />
              </div>
            </Nav>
            <Nav className="me-5">
              <div className="profileicon_size">
                <CgProfile />
              </div>
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default Header
//AiOutlineMenu
//GrSearch
//BsPlusCircleFill
//BsPlusCircle
//FaBell
//BsBell
//CgProfile
//FiBook