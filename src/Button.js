import React from "react";


function Button({ color, setColor }) {
  return (
    <button
      // className={color}
      style={{
        backgroundColor: color,
      }}
      onClick={() => {
        console.log('clicked');
       
        setColor(color);
        console.log('color');

      }}
    >
      {color}
    </button>
  );
}

export default Button;