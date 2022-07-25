import React from "react";
import "./main.css";
import Nav from "./navigation/Nav";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/section3";

const Main = () => {
  return (
    <>
      <div className="main">
        <Nav />
        <Section1 />
        <Section3 />
        <Section2 />
      </div>
    </>
  );
};
export default Main;
