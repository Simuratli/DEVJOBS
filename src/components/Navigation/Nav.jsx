import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Logo from '../Logo/Logo'
const nav = () => {
  return (
   <>
  <div className="logoContainer">
    <Logo/>
  </div>
    <ul className="nav_list">
      <li className="nav_list_item">
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li className="nav_list_item">
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
    </ul>
   </>
  );
};

export default nav;
