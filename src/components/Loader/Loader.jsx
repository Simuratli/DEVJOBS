import React from "react";
import "./Loader.css";
const loader = () => {
  return (
    <div className="loader">
      <img
        className="Loader"
        src={require("../../assets/images/DzUw.gif")}
        alt="Loader"
      />
    </div>
  );
};

export default loader;
