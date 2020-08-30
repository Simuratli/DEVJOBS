import React from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <div className="input-container">
      <input
        style={props.location ? { borderLeft: "1px solid black" } : null}
        type={props.type}
        autoComplete="off"
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        className={`input ${props.className}`}
      />
    </div>
  );
};

export default Input;
