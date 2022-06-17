import React from 'react'
import "./profile.scss"
import { CgProfile } from "react-icons/cg";
  const Profile = React.forwardRef((props, ref) => {
    const {
      inputType = "primary",
      cname ="secondary",
      emails ="ternery",
      children,
      className,
      ...other
    } = props;
     var classNames = "";

       if (inputType === "primary") {
         classNames += " erp__profname_primary";
       }
       if (cname === "secondary") {
         classNames += " erp__prof_cname_secondary";
       }
    return (
      <>

        <div className="">
       <span className=" prof_erp_size">
         <CgProfile />
       </span>
     </div>
      </>
    );
  });
export default Profile;


// CgProfile