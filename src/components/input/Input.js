import "./input.scss"
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const {
    inputType = "primary",
    rounded = false,
    prependIcon = null,
    appendIcon = null,
    className,
    wrapperClass,
    ...other
  } = props;

  let classNames = "";

  if (rounded) {
    classNames += " cif__input-rounded";
  }

  if (inputType === "transperent") {
    classNames += " cif__input_transperent";
  }

  return (
    <div
      className={`position-relative d-flex align-items-center cif__input-wrapper ${classNames} ${wrapperClass}`}
    >
      {prependIcon ? (
        <span className="d-flex align-items-center justify-content-center">
          {prependIcon}
        </span>
      ) : null}
      <input
        ref={ref}
        type="text"
        className={`${className} cif__input`}
        {...other}
      />
      {appendIcon ? (
        <span className="d-flex align-items-center justify-content-center ">
          {appendIcon}
        </span>
      ) : null}
    </div>
  );
});

export default Input;
