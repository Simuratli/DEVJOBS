import React, { useState } from "react";
import "./Card.css";
import ReactHtmlParser from "react-html-parser";
import { motion } from "framer-motion";

function Card(props){

 const [state, setState] = useState({
   open:false
 })


  const variants = {
    open: {
      height: "auto",
      paddingBottom: "10px"
    },
    closed: { height: 0, overflow: "hidden", paddingBottom: "0" }
  };

  const Svgvariants = {
    open: {
      transform: "rotate(180deg)"
    },
    closed: {
      transform: "rotate(0)"
    }
  };



  return (
    <>
      <div className="card">
        <div className="card_visible">
          <div className="card_info">
            <h1 className="card_name" onClick={() => setState({open:!state.open})}>
              {props.name}
              <motion.span
                style={{ display: "inline-block" }}
                variants={Svgvariants}
                animate={state.open ? "open" : "closed"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </motion.span>
            </h1>
            <div className="company_info">
              <a href={props.companyLink}>
                <img
                  className="company-image"
                  src={props.companyImage}
                  alt=""
                />
                <h2 className="company-name">{props.companyName}</h2>
              </a>
            </div>
            <h4 className="adress">Location:{props.adress}</h4>
            <br />
            <h6>{props.time}</h6>
          </div>
          <div className="card_apply">
            <a className="applytButton" href={props.link}>
              Apply
            </a>
          </div>
        </div>
        <motion.div
          initial={false}
          transition={{ type: "tween", stiffness: 100 }}
          animate={state.open ? "open" : "closed"}
          variants={variants}
          className="card_unvisible"
        >
          {ReactHtmlParser(props.info)}
          <div align="center">
            <h3>How to apply</h3>
            <p>{ReactHtmlParser(props.apply)}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
