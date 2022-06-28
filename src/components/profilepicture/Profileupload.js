import React from 'react'
import { CgProfile } from "react-icons/cg";
import "./profile.scss"
function Profileupload(props) {

 const {
   className,
   onClick,
   titlename,
   ...rest
 } = props;
//  var classNames = "";

  return (
    <>
      <div className=" ">
        <p className={` `}>{titlename}</p>
        <label htmlFor="file">
          <div className={`card  card_bg_color border-0 `}>
            <CgProfile className="profile__iconsize" color="lightgray" />
          </div>
          <input
            type="file"
            id="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          <p className="color__browse">Browse</p>
        </label>
        <div className="">
          {/* <input type="file" hidden className="erp_profile__custom" /> */}
          {/* <p className="">Browse</p> */}
        </div>
      </div>
    </>
  );
}

export default Profileupload