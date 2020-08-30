import React from "react";
import "./Wall.css";
const wall = (props) => {
  return (
   <div className='wallcontainer'>
      <div
      style={{
        backgroundImage: `url(${require("../../assets/images/happy_guy_walk.gif")})`
      }}
      className="wallpaper"
    >
      {props.children}
    </div>
   </div>
  );
};

export default wall;
