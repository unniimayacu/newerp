import React from "react";
// import { MdOutlineWork } from "react-icons/md";
// import { RiDashboardLine } from "react-icons/ri";
// import { MdGroups } from "react-icons/md";
import award from './img/Icon awesome-award.svg'
import dashboard from './img/Group 3.svg'
import work from './img/Icon material-work.svg'
import star from './img/Icon awesome-star.svg'

export const Siderbardata = [
  {
    icon: <img src={dashboard} alt="" height={15} width={15} />,
    title: "Dashboard",
    path: "/dashboard",
    cName: "nav-text",
  },
  {
    icon: <img src={star} alt="" height={18} width={18} />,
    title: "Department",
    path: "/departmentmasterview",
    cName: "nav-text",
  },
  {
    icon: <img src={award} alt="" height={18} width={18} />,
    title: "Designation",
    path: "/designationview",
    cName: "nav-text",
  },
  {
    icon: <img src={work} alt="" height={18} width={18} />,
    title: "Employee Category",
    path: "/employeecategoryview",
    cName: "nav-text",
  },
  {
    title: "Category",
    path: "/category",
    cName: "nav-text",
  },
  {
    title: "Add New Customer",
    path: "/AddNewcustomer",
    cName: "nav-text",
  },
  {
    title: "Add New Quotation",
    path: "/addnewquotation",
    cName: "nav-text",
  },
  {
    title: "Add New Supplier",
    path: "/addsupplier",
    cName: "nav-text",
  },
  {
    title: "View Supplier",
    path: "/viewsupplier",
    cName: "nav-text",
  },
  {
    title: "View Supplier List",
    path: "/suppliers",
    cName: "nav-text",
  },
  {
    title: "Add New Product",
    path: "/addproduct",
    cName: "nav-text",
  },
  {
    title: "View Customer",
    path: "/viewcustomer",
    cName: "nav-text",
  },
  {
    title: "View Product",
    path: "/viewproduct",
    cName: "nav-text",
  },
  {
    title: "View Customerlist",
    path: "/customers",
    cName: "nav-text",
  },
  {
    title: "View Productlist",
    path: "/products",
    cName: "nav-text",
  },
];