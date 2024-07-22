import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const changeTheme = () => {
    setStyle(
      ctmStyle.color === "white"
        ? {
            color: "Black",
            backgroundColor: "white",
            border: "2px solid black",
          }
        : { color: "white", backgroundColor: "grey", border: "2px solid black" }
    );
  };
  // const changeTheme = () => {
  //   console.log("");
  // };

  const [ctmStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "2px solid black",
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/qrgenerator"
              >
                QR Code Generator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.aboutText}
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/qrCode_Generator"
              >
                QR Code
              </Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className="d-flex">
            <button className="btn btn-primary " onClick={changeTheme}>
              Enable Dark Mode
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
