import React from "react";
import "./Footer.css";
import { withRouter } from "react-router-dom";
const footer = (props) => {
  console.log();

  const style = {
    position: "absolute",
    bottom: "0"
  };

  return (
    <div
      style={props.location.pathname === "/" ? style : null}
      className="footer"
    >
      Developed with<span aria-labelledby='img' role="img">❤️</span> by <a href="https://github.com/Simuratli">Elcan Simuratli</a>
    </div>
  );
};

export default withRouter(footer);
