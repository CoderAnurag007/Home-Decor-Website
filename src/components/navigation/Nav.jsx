import React from "react";
import { useState } from "react";
import "./nav.css";
const Nav = () => {
  var logo = document.getElementsByClassName("logo");
  const [style, setstyle] = useState({});
  const change = () => {
    setstyle({
      color: "white",
    });
  };

  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={change} style={style}>
          Home Maker
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
