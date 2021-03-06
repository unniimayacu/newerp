import React from "react";
import "./newcontact.scss"
import { AiFillFileExcel } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { AiOutlineFileJpg } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";
import { IoBook } from "react-icons/io5";
function Newcontact() {
  return (
    <>
      <div className="d-flex gap-2  ">
        <div className=" new_rounded_border border__radius ">
          <ImFilesEmpty className="erp_dwnld__icon__size " />
        </div>
        <div className=" new_rounded_border border__radius">
          <AiFillFileExcel className="erp_dwnld__icon__size " />
        </div>
        <div className=" new_rounded_border border__radius">
          <AiOutlineFileJpg className="erp_dwnld__icon__size " />
        </div>
        <div className=" new_rounded_border border__radius">
          <AiFillFilePdf className="erp_dwnld__icon__size " />
        </div>
        <div className=" new_rounded_border border__radius">
          <AiFillPrinter className="erp_dwnld__icon__size " />
        </div>
        <div className=" new_rounded_border border__radius">
          <IoBook className="erp_dwnld__icon__size " />
        </div>
      </div>
    </>
  );
}

export default Newcontact;




     {
       /* <div className="newcontactfile_icon_size  new_rounded_border p-1 px-2 ">
        <ImFilesEmpty />
      </div>
      <div className="newcontactfile_icon_size new_rounded_border p-1 px-1  ms-1">
        <AiFillFileExcel />
      </div>
      <div className="newcontactfile_icon_size new_rounded_border p-1 px-1 ms-1">
        <AiOutlineFileJpg />
      </div>
      <div className="newcontactfile_icon_size new_rounded_border p-1 px-1 ms-1">
        <AiFillFilePdf />
      </div>
      <div className="newcontactfile_icon_size new_rounded_border p-1 px-1 ms-1">
        <AiFillPrinter />
      </div>
      <div className="newcontactfile_icon_size new_rounded_border p-1 px-1 ms-1">
        <IoBook />
      </div> */
     }









 {
   /* <div className="d-flex justify-content-start  col-6  ">
        <h5 className="ms-5" >Customers</h5>
        <div className="ms-3  ">
          <button className="newcontact__button p-2 px-4 text-white d-flex  ">
            New Contact
            <AiOutlinePlus className="newcontact_icon_size ms-1" />
          </button>
        </div>
        <div className="ms-3  ">
          <button className="newcontact__button p-2 px-4 text-white d-flex  ">
            Upload Via CSV
            <FiUpload className="newcontact_icon_size ms-2" />
          </button>
        </div>
      </div> */
 }
//AiOutlinePlus
//FiUpload
//AiFillFilePdf
//AiOutlineFilePdf
//AiFillFileExcel
//AiOutlineFileExcel
//AiOutlineFileJpg
//ImFilesEmpty
//AiFillPrinter
//IoBookOutline
//IoBook