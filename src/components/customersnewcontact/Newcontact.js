import React from "react";
import "./newcontact.scss"
import { AiOutlinePlus } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { AiFillFileExcel } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { AiOutlineFileJpg } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";
import { IoBook } from "react-icons/io5";
function Newcontact() {
  return (
    <div className="row border-bottom py-3">
      <div className="d-flex justify-content-start  col-7 ">
        <h5>Customers</h5>
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
      </div>
      <div className="d-flex  col-5 ">
        <div className="newcontactfile_icon_size ms-5 ">
          <ImFilesEmpty />
        </div>
        <div className="newcontactfile_icon_size ms-5">
          <AiFillFileExcel />
        </div>
        <div className="newcontactfile_icon_size ms-5">
          <AiOutlineFileJpg />
        </div>
        <div className="newcontactfile_icon_size ms-5">
          <AiFillFilePdf />
        </div>
        <div className="newcontactfile_icon_size ms-5">
          <AiFillPrinter />
        </div>
        <div className="newcontactfile_icon_size ms-5">
          <IoBook />
        </div>
      </div>
    </div>
  );
}

export default Newcontact;
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