import React, { useState } from "react";
import Input from "../Input/Input";
import { withRouter } from "react-router-dom";
import "./Search.css";

const Search = (props) => {
  const [state, setState] = useState({
    work: "",
    location: ""
  });

  const fetchSearch = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: "/jobs",
      search: `?search=${state.work}&location=${state.location}`
    });
  };

  const takeValue = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value.trim()
    }));
  };

  return (
    <div className="search">
      <form onSubmit={fetchSearch}>
        <div className="searchCenter">
          <Input
            onChange={takeValue}
            className="mainPage_search"
            type="text"
            name="work"
            placeholder="Job Name"
          />
          <Input
            onChange={takeValue}
            className="mainPage_search"
            type="text"
            name="location"
            location
            placeholder="Location or remote"
          />
          <button
            disabled={state.work === ""}
            onClick={fetchSearch}
            className="searchBtn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Search);
