import React from "react";
import "./button.scss";

// function Button() {
  const Button = React.forwardRef((props, ref) => {
    const {
      btnType = "primary",
      rounded = false,
      halfrounded = false,
      prependIcon = null,
      appendIcon = null,
      onClick,
      children,
      className,
      sharp = false,
      fullhalfrounded=false,
      ...rest
    } = props;
    var classNames = "";

    if (btnType === "primary") {
      classNames += " erp__btn_primary";
    }
      if (btnType ==="secondary" ) {
        classNames += " erp__btn_secondary";
      }
    if (btnType === "ternary") {
    classNames += " erp__btn_ternary";
    }
   if(btnType === "terneryicon") {
    classNames += "erp__btn_terneryicon"
   }

    if (prependIcon) {
      classNames += " erp__btn-prepend-icon";
    }

    if (appendIcon) {
      classNames += " erp__btn-append-icon";
    }

    if (rounded) {
      classNames += " erp_btn-rounded";
    }
    if (btnType === "white") {
      classNames += " erp__btn_white "
    }
    if (btnType === "blue") {
      classNames += " erp__btn-blue"
    }
    if (halfrounded) {
      classNames += " erp__half-rounded"
    }
     if (fullhalfrounded) {
       classNames += " erp__full_half-rounded";
     }

    return (
      <>
        <button
          ref={ref}
          onClick={onClick}
          className={`cif__btn px-3 ${classNames} ${className}`}
          {...rest}
        >
          {prependIcon ? (
            <span ref={ref} className="cif__btn-prepend-icon-wrapper">
              {prependIcon}
            </span>
          ) : null}{" "}
          <span ref={ref} className="">
            {children}
          </span>
          {appendIcon ? (
            <span ref={ref} className="cif__btn-append-icon-wrapper">
              {appendIcon}
            </span>
          ) : null}
        </button>
      </>
    );
  });
// }

export default Button;
