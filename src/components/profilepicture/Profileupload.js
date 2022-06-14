import React from 'react'
import { CgProfile } from "react-icons/cg";
import "./profile.scss"
function Profileupload() {
  return (
    <>
      <div className=" ">
        <p className={` `}>Profile Picture</p>
        <label htmlFor="file">
          <div
            className={`card p-3 card_bg_color border-0 `}
          >
            <CgProfile fontSize={50} color="lightgray" />
          </div>
          <input
            type="file"
            id="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </label>
     
      </div>
      <div>
        <p>Browse</p>
      </div>

    </>
  );
}

export default Profileupload