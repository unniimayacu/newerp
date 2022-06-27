import React from 'react'
import {  Modal } from "react-bootstrap";
import { useState } from "react";
import "./modal.scss"


function CustomModal(props) {

    const{ Button ,
        className ,
        onChange,
        onClick,
        modalTitle,
        modalBody,
        children,
        onHide,
        size,
        show = false,
        ...rest } = props;
         var classNames = "";

    //   const [show, setShow] = useState(false);

    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);



  return (
    <>
      <Modal
        centered={true}
        onHide={onHide}
        show={show}
        size="lg"
        className=""
      >
        <div className="erp_modal_radius">
          {/* <Modal.Header closeButton closeVariant="white"></Modal.Header> */}

          <div
            className="  erp__modal_header  "
            closeButton
            closeVariant="white"
          >
            <div className="p-3">
              {" "}
              <h5> {modalTitle} </h5>{" "}
            </div>

            <div className="erp__modal__body m-0 p-0 ">
              <div className="p-4 mt-4"></div>
              <div className="mx-5">{children}</div>
            </div>
          </div>
          <div className="erp__modal__footer"></div>
        </div>
      </Modal>
    </>
  );
}

export default CustomModal;