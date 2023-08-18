import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.btnHandler();
      }}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
