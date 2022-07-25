import React from "react";
import { useState } from "react";
import svg from "./align-right-solid.svg";
import "./nav.css";
const Nav = () => {
  var logo = document.getElementsByClassName("logo");
  const [style, setstyle] = useState({});
  const change = () => {
    setstyle({
      color: "white",
    });
  };

  const [colstyle, setcolstyle] = useState({});
  const [toggle, settoggle] = useState(false);

  const collapse = () => {
    if (toggle === false) {
      setcolstyle({
        right: "0px",
        transition: "1.5s all",
      });
      settoggle(true);
    } else {
      setcolstyle({
        right: "-220px",
        transition: "1.5s all",
      });
      settoggle(false);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={change} style={style}>
          Home Maker
        </div>
        <div className="links">
          <img className="collapse-btn" src={svg} alt="" onClick={collapse} />
          <div className="collapse-nav" style={colstyle}>
            <ul className="phone-ul">
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
                <a href="/">Services</a>
              </li>
            </ul>
          </div>
          <ul className="desk-ul">
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
