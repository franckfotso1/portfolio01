import React from "react";
import author from "../mee.PNG";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Franck. I have been developing websites for over 2 years. I'm Full-Stack Web Developer. Technologies I use is MERN(MongoDB, ReactJS and NodeJS).

            I create responsive websites that are displayed on all devices desktops and smartphones.

            Of course, before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (sketch).

            
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

