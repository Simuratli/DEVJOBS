import React from "react";
import "./Wall.css";
const wall = (props) => {
  return (
   <div className='wallcontainer'>
      <div
      style={{
        backgroundImage: `url(${require("../../assets/images/ezgif.com-optimize.gif")})`
      }}
      className="wallpaper"
    >
      {props.children}
    </div>
   </div>
  );
};

export default wall;
