import { FaArrowAltCircleDown } from 'react-icons/fa';
import React from "react";
import Typed from "react-typed";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>web development and Cloud Technologies</h1>
        <Typed
          className="typed-text"
          strings={["DevOps{CI/CD, Docker, K8s, Terraform, AWS}", "Dev{React, Node, Jest, Js, Java}", "And More..."]}
          typeSpeed={90}
          backSpeed={180}
          loop
        />
   <div className="test">
        <a href="#" className="btn-main-offer">contact me</a>
        <a href="#" className="btn-main-offer">Download CV <FaArrowAltCircleDown /></a>
    </div>

      </div>
    </div>
  )
}

export default Header;

