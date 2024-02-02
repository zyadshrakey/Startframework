import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <>
        <section
          className=" container-fluid about-sec  text-center vh-100 d-flex  flex-column  justify-content-center
"
        >
          <h1 className=" m-0 text-white">ABOUT COMPONENT</h1>
          <div className="total-lines d-flex justify-content-center  align-items-center">
            <div className="line-before-about"></div>
            <i className="fa-solid fa-star star text-white m-4 "></i>
            <div className="line-after-about"></div>
          </div>
          <div class="row justify-content-center align-items-center g-2 p-5 ">
            <div class="col-md-6 text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div class="col-md-6 text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
          <div className="lead text-white"></div>
        </section>
      </>
    );
  }
}
