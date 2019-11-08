import React from "react";



const OperatorButton = (props) => {
  console.log(props);
  return (
    <button class="operators.btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;